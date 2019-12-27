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
  width: 100vw;
`
export const ProductGrid = styled.ul`
  margin: 30px auto;
  padding-top: 20px;
  padding-inline-start: 0;
  width: 70%;
  @media (max-width: 1281px) {
    width: 90%;
  }
  @media (max-width: 999px) {
    width: 100%;
  }
  @media (max-width: 899px) {
    width: 80%;
  }
  @media (max-width: 659px) {
    width: 100%;
  }
  @media (max-width: 593px) {
    width: 80%;
  }
  @media (max-width: 377px) {
    width: 95%;
  }
`
const StoreHeader = styled.div`
  width: 100%;
  margin-top: 41px;
  height: 100px;
  background-image: ${cssVars.grdntGreen};
  align-self: flex-start;
  text-align: center;
  padding-top: 10px;
  font-size: 40px;
`
export default props => {
  const { products } = props
  const fadeNSlide = (component, delay = 0) => {
    return (
      <Fade delay={delay}>
        <Slide top cascade delay={delay}>
          {component}
        </Slide>
      </Fade>
    )
  }
  return (
    <>
      {console.log(props, "products")}
      {fadeNSlide(
        <StoreHeader>
          <StoreTitle>{props.page ? props.page : "All Items"}</StoreTitle>
        </StoreHeader>,
        500
      )}
      <ProductGrid>
        {products.map((product, inx) => (
          <ProductGridItem product={product} key={inx} />
        ))}
      </ProductGrid>
    </>
  )
}
