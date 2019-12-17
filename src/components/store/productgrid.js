import React from "react"
import styled from "styled-components"
import ProductGridItem from "./ProductGridItem"
import cssVars from "../../theme/_variables"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
const StoreTitle = styled.h1`
  font-size: 60px;
  font-family: lato, sans serif;
  
  color: ghostwhite;
`
const ProductGrid = styled.ul`
  margin: 30px auto;
  padding-top: 20px;
  padding-inline-start: 0;
  width: 70%;
`
const StoreHeader = styled.div`
  width: 100%;
  margin-top: 80px;
  height: 100px;
  background-image: ${cssVars.grdntGreen};
  align-self: flex-start;
  text-align: center;
  padding-top: 10px;
  font-size: 40px;
`
export default (props) => {
  const {products} = props
  const fadeNSlide = (component, delay = 0) => {
    return (
      <Fade delay={delay}>
        <Slide bottom cascade delay={delay}>
          {component}
        </Slide>
      </Fade>
    )
  }
  return (
   
    <>
     {console.log(props, "products")}
      <StoreHeader>
        <StoreTitle>{props.page ? props.page : "All Items"}</StoreTitle>
      </StoreHeader>
      <ProductGrid>
        {products.map((product, inx) => (
          <ProductGridItem product={product} key={inx} />
        ))}
      </ProductGrid>
    </>
  )
}
