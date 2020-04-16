
// import React from "react"
import styled from "styled-components"
import cssVars from "../../theme/_variables.js"
import { animated } from "react-spring"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 100px 25px 100px;
  @media (max-width: 800px) {
    margin: 0px;
    width: 100%;
    padding: 0px !important;
  
  }
`

export const H3 = styled.h3`
  font-size: 40px;
  color: ghostwhite;
  //! WHat is CBD section
`
export const WhatRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 50px;
  margin-top: 60px;
`
export const WhatIsFront = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  padding: 5px;
  height: 410px;
  display: flex;
  justify-content: center;
  text-align: center;
  background: ${cssVars.bckgrndBeige};
  font-family: ${cssVars.Objktv};
  padding: 15px;
  color: ${cssVars.txtBrwnDrk};
  border: 1px ghostwhite solid;
  box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
  &:hover {
    box-shadow: 1px 1px 15px ${cssVars.txtGrn};
  }
  // @media (max-width: 934px) {
  //   width: 80%;
  //   margin: 0 auto;
  // }
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 440px;
  }
  
`
export const WhatIsCbd = styled.div`
  display: flex;
  width: 500px;
  height: 410px;
  justify-content: center;
  padding: 5px;
  // margin: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 934px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 440px;
  }
`

export const WhatIsTitle = styled.h2`
  font-size: 75px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.POSDI};
  font-style: normal;
  width: 100%;
  margin-top: 120px;
  // margin-left: 50px;
  text-shadow: 1px 1px 5px #396f6f80;
  @media (max-width: 934px) {
  }
  @media (max-width: 750px) {
  }
  @media (max-width: 800px) {
  } 
  @media (max-width: 520px) {
    width: 300px;
    font-size: 55px;
  }

`

export const WhatIsTextWrap = styled.div`
  text-align: left;
  width: 500px;
  height: 410px;
  // margin: 20px 0px 20px 0px;
  background: ${cssVars.bckgrndBeige};
  font-family: ${cssVars.Objktv};
  padding: 40px;
  color: ${cssVars.txtBrwnDrk};
  border: 1px ghostwhite solid;
  box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
  &:hover {
    // box-shadow: 1px 1px 15px ${cssVars.txtGrn};
  }
  @media (max-width: 800px) {
    // text-align: center;
  }
  @media (max-width: 520px) {
    width: 300px;
    font-size: 13px;
    padding: 35px;
    height: 440px;
  }
`

export const WhatImgDiv = styled.div`
  align-self: center;
  background-color: ${cssVars.grdntPink};
  width: 50%;
  height: 150px;
`

//! Who we are components
export const WhoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: 50px;
`
export const WhoWeAre = styled.div`
  width: 50%;
  padding: 5px;
  margin: 10px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  @media (max-width: 934px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 520px) {
    width: 100%;
    margin: 0 auto;
  }
`
export const WhoIsFront = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  padding: 5px;
  height: 410px;
  display: flex;
  justify-content: center;
  text-align: center;
  background: ${cssVars.bckgrndBeige};
  font-family: ${cssVars.Objktv};
  padding: 15px;
  color: ${cssVars.txtBrwnDrk};
  border: 1px ghostwhite solid;
  box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
  &:hover {
    // box-shadow: 1px 1px 15px ${cssVars.txtGrn};
  }
  @media (max-width: 934px) {
 
  }
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  @media (max-width: 520px) {
    width: 300px;
  }
`
export const WhoWeAreTitle = styled.h2`
font-size: 75px;
color: ${cssVars.txtGrn};
font-family: ${cssVars.POSDI};
font-style: normal;
width: 100%;
margin-top: 120px;
text-shadow: 1px 1px 5px #396f6f80;
@media (max-width: 934px) {
 
}
@media (max-width: 750px) {

}
@media (max-width: 800px) {

}
@media (max-width: 520px) {
  width: 300px;
  font-size: 55px;
}

`
export const WhoTextWrap = styled.div`
text-align: left;
width: 500px;
height: 410px;
background: ${cssVars.bckgrndBeige};
font-family: ${cssVars.Objktv};
padding: 60px;
color: ${cssVars.txtBrwnDrk};
border: 1px ghostwhite solid;
box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
// &:hover {
//   box-shadow: 1px 1px 15px ${cssVars.txtGrn};
// }
@media (max-width: 800px) {
  // text-align: center;
}
@media (max-width: 520px) {
  width: 300px;
  font-size: 13px;
  padding: 45px;
}
`

export const WhoImgDiv = styled.div`
  align-self: center;
  background-color: ${cssVars.grdntPink};
  width: 50%;
  height: 150px;
