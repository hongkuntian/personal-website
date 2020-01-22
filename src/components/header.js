import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"
import Menu from "./navigation/menu"
import HamburgerMenu from "./navigation/hamburgerMenu"
const Header = () => (
  <header>
    <div className="header-container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">HKT</Link>
        </div>
        <Menu dir="0"/>
      </div>
    </div>
  </header>
)

export default Header
