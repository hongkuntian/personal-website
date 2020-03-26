import React from "react"

import "../../styles/hero.scss"

const Hero = () => (
  <div className="vertical-center container-full">
    <div className="landing-outer-container">
      <div className="landing-container">
        <div className="landing">
          <div className="landing-content-container">
            <p className="greetings">Hello there, I'm</p>
            <h1>
              Hong Kun <br />
              Tian
            </h1>
            <p>Software Developer</p>
            {/* <p>Mind your step! Site is still under construction...</p> */}
            <br />
            <a href="mailto:hongkun.tian@hotmail.com" className="button">
              Get In Touch
            </a>
          </div>
        </div>
        <a class="scroll-clickable" href="#about">
          <div class="scroll-down"></div>
        </a>
        <div className="bg-name">
          <p>HKT</p>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
