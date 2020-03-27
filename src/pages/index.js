import React, { useState, useCallback, useRef } from "react"
import "../styles/base.scss"
import { graphql } from "gatsby"
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

// Import components
import Layout from "../components/layout"
import About from "../components/sections/about"
import Contact from "../components/sections/contact.js"
import Experience from "../components/sections/experience.js"
import Hero from "../components/sections/hero.js"
import Projects from "../components/sections/projects.js"
import SEO from "../components/seo"
import CheeseburgerMenu from "cheeseburger-menu"
import Menu from "../components/navigation/menu"

// const functions = new Set()

const IndexPage = ({ data }) => {
  const pageRef = useRef(null)
  const [isOpen, setisOpen] = useState(false)

  const openMenu = useCallback(() => {
    disableBodyScroll(pageRef.current, {
      reserveScrollBarGap: true,
    })
    setisOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    clearAllBodyScrollLocks()
    setisOpen(false)
  }, [])

  // functions.add(openMenu)
  // functions.add(closeMenu)

  return (
    <div ref={pageRef}>
      <SEO title="Hong Kun Tian" />
      <CheeseburgerMenu isOpen={isOpen} closeCallback={closeMenu} right={true}>
        <Menu dir="1" closeCallback={closeMenu} showToggle={true}/>
      </CheeseburgerMenu>
      <Layout openCallback={openMenu}>
      <Hero id="top"/>
        <div className="section-container" >
          <div className="container">
            <div className="info-container">
              <About data={data} />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    profileImage: file(relativePath: { eq: "profile-square.jpeg" }) {
      childImageSharp {
        fixed(width: 250, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
