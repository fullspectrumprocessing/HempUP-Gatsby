import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../../theme/globalStyle"
import cssVars from "../../theme/_variables.js"

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

class DesktopNavButton extends React.Component {

  state = {
    menuSelected: false,
  }

  getSlug(slug){
    return slug
  }

  handleMouseOver = (evt) => {
    this.setState({menuSelected: true})
  }

  handleMouseOut = (evt) => {
    this.setState({menuSelected: false})
  }


  render() {

    return(
      <DesktopNavButtonContainer>
          <GlobalStyle />
          <StyledLink
            to={this.props.to}
            highlighted={( this.state.menuSelected) ? 'true' : ''}
            activeStyle={{
              color:"white",
              background: cssVars.grdntGreen,
            }}
            partiallyActive={true}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
              {this.props.children}
          </StyledLink>
      </DesktopNavButtonContainer>
    )
  }
}

DesktopNavButton.propTypes = {
  expandState: PropTypes.bool,
  handleExpand: PropTypes.func,
  subMenu: PropTypes.array
}

export default DesktopNavButton
