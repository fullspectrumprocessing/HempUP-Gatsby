import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import Slide from 'react-reveal/Slide';
import { navigationMap } from "../navigationMap"
import cssVars from "../../theme/_variables"
import GlobalStyle from "../../theme/globalStyle"

const SubMenuLink = styled(Link)`
  padding: 5px 10px;
  margin: 0 3px;
  font-family: ${cssVars.Objktv};
  color: white;
  background: ${props => (props.highlighted ? cssVars.whiteGlow : "")};
`
///////////////////////////////
//         NavDesktopSubMenu
///////////////////////////////

const SubMenu = styled.div`
  display: none;

  @media (min-width: 796px) {
    display: flex;
    justify-content: center;
    top: 4.3em;
    left: 0px;
    width: 100vw;
    height: 2em;
    background: ${cssVars.navBarGreenGradient};
    color: white;
  }
`

const SubMenuLinkGen = ({ item }) => {
  console.log("item", item)

  const [menuSelected, setMenuSelected] = useState("")

  const handleMouseOver = evt => {
    setMenuSelected(true)
  }

  const handleMouseOut = evt => setMenuSelected(false)

  return (
    <SubMenuLink
      to={"/store/category/" + item}
      highlighted={menuSelected ? "true" : ""}
      activeStyle={{
        color: "white",
        background: cssVars.whiteGlow,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {item}
    </SubMenuLink>
  )
}

export default ({ location }) => {
  const getSubMenu = pathname => {
    const page = pathname.split("/")[1]
    return navigationMap[page] || []
  }

  return getSubMenu(location.pathname).length ? (
    <SubMenu>
      <GlobalStyle />
      {getSubMenu(location.pathname).map((item, inx) => {
        return <SubMenuLinkGen item={item} key={inx} />
      })}
    </SubMenu>
  ) : null
}
