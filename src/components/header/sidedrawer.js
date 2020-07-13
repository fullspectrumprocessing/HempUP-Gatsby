import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyle from "../../theme/globalStyle"

const ClosedDrawer = styled.nav`
  height: calc(100% - 4.3em);
  background: rgba($color: #ffffff, $alpha: 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 400px;
  z-index: 1;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  @media (min-width: 796px) {
    display: none;
  }
`
const openDrawer = styled(ClosedDrawer)`
  transform: translateX(0);
`
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`
const ExpandedMenuDiv = styled.div`
  background-color: rgba(86, 126, 72, 0.5);
  width: 100%;
  font-family: objektiv-mk1, sans-serif;
  font-size: 20px;
  color: white;
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
`
const NavTitleLink = styled(Link)`
  color: rgba(152, 121, 91, 1);
  text-decoration: none;
  font-size: 32px;
  font-family: Objektiv Mk1, sans serif;
  :active {
    color: rgba(76, 116, 72, 1);
  }
`
const NavTitle = styled.div`
  color: rgba(152, 121, 91, 1);
  text-decoration: none;
  font-size: 32px;
  font-family: objektiv-mk1, sans-serif;
  border: none;
  background: none;
  :active {
    color: rgba(76, 116, 72, 1);
  }
`
const StyledLink = styled(Link)`
  margin: 0.5rem 0;
  font-family: Objektiv Mk1, sans serif;
  font-size: 20px;
  text-transformation: lowercase;
  text-decoration: none;
  color: white;
`
const Li = styled.li`
  list-style: none;
  padding-left: 20px;
}
`
const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SideDrawer = props => {
  let navStyle
  let open = {
    transform: "translateX(0)",
    background: "rgba(255, 255, 255, 0.75)",
  }
  if (props.show) {
    //props.show is being sent down from the header component along with all the methods that are handling the sidedrawers functionality
    //If the menu button is toggled, the ClosedDrawers styling is changed to open and it slides out
    navStyle = open
  }
  return (
    <ClosedDrawer style={navStyle}>
      <GlobalStyle />
      <Parallax pages={1.5}>
        <FlexWrapper>
          <>
          <Ul>
          <Li>
              <NavTitleLink to="/">home</NavTitleLink>
            </Li>
            <Li>
              <NavTitle onClick={props.expandStoreList}>store</NavTitle>
            </Li>
            {!!props.expandedStore && (
              <ExpandedMenuDiv>
                <Ul>
                  <Li>
                    <StyledLink to="/store">All Products</StyledLink>
                  </Li>
                  <Li>
                    <StyledLink to="/store/category/Drink">Drink</StyledLink>
                  </Li>
                  <Li>
                    <StyledLink to="/store/category/Isolate">Isolate</StyledLink>
                  </Li>
                  <Li>
                    <StyledLink to="/store/category/Pet">Pet</StyledLink>
                  </Li>
                 
               
                  <Li>
                    <StyledLink to="/store/category/Vitamins">Vitamins</StyledLink>
                  </Li>
                </Ul>
              </ExpandedMenuDiv>
            )}

            <Li>
              <NavTitleLink to="/about">about</NavTitleLink>
            </Li>
 
            <Li>
              <NavTitleLink to="/faqs">FAQs</NavTitleLink>
            </Li>
            <Li>
              <NavTitleLink to="/contactus">contact us</NavTitleLink>
            </Li>
            </Ul>
          </>
        </FlexWrapper>
      </Parallax>
    </ClosedDrawer>
  )
}

export default SideDrawer
