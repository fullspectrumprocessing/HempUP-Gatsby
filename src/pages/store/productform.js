import React from 'react'
import AddToCartButton from '../../components/AddToCartButton'
import { Container, FormGroup, Label, Input } from 'reactstrap';


class OrderForm extends React.Component {

  render(){

    const {variants} = this.props;

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
         <FormGroup>
            <Label for="exampleSelect">Select Variety: </Label>
            <Input type="select" name="select" id="exampleSelect">
               {variants.map( (item, inx) => {
                 return <option>{item.title}</option>
               })}

            </Input>
          </FormGroup>
         <AddToCartButton />

       </div>

     )
  }


}

export default ({variants}) => {
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
      <FormGroup>
         <Label for="exampleSelect">Select Variety: </Label>
         <Input type="select" name="select" id="exampleSelect">
            {variants.map( (item, inx) => {
              return <option>{item.title}</option>
            })}

         </Input>
       </FormGroup>
      <AddToCartButton />

    </div>


   )
}
