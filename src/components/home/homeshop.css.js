import styled from "styled-components"
import cssVars from "../../theme/_variables"
import Img from "gatsby-image"


export const H2 = styled.h2`
margin-top: 30px;
font-weight: 700 !important;
font-size: 30px;
padding-top: 20px;
position: relative;
font-family: ${cssVars.Objktv};
`
export const Wrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
@media (max-width: 1101px) {
    max-width: none;
    width: 700px;
    margin: 0 auto;
}
@media (max-width: 751px) {
    max-width: none;
    width: 500px;
}
@media (max-width: 800px) {
    margin: 0 auto;
}
@media (max-width: 500px) {
    width: 370px;
}
@media (max-width: 400px) {
    width: 100%;
}

`
export const ContentWrap = styled.div`
width: 200px;
background: white;
margin: 0 auto;
padding-top: 15px;
@media (max-width: 400px) {
    height: 100%;
    width: 100%;
    padding-top: 0px;  
}
`
export const Image = styled(Img)`
height: 230px;
overflow: hidden;
`
export const ButtonLeft= styled.div`
padding: 0px;
color: black;
position: absolute;
top: 45%;
left: 19;
@media (max-width: 400px) {
   left: 30px;
}
:hover {
    color: ${cssVars.ttnGrdntDrkGrn};
}
`
export const ButtonRight= styled.div`
padding: 0px;
color: black;
position: absolute;
top: 45%;
right: 19;
@media (max-width: 400px) {
    right: 30px;
}
:hover {
    color: ${cssVars.ttnGrdntDrkGrn};
}
`
export const Card = styled.div`
height: 450px;
width: 300px;
background: #FFF;
@media (max-width: 751px) {
    margin: 0 auto;
}
@media (max-width: 400px) {
width: 80%;
height: 400px;
}
`
export const Title = styled.h3`
font-size: 16px;
height: 60px;
color: black;
font-family: ${cssVars.Objktv};
padding-bottom: 5px;
margin: 0 auto;
@media (max-width: 4510px) {
    width: 90%;
    }
`
export const Price = styled.h3`
font-size: 18px;
color: ${cssVars.txtGrn};
font-weight: 00;
`