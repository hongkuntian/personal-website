import { Link } from "gatsby"
import React from "react"
import "../styles/layout/footer.scss"

function currYear() {
  var year = new Date().getFullYear()
  return year
}

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div><small>Copyright &copy; {currYear()} Hong Kun Tian.&nbsp;</small></div>
      <small>All rights reversed.&nbsp;</small>
      <a href="https://github.com/hongkuntian/personal-website" className="un">
        <small>Built with Gatsby</small>    
      </a>
    </div>
  </footer>
)

export default Footer
