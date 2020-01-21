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
        <Item name="About" id="about" />
        <Item name="Experience" id="experience" />
        <Item name="Projects" id="projects" />
        <Item name="Contact" id="contact" />
      </nav>
    </div>
  )
}

Menu.propTypes = {
  dir: PropTypes.string.isRequired,
}

export default Menu
