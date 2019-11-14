import React from 'react'
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

class ProductForm extends React.Component {
  state = {
    selectedVariant: {},
    selectedQuantity: 1,
  }

  handleVarietyChange = (evt) => {
    this.setState({
      selectedVariant: {...this.getVariantDataFromTitle(evt.target.value)},
    })

  }
  // this function handles the change in quantity via the number selector 
  handleQuantityChange = (evt) => {
    const isDigit = evt.target.value.match(/\d/g, '') && evt.target.value < 21 //number
    isDigit && (
      this.setState({
        selectedQuantity: evt.target.value,
      })
    )

  }

  getVariantDataFromTitle = (title) => {
    for(let i=0; i < this.props.variants.length; i++){
        if(this.props.variants[i].title === title){
          return this.props.variants[i]
        }
    }
  }


  // this handles the add to cart submission 
  handleAddToCart = () => {
    // TODO: Create Store Context for shopping cart
    console.log('TODO: create storecontext')
    console.log('productform handleAddToCart', this.state)
  }

  render(){
     return(

         <StyledContainer>
           <Row>
             <StyledFormGroup>
               <Label for="exampleNumber">Select Quantity:</Label>
               <Input
                 value={this.state.selectedQuantity}
                 onChange={this.handleQuantityChange}
                 type="number"
                 name="quantity"
                 id="quantitySelect"
               />
             </StyledFormGroup>
             {(this.props.variants && this.props.variants.length > 1) &&
                <StyledFormGroup>
                    <Label for="exampleSelect">Select Variety: </Label>
                    <Input
                      onChange={this.handleVarietyChange}
                      type="select" name="variety" id="varietySelect">
                         {this.props.variants.map( (item, inx) => {
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

              { this.state.selectedVariant.price &&
                 formatPrice( this.state.selectedVariant.price )
              }
            </Price>
          </Row>
          <ButtonContainer>
              <AddToCartButton handleAddToCart={this.handleAddToCart} />
          </ButtonContainer>

          </StyledContainer>

     )
  }

  componentDidMount(){
    this.setState({
      selectedVariant:  this.props.variants[0],
    })
  }
  componentDidUpdate( prevState ,prevProps){
    // const newSelection = (prevState.selectedVariant.title !== this.state.selectedVariant.title)
    //
    // if(newSelection){
    //   console.log(this.state.selectedVariant)
    // }
  }

}

export default ProductForm
