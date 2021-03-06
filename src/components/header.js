import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"
import Menu from "./navigation/menu"
import HamburgerMenu from "./navigation/hamburgerMenu"
import PropTypes from "prop-types"
import DarkModeToggle from "../components/dark/darkmodetoggle"

const Header = (props) => (
  <header>
    <div className="header-container">
      <div className="inner-header">
        <div className="logo">
          {/* <Link to="/#top">HKT</Link> */}
          <Link to="/">HKT</Link>
          {/* <DarkModeToggle /> */}
        </div>
        <div className="menu-container">
          <div>
            <a href="/hk_resume.pdf" target="_blank" rel="noopener noreferrer" className="button">Resume</a>
          </div>
          <Menu dir="0" showToggle={true}/>
          <div className="ham">
            <HamburgerMenu openCallback={props.openCallback} />
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  openCallback: PropTypes.func.isRequired,
}


export default Header
