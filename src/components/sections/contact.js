import React from "react"

import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

import "../../styles/contact.scss"

const Contact = () => (
  <div className="section" id="contact-section">
    <div className="section-title" id="contact">
      <h1>Contact me</h1>
    </div>
    <div className="section-content">
      <p>I'm always open to new opportunities and exciting adventures to embark on, so don't hesitate to get in touch!</p>
      <div className="contact-buttons-container">
        <div className="clickable">
          <a href="mailto: hongkun.tian@hotmail.com">
            <IoIosMail size={35} />
          </a>
        </div>
        <div className="clickable">
          <a href="https://www.github.com/hongkuntian">
            <FaGithubSquare size={35} />
          </a>
        </div>
        <div className="clickable">
          <a href="https://devpost.com/hongkuntian">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 280.3 242"
              enable-background="new 0 0 280.3 242"
              xmlSpace="preserve"
            >
              <g id="XMLID_1_">
                <path
                  id="XMLID_6_"
                  d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"
                />
                <path
                  id="XMLID_9_"
                  d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74
		C208.1,172.8,170.6,195,132.7,195z"
                />
              </g>
            </svg>
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
