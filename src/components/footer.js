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
      <p>Copyright &copy; {currYear()} Hong Kun Tian.&nbsp;</p>
      <p>
      <a href="https://github.com/hongkuntian/personal-website" className="un">
        Built with Gatsby
      </a>
      </p>
    </div>
  </footer>
)

export default Footer
