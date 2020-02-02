import React, { useState, useCallback } from "react"
import "../styles/base.scss"
import { Link, graphql } from "gatsby"

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
import CheeseburgerMenu from "cheeseburger-menu"
import Menu from "../components/navigation/menu"

// const functions = new Set()

const IndexPage = ({ data }) => {
  const [isOpen, setisOpen] = useState(false)

  const openMenu = useCallback(() => {
    setisOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setisOpen(false)
  }, [])

  // functions.add(openMenu)
  // functions.add(closeMenu)

  return (
    <div>
      <SEO title="Hong Kun Tian" />
      <CheeseburgerMenu isOpen={isOpen} closeCallback={closeMenu} right={true}>
        <Menu dir="1" closeCallback={closeMenu} />
      </CheeseburgerMenu>
      <Layout openCallback={openMenu}/>
      <div className="section-container">
        <Hero />
        <About data={data} />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export const query = graphql`
  {
    profileImage: file(relativePath: { eq: "profile-square.jpeg" }) {
      childImageSharp {
        fixed(width: 250, quality: 90) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
