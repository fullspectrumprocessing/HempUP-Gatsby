import React from 'react'
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
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    const dropDown=()=>{
        console.log('working')
    }
    return (
        <nav className={drawerClasses}>
            <li>
                <a href='#' 
                // onClick={dropDown}
                >
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
        </nav>
    )
}

export default SideDrawer
