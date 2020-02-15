import React from "react"

import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

import "../../styles/contact.scss"

const Contact = () => (
  <div className="section">
    <div className="section-title" id="contact">
      <h1>Contact me</h1>
    </div>
    <div className="section-content">
      <div className="contact-buttons-container">
          <div className="clickable">
            <a href="mailto: hongkun.tian@hotmail.com">
              <IoIosMail size={40} />
            </a>
          </div>
          <div className="clickable">
            <a href="https://www.github.com/hongkuntian">
              <FaGithubSquare size={35} />
            </a>
          </div>
          <div className="clickable">
            <a href="https://www.linkedin.com/in/hongkuntian">
              <FaLinkedin size={35} />
            </a>
          </div>
          <div className="clickable">
            <a href="https://www.facebook.com/hongkuntian">
              <FaFacebookSquare size={35} />
            </a>
          </div>
        </div>
      </div>
  </div>
)

export default Contact
