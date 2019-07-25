import React from 'react'
import CloseMenuIcon from './closemenu'
import '../styles/sidedrawer.scss'

// const DropDownList = () =>{
//     return (
//         <div id='dropdownmenu'>
//             <ul>
//                 TEST
//             </ul>
//         </div>
//     )
// }

const SideDrawer = props => {
    console.log(props.click, 'click');
    let close
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
        close = <CloseMenuIcon />
    }
    const dropDown=()=>{
        console.log('working')
    }
    return (
       
        <nav className={drawerClasses}>
            <div id='side-drawer-flex-wrapper'>

            <a href='#' onClick={props.click}>
                {close}  
             </a>
            <div>
            <li>
                <a href='#'>
                    store
                </a>

            </li>
            <li>
                <a href='#'>
                   about us
                </a>
            </li>
            <li>
                <a href='#'>
                    news
                </a>
            </li>
            <li>
                <a href='#'>
                    what is cbd?
                </a>
            </li>
                </div> 
            </div>
        </nav>
       
    )
}

export default SideDrawer
