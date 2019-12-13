import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import AddToCartButton from '../../components/store/AddToCartButton'
import {formatPrice} from '../../utils/stringFormatHelpers'

const StyledContainer = styled(Container)`
  width: 20%;
  margin: 10px auto;
  font-family: 'lato';
  color: #444;
`
const StyledFormGroup = styled(FormGroup)`
  margin: 0 auto;
`

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #98795B;
  pointer-events: none;
  margin: 0 auto;
`
const ButtonContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ProductForm = (props) => {

  const [state, setState] = useState({
    selectedVariant: {},
    selectedQuantity: 1,
    
  })


  const handleVarietyChange = (evt) => {
    setState({
      selectedVariant: {...getVariantDataFromTitle(evt.target.value)},
    })

  }
  // this function handles the change in quantity via the number selector 
  const handleQuantityChange = (evt) => {
    const isDigit = evt.target.value.match(/\d/g, '') && evt.target.value < 21 //number
    isDigit && (
      setState({
        selectedQuantity: evt.target.value,
      })
    )

  }

  const getVariantDataFromTitle = (title) => {
    for(let i=0; i < props.variants.length; i++){
        if(props.variants[i].title === title){
          return props.variants[i]
        }
    }
  }


  // this handles the add to cart submission 
  const handleAddToCart = () => {
    // TODO: Create Store Context for shopping cart
    console.log('TODO: create storecontext')
    console.log('productform handleAddToCart', state)
  }

  const componentDidMount = () => {
    setState({
      selectedVariant:  props.variants[0],
    })
  }
  const componentDidUpdate = ( prevState ,prevProps)=> {
    // const newSelection = (prevState.selectedVariant.title !== this.state.selectedVariant.title)
    //
    // if(newSelection){
    //   console.log(this.state.selectedVariant)
    // }
  }


     return (

         <StyledContainer>
           <Row>
             <StyledFormGroup>
               <Label for="exampleNumber">Select Quantity:</Label>
               <Input
                 value={state.selectedQuantity}
                 onChange={handleQuantityChange}
                 type="number"
                 name="quantity"
                 id="quantitySelect"
               />
             </StyledFormGroup>
             {(props.variants && props.variants.length > 1) &&
                <StyledFormGroup>
                    <Label for="exampleSelect">Select Variety: </Label>
                    <Input
                      onChange={handleVarietyChange}
                      type="select" name="variety" id="varietySelect">
                         {props.variants.map( (item, inx) => {
                             return <option key={inx.toString()} inx={inx}>
                                      {item.title}
                                    </option>
                          })}
                    </Input>
                </StyledFormGroup>
              }
          </Row>
          <Row>
            <Price>

              {state.selectedVariant.price &&
                 formatPrice( state.selectedVariant.price )
              }
            </Price>
          </Row>
          <ButtonContainer>
              <AddToCartButton handleAddToCart={handleAddToCart} />
          </ButtonContainer>

          </StyledContainer>

     )
  

 

}

export default ProductForm
