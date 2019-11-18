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
