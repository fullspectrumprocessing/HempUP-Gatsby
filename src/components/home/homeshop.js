import {
  H2,
  Wrapper,
  ButtonRight,
  ButtonLeft,
  Card,
  Image,
  ContentWrap,
  Title,
  Price,
} from "./homeshop.css"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import ItemsCarousel from "react-items-carousel"
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

  function useWindowSize() {
    const isClient = typeof window === "object"

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
      if (!isClient) {
        return false
      }

      function handleResize() {
        setWindowSize(getSize())
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return windowSize
  }
  //! setting size as window size object
  const size = useWindowSize()

  // state for screen width
  const [width, setWidth] = useState(size.width)

  // on window change set state to window width
  useEffect(() => {
    const handleResize = () => setWidth(size.width)
    // add event listener to call function to read window size
    window.addEventListener("resize", handleResize)

    return () => {
      // remove event listener so it doesn't constintly update
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <>
      <H2>Our Most Popular Products</H2>
      <Wrapper>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            alwaysShowChevrons={true}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={(() => {
              if (width > 1100) {
                return 3
              } else if (width < 1101 && width > 750) {
                return 2
              } else {
                return 1
              }
            })()}
            gutter={30}
            infiniteLoop={true}
            leftChevron={<ButtonLeft>{"<"}</ButtonLeft>}
            rightChevron={<ButtonRight>{">"}</ButtonRight>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {/* first card------------------------------ */}
            <Card>
              <Link
                to={`/store/product/${data.allShopifyProduct.edges[8].node.handle}/`}
              >
                <ContentWrap>
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[8].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />

                  <Title>{data.allShopifyProduct.edges[8].node.title}</Title>

                  <Price>
                    ${data.allShopifyProduct.edges[8].node.variants[0].price}
                  </Price>

                  <Link
                    to={`/store/product/${data.allShopifyProduct.edges[8].node.handle}/`}
                  >
                    <ViewDetailsButton />
                  </Link>
                </ContentWrap>
              </Link>
            </Card>
            {/* card 2 ---------------------------------- */}
            <Card>
              <Link
                to={`/store/product/${data.allShopifyProduct.edges[6].node.handle}/`}
              >
                <ContentWrap>
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[6].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />

                  <Title>{data.allShopifyProduct.edges[6].node.title}</Title>

                  <Price>
                    ${data.allShopifyProduct.edges[6].node.variants[0].price}
                  </Price>

                  <ViewDetailsButton />
                </ContentWrap>
              </Link>
            </Card>
            {/* card 3 -------------------------------------------- */}
            <Card>
              <Link
                to={`/store/product/${data.allShopifyProduct.edges[2].node.handle}/`}
              >
                <ContentWrap>
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[2].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />

                  <Title>{data.allShopifyProduct.edges[2].node.title}</Title>

                  <Price>
                    ${data.allShopifyProduct.edges[2].node.variants[0].price}
                  </Price>

                  <ViewDetailsButton />
                </ContentWrap>
              </Link>
            </Card>
            {/* card 4 ------------------------------------------- */}
            <Card>
              <Link
                to={`/store/product/${data.allShopifyProduct.edges[4].node.handle}/`}
              >
                <ContentWrap>
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[4].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />

                  <Title>{data.allShopifyProduct.edges[4].node.title}</Title>

                  <Price>
                    ${data.allShopifyProduct.edges[4].node.variants[0].price}
                  </Price>

                  <Link
                    to={`/store/product/${data.allShopifyProduct.edges[4].node.handle}/`}
                  >
                    <ViewDetailsButton />
                  </Link>
                </ContentWrap>
              </Link>
            </Card>
            {/* card 5 --------------------------------------------- */}
            <Card>
              <Link
                to={`/store/product/${data.allShopifyProduct.edges[5].node.handle}/`}
              >
                <ContentWrap>
                  <Image
                    fluid={
                      data.allShopifyProduct.edges[5].node.images[0].localFile
                        .childImageSharp.fluid
                    }
                  />

                  <Title>{data.allShopifyProduct.edges[5].node.title}</Title>

                  <Price>
                    ${data.allShopifyProduct.edges[5].node.variants[0].price}
                  </Price>

                  <ViewDetailsButton />
                </ContentWrap>
              </Link>
            </Card>
          </ItemsCarousel>
        </div>
      </Wrapper>
    </>
  )
}

export default HomeShop
