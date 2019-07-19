import React from 'react'
import '../styles/sidedrawer.scss'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <li>
                <a href='/'>
                    Item List
                </a>

            </li>
            <li>
                <a href='/'>
                    Item List
                </a>
            </li>
        </nav>
    )
}

export default SideDrawer