`

//! WhyUS components
export const WhyRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 50px;
`

export const WhyFront = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  padding: 5px;
  height: 410px;
  display: flex;
  justify-content: center;
  text-align: center;
  background: ${cssVars.bckgrndBeige};
  font-family: ${cssVars.Objktv};
  padding: 15px;
  color: ${cssVars.txtBrwnDrk};
  border: 1px ghostwhite solid;
  box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
  &:hover {
    // box-shadow: 1px 1px 15px ${cssVars.txtGrn};
  }
  @media (max-width: 934px) {

  }
  @media (max-width: 750px) {

  }
  @media (max-width: 520px) {
    width: 300px;
      height: 430px;
  }
`
export const WhyUs = styled.div`
  width: 50%;
  padding: 5px;
  margin: 10px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  @media (max-width: 934px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 750px) {
    width: 100%;
    margin: 0 auto;
  }
`
export const WhyUsTitle = styled.h2`
font-size: 75px;
color: ${cssVars.txtGrn};
font-family: ${cssVars.POSDI};
font-style: normal;
width: 100%;
margin-top: 120px;
text-shadow: 1px 1px 5px #396f6f80;
@media (max-width: 934px) {
 
}
@media (max-width: 750px) {

}
@media (max-width: 800px) {
}
@media (max-width: 520px) {
  width: 300px;
  font-size: 55px;
}
`

export const WhyTextWrap = styled.div`
text-align: left;
width: 500px;
height: 410px;
background: ${cssVars.bckgrndBeige};
font-family: ${cssVars.Objktv};
padding: 50px;
color: ${cssVars.txtBrwnDrk};
border: 1px ghostwhite solid;
box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
@media (max-width: 520px) {
  width: 300px;
  font-size: 13px;
  padding: 35px;
  height: 430px;
}

`

export const WhyImgDiv = styled.div`
  align-self: center;
  background-color: ${cssVars.grdntPink};
  width: 50%;
  height: 150px;
`

//! React Srping Wrapper
export const ContactUs = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  height: 200px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: auto;
  }
`
//! COntact Us comps

export const ContactButton = styled.button`
  height: 100%;
  width: 300px;
  border-radius: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};
  color: ${cssVars.grdntPink};
`
export const Animate = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cssVars.grdntGreen};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: box-shadow 0.5s;
  will-change: transform;
  height: 200px;
`

//! Shop now comps
export const ShopButton = styled.button`
  height: 100%;
  width: 300px;
  border-radius: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};
  color: ${cssVars.grdntPink};
`
export const AnimateShop = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cssVars.grdntGreen};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: box-shadow 0.5s;
  will-change: transform;
  height: 200px;
`

// export const fluidImageAboutGrid = graphql`
//   fragment fluidImageAboutGrid on File {
//     childImageSharp {
//       fluid(maxWidth: 1920) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const Data = () => {
//   const aboutImages = useStaticQuery(
//     graphql`
//       query AboutImageQuery {
//         cbdFormula: file(relativePath: { eq: "cbdChem.jpg" }) {
//           ...fluidImageAboutGrid
//         }
//         cbdHealth: file(relativePath: { eq: "cbdHealth.jpg" }) {
//           ...fluidImageAboutGrid
//         }
//         cbdProducts: file(relativePath: { eq: "cbdProducts.jpg" }) {
//           ...fluidImageAboutGrid
//         }
//       }
//     `
//   )
//   return aboutImages
// }

// export const Formula = () => {
//   const aboutImages = Data()
//   return (
//     <Img
//       fluid={aboutImages.cbdFormula.childImageSharp.fluid}
//       alt="CBD Chemical Formula"
//     />
//   )
// }

// export const Health = () => {
//   const aboutImages = Data()
//   return <Img fluid={aboutImages.cbdHealth.childImageSharp.fluid} />
// }

// export const Products = () => {
//   const aboutImages = Data()
//   return <Img fluid={aboutImages.cbdProducts.childImageSharp.fluid} />
// }
