import React from 'react'
import CloseMenuIcon from './closemenu'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import '../styles/sidedrawer.scss'


const SideDrawer = props => {
  // console.log(props.click, 'click');
  let close
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
    close = <CloseMenuIcon />
  }
  const dropDown = () => {
    console.log('working')
  }

   
  const ExpandList = () => {
    console.log('its alive!!!')
    if (props.expanded == false) {
    console.log('its false')
    }
  }
  return (

    <nav className={drawerClasses}>
      <Parallax pages={1.5}>
        <div id='side-drawer-flex-wrapper'>
          <a id='close-icon' href='#' onClick={props.click}>
            {close}
          </a>
          <>
            <li>
              <a href='#' onClick={ExpandList}>
                store
                </a>
            </li>
            
              {/* <div id='expanded-store-menu'>
                  <ul>
                    <li> All Products</li>
                    <li> Hemp Product</li>
                    <li> Hemp Product</li>
                    <li> Hemp Product</li>
                    <li> Hemp Product</li>
                  </ul>
                </div>
               */}
                
            <li>
              <a href='#'>
                about us
                </a>
            </li>
            <div id='expanded-store-menu'>
              <ul>
                <li> Who We Are?</li>
                <li> Why Us?</li>
                <li>Why CBD?</li>
                <li> Join Us</li>
              </ul>
            </div>
            <li>
              <a href='#'>
                news
                </a>
            </li>
            <div id='expanded-store-menu'>
              <ul>
                <li> Hemp Product</li>
                <li> Hemp Product</li>
                <li> Hemp Product</li>
                <li> Hemp Product</li>
              </ul>
            </div>
            <li>
              <a href='#'>
                what is cbd?
                </a>
            </li>
            <li>
              <a href='#'>
                contact us
                </a>
            </li>
          </>
        </div>
      </Parallax>
    </nav>
  )
}

export default SideDrawer
