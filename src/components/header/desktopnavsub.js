import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../../theme/globalStyle"
import cssVars from "../../theme/_variables.js"

const DesktopNavSubBarContainer = styled.div`
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

/*
notes
shows up on hover
OR
when a specific category is clicked
does not show up on mobile (parent component should be doing this already)
dynamically makes list based on graphQLfeed
shows up below nav bar, pushing the rest of the page down...

*/

class DesktopNavSubBar extends React.Component {

  state = {
    menuSelected: false,
  }

  handleMouseOver = (evt) => {
    this.setState({menuSelected: true})
  }
  handleMouseOut = (evt) => {
    this.setState({menuSelected: false})
  }


  render() {

    const targetName = 'dnav' + this.props.to

    return(
      <DesktopNavSubBarContainer
        onMouseMove={this.handleMouseMove}
      >
          <GlobalStyle />
          <StyledLink
            highlighted={( this.state.menuSelected) ? 'true' : ''}
            to={this.props.to}
            activeStyle={{
              color:"white",
              background: cssVars.grdntGreen,
            }}
            partiallyActive={true}
            className={targetName}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
              {this.props.children}
          </StyledLink>

      </DesktopNavSubBarContainer>
    )
  }


}

DesktopNavSubBar.propTypes = {
  expandState: PropTypes.bool,
  handleExpand: PropTypes.func,
  subMenu: PropTypes.array
}

export default DesktopNavSubBar
