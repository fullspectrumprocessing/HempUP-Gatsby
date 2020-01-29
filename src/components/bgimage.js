import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
// Use the following to support legacy browsers like IE11:
// import BackgroundImage from 'gatsby-background-image-es5'
import { generateMedia } from "styled-media-query"

const media = generateMedia() //for media queries see styled BGImage component at bottom
/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js / page-2.js.
 * @return {*}
 * @constructor
 */
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 */
const BgImage = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "landing_bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.placeholderImage.childImageSharp.fluid
      return (
        // <StyledWrap>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={"#040e18"}
          title="HempUpBG"
          id="BG"
          role="img"
          fadeIn={"soft"}
          aria-label={"hempupbg"}
          // You are able to set a classId and style by wrapper (see below or
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          // classId=" "
          style={
            {
              // Defaults are overwrite-able by setting one of the following:
              // backgroundSize: 'contain',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'norepeat',
            }
          }
        >
          {children}
        </BackgroundImage>
        // </StyledWrap>
      )
    }}
  />
)

// const StyledWrap = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   overflow: hidden;
//   position: fixed;

// `
const StyledBGImage = styled(BgImage)`
position: fixed !important;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -100;

  // !With media-queries you have to overwrite the default options (see style={{}} above).
  // ${media.lessThan("large")`
  //   background-size: cover;
  //   &:after, &:before {
  //     background-size: contain;
  //   }
  // `}

`

export default StyledBGImage
