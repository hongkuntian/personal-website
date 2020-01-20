import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"
import SmoothScroll from "smooth-scroll"

const scroll = new SmoothScroll('a[href*="#"]');

const Header = () => (
  <header>
    <div className="header-container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">HKT</Link>
        </div>
        <div className="navigation">
          <nav>
            <a data-scroll href="#about">About</a>
            <a data-scroll href="#experience">Experience</a>
            <a data-scroll href="#projects">Projects</a>
            <a data-scroll href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
