import React, { useContext } from 'react'

import StoreContext from '../../../context/globalcontext'
import { Wrapper, Card, ContentWrap, Title, Price, Image  } from './lineItem.css'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <Image
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (


    // <Card>
    // {console.log(data)}
    // <ContentWrap>
    
    //     <Image
    //       fluid={
    //         data.allShopifyProduct.edges[8].node.images[0].localFile
    //           .childImageSharp.fluid
    //       }
    //     />
  
    //   <Title>{data.allShopifyProduct.edges[8].node.title}</Title>

    //   <Price>${data.allShopifyProduct.edges[8].node.variants[0].price}</Price>
    //   {/* buttons section */}
    //   <AddToCartButton
    //     handleAddToCart={() => {
    //       handleAddToCart(data.allShopifyProduct.edges[8].node)
    //     }}
    //   />
    <Wrapper>
        <Card>
        <ContentWrap>

        
      {variantImage}
      <Title>
        {line_item.title}
        {`  `}
        {line_item.variant.title === !'Default Title'
          ? line_item.variant.title
          : ''}
      </Title>
      {/* <Price>{selectedOptions}</Price> */}
  <Price>{line_item.variant.price}</Price>
      {line_item.quantity}
      <button onClick={handleRemove}>Remove</button>
      </ContentWrap>
      </Card>
    </Wrapper>
  )
}

export default LineItem