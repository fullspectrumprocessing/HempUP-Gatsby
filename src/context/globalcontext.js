  
import React from 'react'

const StoreContext = React.createContext()

export const GlobalDispatchContext = React.createContext()

export default StoreContext


// import React, { useReducer } from "react"
// export const GlobalStateContext = React.createContext()
// export const GlobalDispatchContext = React.createContext()

// const initialState = {
//   user: "",
//   cart: [],
// }

// // Reducer uses state and actions to update teh Global State
// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_USER": {
//       return {
//         ...state,
//         user: action.user,
//       }
//     }
//     case "SET_CART": {
//       return {
//         ...state,
//         cart: action.cart,
//       }
//     }
//     default:
//       throw new Error("reducer error")
//   }
// }

// // Here we use the reducer in the global context provider and make it available in other components so we can access state and dispatch at anytime

// const GlobalContexProvider = ({ children }) => {
//   // using reducer hook to set the state and dipatch(which alters the state)
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   )
// }
// export default GlobalContexProvider


// export const StoreContext = React.createContext()
