import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const CloseMenuIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      closeMenu: file(relativePath: { eq: "closeMenu.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.closeMenu.childImageSharp.fixed} />
}


