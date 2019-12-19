import styled from 'styled-components'
import cssVars from '../../theme/_variables'

export const Wrapper = styled.div`
display: flex;
width: 100%;
flex-direction: row;
`

export const ItemWrap = styled.div`
display: flex;
margin-top: 80px;
width: 70%;
flex-direction: column;
margin-left: 0;
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

export const CheckoutWrap = styled.div`
margin-top: 80px;
display: flex;
width: 30%;
flex-direction: column;
`

export const Button = styled.div`
height: 50px;
background: ${cssVars.btnGrdntLghtGreen};
color: white;
padding: 15px;
width: 120px;
`