import React from "react"
import "../styles/base.scss"
// import { Link } from "gatsby"

// Import components
import Layout from "../components/layout"
import About from "../components/sections/about"
import Contact from "../components/sections/contact.js"
import Experience from "../components/sections/experience.js"
import Hero from "../components/sections/hero.js"
import Projects from "../components/sections/projects.js"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <Layout/>
    <div className="wrapper">
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  </div>
)

export default IndexPage
