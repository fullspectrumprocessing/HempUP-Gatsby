import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hempUpLogo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

// export const BagImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       shoppingBag: file(relativePath: { eq: "bag.png"}){
//         childImageSharp {
//           fixed(width: 100, height: 100){
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)
//   return <Img fixed={data.shoppingBag.childImageSharp.fixed}/>
// }
