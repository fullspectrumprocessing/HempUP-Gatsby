import React from "react"
import "../styles/draweroverlay.scss"

const DrawerOverlay = props => (
  <div className="backdrop" onClick={props.click} />
)

export default DrawerOverlay
