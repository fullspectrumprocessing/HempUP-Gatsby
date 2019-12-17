import React, { useState, useEffect } from "react"
import Client from "shopify-buy"

import Context from "../context/globalcontext"
export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

// new sec--------------------------------------------

// inital state
const initialState = {
  isCart: false,
  numInCart: 0,
}

// reducer function takes in state and action and updates global state
function reducer(state, action) {
  // if action type is SET_PAGE , set state to action.page

  if (action.type === "SET_CART") {
    return {
      ...state,
      isCart: action.isCart,
    }
  } else if (action.type === "SET_NUM") {
    return {
      ...state,
      numInCart: action.numInCart,
    }
  } else {
    throw new Error("bad action type")
  }
}

// // global context provider that we use in other components to acess state and dispatch
// const GlobalContextProvider = ({ children }) => {
//   // make const state and dispatch
//   const [state, dispatch] = React.useReducer(reducer, initialState)
//   return (
//     // wrap providers around children and set values to state and dispatch
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   )
// }

// //////////////////////////////////////////////

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
})

const ContextProvider = ({ children }) => {
  // new______________________________
  const [state, dispatch] = React.useReducer(reducer, initialState)
  // _----------------------------------
  let initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  }

  const [store, updateStore] = useState(initialStoreState)

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== "undefined"
      const existingCheckoutID = isBrowser
        ? localStorage.getItem("shopify_checkout_id")
        : null

      const setCheckoutInState = checkout => {
        if (isBrowser) {
          localStorage.setItem("shopify_checkout_id", checkout.id)
        }

        updateStore(prevState => {
          return {
            ...prevState,

            checkout,
          }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = id => store.client.checkout.fetch(id)

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID)
          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null)
        }
      }

      const newCheckout = await createNewCheckout()
      setCheckoutInState(newCheckout)
    }

    initializeCheckout()
  }, [store.client.checkout])

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <Context.Provider
          value={{
            store,
            addVariantToCart: (variantId, quantity) => {
              if (variantId === "" || !quantity) {
                console.error("Both a size and quantity are required.")
                return
              }

              updateStore(prevState => {
                console.log(prevState, "prev sate")
                return { ...prevState, adding: true }
              })

              const { checkout, client } = store

              const checkoutId = checkout.id
              const lineItemsToUpdate = [
                { variantId, quantity: parseInt(quantity, 10) },
              ]

              return client.checkout
                .addLineItems(checkoutId, lineItemsToUpdate)
                .then(checkout => {
                  updateStore(prevState => {
                    return { ...prevState, checkout, adding: false }
                  })
                })
            },
            removeLineItem: (client, checkoutID, lineItemID) => {
              return client.checkout
                .removeLineItems(checkoutID, [lineItemID])
                .then(res => {
                  updateStore(prevState => {
                    return { ...prevState, checkout: res }
                  })
                })
            },
            updateLineItem: (client, checkoutID, lineItemID, quantity) => {
              const lineItemsToUpdate = [
                { id: lineItemID, quantity: parseInt(quantity, 10) },
              ]

              return client.checkout
                .updateLineItems(checkoutID, lineItemsToUpdate)
                .then(res => {
                  updateStore(prevState => {
                    return { ...prevState, checkout: res }
                  })
                })
            },
          }}
        >
          {children}
        </Context.Provider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
export default ContextProvider
