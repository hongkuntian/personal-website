import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"
import Menu from "./navigation/menu"
import HamburgerMenu from "./navigation/hamburgerMenu"
import PropTypes from "prop-types"

const Header = (props) => (
  <header>
    <div className="header-container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/#top">HKT</Link>
        </div>
        <Menu dir="0" />
        <div className="ham">
          <HamburgerMenu openCallback={props.openCallback} />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  openCallback: PropTypes.func.isRequired,
}


export default Header
