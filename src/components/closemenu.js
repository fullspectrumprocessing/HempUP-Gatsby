import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CloseMenuIcon = () => {
  const data = useStaticQuery(graphql`
    query {
        closeMenu : file(relativePath: {
            eq: "closeMenu.png"
        }){
            childImageSharp {
                fixed(width: 50, height: 50){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
  `)
  return (
    <Img fixed={data.closeMenu.childImageSharp.fixed} />
  )
}


export default CloseMenuIcon