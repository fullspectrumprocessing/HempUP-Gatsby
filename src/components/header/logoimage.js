import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "hempUP_final_transparent.png" }
      ) {
        childImageSharp {
          fixed(width: 120, height: 70) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ top: "10px" }}
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}
