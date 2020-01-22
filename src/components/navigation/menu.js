import React from "react"
import PropTypes from "prop-types"
import Item from "./item.js"

import "../../styles/menu.scss"

const Menu = props => {
  let menuClasses = "navigation"
  if (props.dir === "1") {
    menuClasses = "navigation navigation-vertical"
  }
  return (
    <div className={menuClasses}>
      <nav>
        <Item closeCallback={props.closeCallback} name="About" id="about" />
        <Item closeCallback={props.closeCallback} name="Experience" id="experience" />
        <Item closeCallback={props.closeCallback} name="Projects" id="projects" />
        <Item closeCallback={props.closeCallback} name="Contact" id="contact" />
      </nav>
    </div>
  )
}

Menu.propTypes = {
  dir: PropTypes.string.isRequired
}

export default Menu
