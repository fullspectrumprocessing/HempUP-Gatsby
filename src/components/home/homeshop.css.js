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
@media (max-width: 1101px) {
    max-width: none;
    width: 700px;
}

@media (max-width: 751px) {
    max-width: none;
    width: 500px;
}

@media (max-width: 600px) {
    margin: 0 auto;
}
@media (max-width: 500px) {
    width: 370px;
}

@media (max-width: 400px) {
    width: 370px;
}

// @media (max-width: 300px) {
//     width: 250px;
// }

`
export const ContentWrap = styled.div`
width: 200px;
background: white;
margin: 0 auto;
padding-top: 15px;
@media (max-width: 400px) {
    width: 17s0px;
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
width: 270px;
}

`
export const Title = styled.h3`
font-size: 16px;
height: 45px;
color: grey;
font-family: ${cssVars.Objktv};
padding-bottom: 5px;
`
export const Price = styled.h3`
font-size: 18px;
color: ${cssVars.txtBrwn};
`