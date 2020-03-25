import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// gatsby image is lazy loading this menu image 
export const MenuImage = () => {
  const data = useStaticQuery(graphql`
    query {
      shoppingBag: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.shoppingBag.childImageSharp.fixed} />
}
