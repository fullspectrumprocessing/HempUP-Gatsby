import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import Cart from "../../components/cart/cart"
import styled from "styled-components"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import cssVars from "../../theme/_variables"
import Modal from "../../components/Modal/modal"
import { Linkage } from "../../components/Modal/modal.css"

const CartTitle = styled.h1`
  color: ghostwhite;
  font-size: 60px;
  font-family: lato, sans serif;
  margin: 20px;
`
const CartHeader = styled.div`
  width: 100vw;
  background-image: ${cssVars.grdntGreen};
  text-align: center;
  margin-top: 41px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
`

const fadeNSlide = (component, delay = 0) => {
  return (
    <Fade delay={delay}>
      <Slide top cascade delay={delay}>
        {component}
      </Slide>
    </Fade>
  )
}
const CartPage = props => {
  const [openModal, setModal] = useState(false)


  useEffect(() => {
    const modalStatus = sessionStorage.getItem("modalStatus")
    if (modalStatus !== "closed") {
      setModal(true)
    }


    console.log(openModal, ":modal status")
 
  }, [])

  const closeModal = () => {
    setModal(false)
    sessionStorage.setItem("modalStatus", "closed")
    console.log(openModal, "modal status close buttn")
  }

  return (
    <>
      <Layout>
        <SEO />
        {fadeNSlide(
          <CartHeader>
            <CartTitle>Shopping Bag</CartTitle>
          </CartHeader>,
          500
        )}
                <Modal
          open={openModal}
          toggle={closeModal}
        
        >
        We are unable to process online payments right now, please check back with us shortly.
        </Modal>
        <Cart />
      </Layout>
    </>
  )
}

export default CartPage
