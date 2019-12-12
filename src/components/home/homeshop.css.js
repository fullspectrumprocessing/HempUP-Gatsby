import styled from "styled-components"
import cssVars from "../../theme/_variables"
import Img from "gatsby-image"


export const H2 = styled.h2`
margin-top: 30px;
font-weight: 700 !important;
font-size: 30px;
font-family: ${cssVars.Objktv};

`
export const Wrapper = styled.div`
max-width: 1000px;
margin: 50px;

`
export const ContentWrap = styled.div`
width: 200px;
background: white;
margin: 0 auto;

`

export const Image = styled(Img)`
height: 230px;
overflow: hidden;

`


export const Button = styled.div`


`
export const ImgWrap = styled.div`
height: 230px;

`

export const Card = styled.div`
height: 500px;
width: 300px;
background: #FFF;

`