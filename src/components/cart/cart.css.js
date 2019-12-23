import styled from 'styled-components'
import cssVars from '../../theme/_variables'

export const Wrapper = styled.div`
display: flex;
width: 100%;
flex-direction: row;
@media (max-width: 1052px) {
    flex-wrap: wrap;
    justify-content: center;
}
`

export const ItemWrap = styled.div`
display: flex;
margin-top: 80px;
width: 70%;
flex-direction: column;
margin-left: 0;
@media (max-width: 1052px) {
width: 100%;
}
`

export const Empty = styled.h3`
display: flex;
margin-top: 80px;
width: 70%;
flex-direction: column;
text-align: center;
margin: 0 auto;
margin-top: 80px;
font-size: 80px;
color: ${cssVars.txtBrwn};
`

export const H2 = styled.h2`
@media (max-width: 1052px) {
    text-align: center;
    }
`

export const P = styled.p`
@media (max-width: 1052px) {
    text-align: center;
    }
`

export const CheckoutWrap = styled.div`
margin-top: 80px;
display: flex;
width: 30%;
flex-direction: column;
@media (max-width: 1052px) {
    width: 100%;
  
    }
`

export const Button = styled.div`
height: 53px;
background: ${cssVars.btnGrdntLghtGreen};
color: white;
padding: 15px;
width: 120px;
text-align: center;
border-radius: 5px;
@media (max-width: 1052px) {
    margin: 0 auto;
    }
`