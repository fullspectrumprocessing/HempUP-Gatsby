import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

// export const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "hempUpLogo.png" }) {
//         childImageSharp {
//           fixed(width: 100, height: 100) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)

//   return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
// }

export const BagImage = () => {
  const data = useStaticQuery(graphql`
    query {
      shoppingBag: file(relativePath: { eq: "bag.png" }) {
        childImageSharp {
          fixed(width: 41, height: 51) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.shoppingBag.childImageSharp.fixed}/>
}
