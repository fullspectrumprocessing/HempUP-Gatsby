import styled from "styled-components"
import cssVars from "../../theme/_variables"

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  opacity: .25;
 z-index: -10;
 margin-top: -32px;
margin-bottom: -25px;
`

export const Wrapper = styled.div`
  
 position: relative;
 margin-bottom: -72px;
 
  @media (max-width: 600px) {
    // text-align: center;
  }
`
export const StyledTitle = styled.div`
  border-bottom: 2px solid grey;
  padding-bottom: 45px;
  margin: 0 0 0 0;
  margin-top: -32px;
  text-align: center;
//  background: ${cssVars.navBarGreenGradient};

`

export const Title = styled.span`
font-weight: 700;
display: block;
@media (max-width: 600px) {
    padding: 0px 10px;   
}
`

export const H2 = styled.h2`

font-weight: 700 !important;
font-size: 30px;
font-family: ${cssVars.Objktv};
@media (max-width: 600px) {
       padding: 20px;
       font-size: 20px;    
}
`

export const H1 = styled.h1`
  width: 75%;
  margin: 0 auto;
  padding-top: 100px;
  color: ${cssVars.navBarGreenGradient};
  font-size: 60px;
  // text-shadow: 1px 1px 3px grey;
  line-height: 80px;
  text-align: left;
  letter-spacing: 0px;
  text-transform: capitalize;
  font-weight: 700 !important;
  @media (max-width: 542px) {
    font-size: 40px;
    padding-top: 80px;
    width: 85%;
  }
`

export const H3 = styled.address`
  font-size: 20px;
  display: inherit;
  font-weight: 200;
  @media (max-width: 600px) {
    padding: 25px;   
}
`
export const P = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 0 40px;
  word-spacing: 2.5px;
  letter-spacing: 0.5px;
  line-height: 25px;
  @media (max-width: 572px) {
   text-align: left;
  }
`

export const BDI = styled.bdi`
  text-decoration: underline;
  margin-right: 5px;
`
export const StyledDiv = styled.section`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 25px;
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const UL = styled.ul`
  list-style-type: disc;
  padding-top: 10px;
  // text-indent: 25px;
`

export const StyledArticle = styled.article`
  padding-bottom: 50px;
`

export const A = styled.a`
//   color: #1c3178;
color: ${cssVars.txtGrn};
`
export const Address = styled.address`
  display: flex;
  flex-direction: column;
//   align-items: center;
  font-weight: 600;
`
export const ContactWrap = styled.div`
  margin: 20px 0;
  padding: 10px 0;
`
