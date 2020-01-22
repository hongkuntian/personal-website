import React from "react"
import PropTypes from "prop-types"
import "../../styles/components/hamburgerMenu.scss"

const HamburgerMenu = props => (
  <div className="hamburger-menu" onClick={props.openCallback}>
    <div className="bar-container">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

HamburgerMenu.propTypes = {
  openCallback: PropTypes.func.isRequired,
}

export default HamburgerMenu
