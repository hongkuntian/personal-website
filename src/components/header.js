import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"

const Header = () => (
  <header>
    <div className="header-container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">HKT</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/#about">About</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
