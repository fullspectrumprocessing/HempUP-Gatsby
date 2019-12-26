import styled from 'styled-components'
import cssVars from '../../../theme/_variables'


export const H2 = styled.h2`
margin-top: 30px;
font-weight: 700 !important;
font-size: 30px;
font-family: ${cssVars.Objktv};
`

export const RemoveButton = styled.button`
color: ${cssVars.txtBrwn};
position: absolute;
top: 0;
right: 0;
border: none;
`
export const Wrapper = styled.div`
width: 650px;
background-color: rgba(255, 255, 255, 0.7);
padding: 30px 50px;
margin: 0 auto;
@media (max-width: 1101px) {
    max-width: none;
    width: 700px;
}
@media (max-width: 751px) {
    max-width: none;
    width: 90%;
}
@media (max-width: 600px) {
    margin: 0 auto;
}
@media (max-width: 500px) {
    width: 100%;
}
@media (max-width: 400px) {
    width: 100%;
}
`
export const ContentRow1 = styled.div`
width: 200px;
background: white;
margin: 0 auto;
padding-top: 15px;
@media (max-width: 400px) {
    width: 170px;
}
`
export const ContentRow2 = styled.div`
width: 200px;
background: white;
margin: 0 auto;
padding-top: 15px;
@media (max-width: 400px) {
    padding-top: 25px;
    width: 170px;
    text-align: center;
}
`
export const Image = styled.img`
height: 180px;
overflow: hidden;
`
export const ButtonLeft= styled.div`
padding: 0px;
color: pink;
position: absolute;
top: 45%;
left: 19;
@media (max-width: 400px) {
   left: 30px;
}
`
export const ButtonRight= styled.div`
padding: 0px;
color: pink;
position: absolute;
top: 45%;
right: 19;
@media (max-width: 400px) {
    right: 30px;
}
`
export const Card = styled.div`
height: 200px;
margin: 0 auto;
width: 550px;
position: relative;
background: #FFF;
display: flex;
flex-direction: row;
@media (max-width: 751px) {
    margin: 0 auto;
    width: 355px;
}
@media (max-width: 400px) {
width: 100%;
height: auto;
}
`
export const Title = styled.h3`
font-size: 16px;
height: 55px;
color: grey;
font-family: ${cssVars.Objktv};
padding-bottom: 5px;
@media (max-width: 400px) {
    width: 100%;
    height: auto;
    }
`
export const Price = styled.h3`
font-size: 18px;
color: ${cssVars.txtBrwn};
@media (max-width: 400px) {
    text-align: center;
    height: auto;
    }
`