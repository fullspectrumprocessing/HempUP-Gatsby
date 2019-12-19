import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../../theme/globalStyle"
import cssVars from "../../theme/_variables.js"
import { GlobalDispatchContext } from "../../provider/ContextProvider"
import { GlobalStateContext } from "../../provider/ContextProvider"

const DesktopNavButtonContainer = styled.div`
  display: inline-flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 796px) {
    display: none;
  }

`
const StyledLink = styled(Link)`
  padding: 5px 20px;
  margin: 0 3px;
  border-radius: 10px 10px 0 0;
  font-family: ${cssVars.Objktv};
  color: ${props => props.highlighted ? 'white' : 'rgba(152, 121, 91, 1)'} ;
  background: ${props => props.highlighted ?  cssVars.grdntGreen : 'white'} ;

`

const DesktopNavButton = (props) => {

  const dispatch = useContext(GlobalDispatchContext)
  const cart = useContext(GlobalStateContext)

  const [state, setState] = useState({
    menuSelected: false,
  })

  // getSlug(slug){
  //   return slug
  // }

  const handleMouseOver = (evt) => {
    setState({menuSelected: true})
  }

  const handleMouseOut = (evt) => {
    setState({menuSelected: false})
  }

  // const check = () => {
  //  if (cart.numInCart === 0) {
  //    console.log(cart.numInCart, "IN HRERERERER")
  //    dispatch({ type: "SET_NUM", numInCart: 0 })

  //  }
  // }



    return(
      <DesktopNavButtonContainer>
          <GlobalStyle />
          <StyledLink
            // onClick={check}
            to={props.to}
            highlighted={( state.menuSelected) ? 'true' : ''}
            activeStyle={{
              color:"white",
              background: cssVars.grdntGreen,
            }}
            partiallyActive={false}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              {props.children}
          </StyledLink>
      </DesktopNavButtonContainer>
    )
  
}

DesktopNavButton.propTypes = {
  expandState: PropTypes.bool,
  handleExpand: PropTypes.func,
  subMenu: PropTypes.array
}

export default DesktopNavButton
