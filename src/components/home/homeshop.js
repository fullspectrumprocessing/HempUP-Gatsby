import {
  H2,
  Wrapper,
  Button,
  Card,
  Image,
  ImgWrap,
  ContentWrap,
} from "./homeshop.css"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Link } from "gatsby"
import ItemsCarousel from "react-items-carousel"
import AddToCartButton from "../../components/store/AddToCartButton"
import ViewDetailsButton from "../../components/store/ViewDetailsButton"

const HomeShop = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
            images {
              originalSrc
              localFile {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title
            variants {
              price
              title
              shopifyId
            }
            options {
              id
            }
            description
          }
        }
      }
    }
  `)

  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40

  const handleAddToCart = node => {
    console.log("TODO: ProductGridItem handleAddToCart", node)
  }

  return (
    <>
      <H2>Our Most Popular Products</H2>
      <Wrapper>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
               alwaysShowChevrons={true}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            infiniteLoop={true}
            leftChevron={<Button>{"<"}</Button>}
            rightChevron={<Button>{">"}</Button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {/* first card------------------------------ */}
            <Card>
              {console.log(data)}
              <ContentWrap>
              
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[8].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />
            
                <p>{data.allShopifyProduct.edges[8].node.title}</p>

                <p>${data.allShopifyProduct.edges[8].node.variants[0].price}</p>
                {/* buttons section */}
                <AddToCartButton
                  handleAddToCart={() => {
                    handleAddToCart(data.allShopifyProduct.edges[8].node)
                  }}
                />

                <Link
                  to={`/store/product/${data.allShopifyProduct.edges[8].node.handle}/`}
                >
                  <ViewDetailsButton />
                </Link>
              </ContentWrap>
            </Card>
            {/* card 2 ---------------------------------- */}
            <Card>
           
              {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
              <ContentWrap>
                <Image
                  fluid={
                    data.allShopifyProduct.edges[6].node.images[0].localFile
                      .childImageSharp.fluid
                  }
                />

                <p>{data.allShopifyProduct.edges[6].node.title}</p>

          
                <p>${data.allShopifyProduct.edges[6].node.variants[0].price}</p>

                {/* buttons section */}
                <AddToCartButton
                  handleAddToCart={() => {
                    handleAddToCart(data.allShopifyProduct.edges[6].node)
                  }}
                />

                <Link
                  to={`/store/product/${data.allShopifyProduct.edges[6].node.handle}/`}
                >
                  <ViewDetailsButton />
                </Link>
              </ContentWrap>
            </Card>
            {/* card 3 -------------------------------------------- */}
            <Card>
          
              <ContentWrap>
                <Image
                  fluid={
                    data.allShopifyProduct.edges[2].node.images[0].localFile
                      .childImageSharp.fluid
                  }
                />

                <p>{data.allShopifyProduct.edges[2].node.title}</p>

             
                <p>${data.allShopifyProduct.edges[2].node.variants[0].price}</p>

                {/* buttons section */}
                <AddToCartButton
                  handleAddToCart={() => {
                    handleAddToCart(data.allShopifyProduct.edges[2].node)
                  }}
                />

                <Link
                  to={`/store/product/${data.allShopifyProduct.edges[2].node.handle}/`}
                >
                  <ViewDetailsButton />
                </Link>
              </ContentWrap>
            </Card>
            {/* card 4 ------------------------------------------- */}
            <Card>
             
              <ContentWrap>
                <ImgWrap>
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[4].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />
                </ImgWrap>
                <p>{data.allShopifyProduct.edges[4].node.title}</p>

            
                <p>${data.allShopifyProduct.edges[4].node.variants[0].price}</p>

                {/* buttons section */}
                <AddToCartButton
                  handleAddToCart={() => {
                    handleAddToCart(data.allShopifyProduct.edges[4].node)
                  }}
                />

                <Link
                  to={`/store/product/${data.allShopifyProduct.edges[4].node.handle}/`}
                >
                  <ViewDetailsButton />
                </Link>
              </ContentWrap>
            </Card>
            {/* card 5 --------------------------------------------- */}
            <Card>
          
              <ContentWrap>
                <Image
                  fluid={
                    data.allShopifyProduct.edges[5].node.images[0].localFile
                      .childImageSharp.fluid
                  }
                />

                <p>{data.allShopifyProduct.edges[5].node.title}</p>

                <p>${data.allShopifyProduct.edges[5].node.variants[0].price}</p>

                {/* buttons section */}
                <AddToCartButton
                  handleAddToCart={() => {
                    handleAddToCart(data.allShopifyProduct.edges[5].node)
                  }}
                />

                <Link
                  to={`/store/product/${data.allShopifyProduct.edges[5].node.handle}/`}
                >
                  <ViewDetailsButton />
                </Link>
              </ContentWrap>
            </Card>
          </ItemsCarousel>
        </div>
      </Wrapper>
    </>
  )
}

export default HomeShop
