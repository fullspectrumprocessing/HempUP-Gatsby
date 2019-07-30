import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AddToCartButton from '../../components/AddToCartButton'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Img from "gatsby-image"

const StyledContainer = styled(Container)`
  width: 20%;
  margin: 10px auto;

`
const StyledFormGroup = styled(FormGroup)`
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
    console.log('handleVarietyChange', evt.target.value)

    this.setState({
      selectedVariant:
        this.setState({
          selectedVariant: this.getVariantDataFromTitle(evt.target.value),
        })
    })
  }

  getVariantDataFromTitle = (title) => {
    for(let i=0; i < this.props.variants.length; i++){
        if(this.props.variants[i].title === title){
          return this.props.variants[i]
        }
    }
  }

  handleAddToCart = () => {
    console.log('TODO: handleAddToCart', this.state)
  }

  render(){
     return(

         <StyledContainer>
           <Row>
             <StyledFormGroup>
               <Label for="exampleNumber">Select Quantity:</Label>
               <Input
                 type="number"
                 name="quantity"
                 id="quantitySelect"
                 placeholder="1"
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

          <ButtonContainer>
              <AddToCartButton handleAddToCart={this.handleAddToCart} />
          </ButtonContainer>

          </StyledContainer>

     )
  }

  componentDidMount(){
    console.log('hello');
  }

}

export default ProductForm
