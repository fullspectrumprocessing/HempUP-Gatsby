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
  color: rgba(152, 121, 91, 1);
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px 15px 0 0;
  font-family: lato, sans serif;
`
const StyledLinkHighlight = styled(Link)`
  background-color: rgba(76, 116, 72, 1);
  color: white;

`

const SubMenu = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 4.3em;
    width: 100vw;
    left: 0px;
    background: #4c7448;
    color: white;
`

/*
shows up on hover
OR
when a specific category is clicked

does not show up on mobile (parent component should be doing this already)

dynamically makes list based on graphQLfeed

shows up below nav bar, pushing the rest of the page down...

props:
-title:string
-links:array
[
  store: ['edibles', 'pet', ...], !!! getProductTypes !!
  'about us': [] //no sub menu
  news: []

]

*/

class DesktopNavSubBar extends React.Component {

  state = {
    menuSelected: false,
  }

  handleMouseOver = (evt) => {
    this.setState({menuSelected: true })
  }

  handleMouseOut = (evt) => {
    this.setState({menuSelected: false})
  }

  handleClick = (evt) => {
    this.props.handleExpand()
  }
  render() {

    return(
      <DesktopNavSubBarContainer>

          <StyledLink
            to={this.props.to}
            onMouseOver={this.handleMouseOver}
            onClick={this.handleClick}>
            {this.props.children}
          </StyledLink>

          { (this.props.subMenu && (this.props.expandState|| this.state.menuSelected)) &&
            <SubMenu onMouseOut={this.handleMouseOut}>
              {
                this.props.subMenu.map((item,inx) => {
                  return <div key={inx}> {item} </div>
                })
              }

            </SubMenu>
          }

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
