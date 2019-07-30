import React from 'react'
import PropTypes from 'prop-types'
import AddToCartButton from '../../components/AddToCartButton'
import { Container, FormGroup, Label, Input } from 'reactstrap';


class ProductForm extends React.Component {

  state = {
    selectedVariant: '',
    selectedQuantity: 1,
  }

  render(){
    console.log('variants', this.props.variants);
     return(
       <div>
         <FormGroup>
             <Label for="exampleNumber">Select Quantity:</Label>
             <Input
               type="number"
               name="number"
               id="quantityInput"
               placeholder="1"
             />
           </FormGroup>
           {(typeof this.props.variants !== 'undefined' && this.props.variants) &&
               <FormGroup>
                  <Label for="exampleSelect">Select Variety: </Label>
                  <Input type="select" name="select" id="exampleSelect">
                     {this.props.variants.map( (item, inx) => {
                       return <option key={inx.toString()}>{item.title}</option>
                     })}
                  </Input>
              </FormGroup>
            }
         <AddToCartButton />

       </div>

     )
  }

  componentDidMount(){
    console.log('hello');
  }

}



export default ProductForm
