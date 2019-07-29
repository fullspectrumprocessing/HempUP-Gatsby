import React from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import styled from "styled-components"
import {CloseMenuIcon} from "./closemenu"
import "../styles/sidedrawer.scss"

const ExpandedMenuDiv = styled.div`
  background-color: rgba(86, 126, 72, 0.5);
  width: 100%;
  font-family: objektiv-mk1, sans-serif;
  font-size: 20px;
  color: white;
  text-transform: lowercase;
`

const SideDrawer = props => {
  // console.log(props.click, 'click');
  // let close
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
    // close = <CloseMenuIcon />
  }
  return (
    <nav className={drawerClasses}>
      <Parallax pages={1.5}>
        <div id="side-drawer-flex-wrapper">
          {/* <a id="close-icon" href="#" onClick={props.click}>
            {close}
          </a> */}
          {/* Fragment */}
          <>
            <li>
              <a href="#" onClick={props.expandStoreList}>
                store
              </a>
            </li>
            {!!props.expandedStore && (
              <ExpandedMenuDiv>
                <ul>
                  <li> All Products</li>
                  <li> Hemp Product</li>
                  <li> Hemp Product</li>
                  <li> Hemp Product</li>
                </ul>
              </ExpandedMenuDiv>
            )}

            <li>
              <a href="#" onClick={props.expandAboutList}>
                about us
              </a>
            </li>
            {!!props.expandedAbout && (
              <ExpandedMenuDiv>
                <ul>
                  <li> Who We Are?</li>
                  <li> Why Us?</li>
                  <li> Why CBD?</li>
                  <li> Join Us</li>
                </ul>
              </ExpandedMenuDiv>
            )}
            <li>
              <a href="#" onClick={props.expandNewsList}>
                news
              </a>
            </li>
            {!!props.expandedNews && (
              <ExpandedMenuDiv>
                <ul>
                  <li> Hemp Product</li>
                  <li> Hemp Product</li>
                  <li> Hemp Product</li>
                  <li> Hemp Product</li>
                </ul>
              </ExpandedMenuDiv>
            )}
            <li>
              <a href="#">what is cbd?</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
            {/* Fragment */}
          </>
        </div>
      </Parallax>
    </nav>
  )
}

export default SideDrawer
