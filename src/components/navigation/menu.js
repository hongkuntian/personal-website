import React from "react"
import PropTypes from "prop-types"
import Item from "./item.js"
import Scrollspy from "react-scrollspy"
import DarkModeToggle from "../dark/darkmodetoggle"

import "../../styles/menu.scss"

const Menu = props => {
  let menuClasses = "navigation"
  if (props.dir === "1") {
    menuClasses = "navigation navigation-vertical"
  }
  return (
    <div className={menuClasses}>
      <nav>
        <Scrollspy items={["about-section", "experience-section", "projects-section", "contact-section"]} currentClassName="current-nav-item" offset={-90}>
          <li>
            <Item
              closeCallback={props.closeCallback}
              name="About"
              id="about"
              className="anchor"
            />
          </li>
          <li>
            <Item
              closeCallback={props.closeCallback}
              name="Experience"
              id="experience"
              className="anchor"
            />
          </li>
          <li>
            <Item
              closeCallback={props.closeCallback}
              name="Projects"
              id="projects"
              className="anchor"
            />
          </li>
          <li>
            <Item
              closeCallback={props.closeCallback}
              name="Contact"
              id="contact"
              className="anchor"
            />
          </li>
        </Scrollspy>
        {props.showToggle ?
        (<DarkModeToggle />) : (<div></div>)
        }
      </nav>
    </div>
  )
}

Menu.propTypes = {
  dir: PropTypes.string.isRequired,
  showToggle: PropTypes.bool.isRequired,
}

export default Menu
