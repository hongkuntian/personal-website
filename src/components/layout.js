/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = props => (
  <div>
    <Header openCallback={props.openCallback} />
    {props.children}
    <Footer />
  </div>
)

Layout.propTypes = {
  openCallback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
