import React from "react"
import logo5 from "../../images/projects/mindbook-logo.png"
import logo4 from "../../images/projects/painttrix-logo.png"
import logo3 from "../../images/projects/travelcc-logo.png"
import logo2 from "../../images/projects/sureviews-logo.png"
import logo1 from "../../images/projects/nlpure-logo.png"

import { FaGithub } from "react-icons/fa"

import "../../styles/projects.scss"
//TODO: Encapsulate project cards

const Projects = () => (
  <div className="section">
    <h1 className="section-title" id="projects">
      Some projects I've worked on
    </h1>
    <div className="section-content">
      <div className="projects-container">
        <div className="project">
          <a href="https://devpost.com/software/mindbook">
            <div className="project-content">
              <div className="project-content-top">
                <div className="img-container">
                  <img src={logo5} alt="Logo for Mindbook project" />
                  <div className="project-title">
                    <h2>MindBook</h2>
                  </div>
                </div>
                <div className="project-content-desc">
                  <p>
                    Web app that logs journal entries and performs sentiment
                    analysis on them, providing recommended activities based on
                    the predicted mood.
                  </p>
                </div>
              </div>
              <div className="project-content-bot">
                <div className="tech-container">
                  <div className="tech">React.js</div>
                  <div className="tech">Node.js</div>
                  <div className="tech">Firebase</div>
                  <div className="tech">IBM Tone Analyzer</div>
                </div>
                <div className="project-links">
                  <div className="clickable">
                    <a href="http://github.com/pengyk/diary_of_a_wimpy_kid">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="clickable">
                    <a href="http://devpost.com/software/mindbook">
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
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/painttrix">
            <div className="project-content">
              <div className="project-content-top">
                <div className="img-container">
                  <img src={logo4} alt="Logo for Mindbook project" />
                  <div className="project-title">
                    <h2>PaintTrix</h2>
                  </div>
                </div>
                <div className="project-content-desc">
                  <p>
                    Python app that allows users to write to their screen with
                    controlled movements of their hand. The functionality is
                    built leveraging wrnchAI's pose estimation model.
                  </p>
                </div>
              </div>
              <div className="project-content-bot">
                <div className="tech-container">
                  <div className="tech">Python</div>
                  <div className="tech">TkInter</div>
                  <div className="tech">wrnchAI</div>
                </div>
                <div className="project-links">
                  <div className="clickable">
                    <a href="http://github.com/hongkuntian/paint-trix">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="clickable">
                    <a href="http://devpost.com/software/painttrix">
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
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/travel-cc">
            <div className="project-content">
              <div className="project-content-top">
                <div className="img-container">
                  <img src={logo3} alt="Logo for Mindbook project" />
                  <div className="project-title">
                    <h2>TravelCC</h2>
                  </div>
                </div>
                <div className="project-content-desc">
                  <p>
                    Android app that uses captured images to recognize foreign
                    currency and convert it accordingly to the user's home
                    country currency.
                  </p>
                </div>
              </div>
              <div className="project-content-bot">
                <div className="tech-container">
                  <div className="tech">Java</div>
                  <div className="tech">Firebase API</div>
                  <div className="tech">XE Currency Data API </div>
                </div>
                <div className="project-links">
                  <div className="clickable">
                    <a href="http://github.com/dayjay49/currency_converter">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="clickable">
                    <a href="http://devpost.com/software/travel-cc">
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
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/sureviews">
            <div className="project-content">
              <div className="project-content-top">
                <div className="img-container">
                  <img src={logo2} alt="Logo for Mindbook project" />
                  <div className="project-title">
                    <h2>Sureviews</h2>
                  </div>
                </div>
                <div className="project-content-desc">
                  <p>
                    Web app to summarize reviews for locations on Google Maps.
                    Sentiment analysis is used to generate a brief summary and
                    subcategory ratings.
                  </p>
                </div>
              </div>
              <div className="project-content-bot">
                <div className="tech-container">
                  <div className="tech">Python</div>
                  <div className="tech">JS</div>
                  <div className="tech">Flask</div>
                  <div className="tech">Google Maps Platform</div>
                </div>
                <div className="project-links">
                  <div className="clickable">
                    <a href="http://github.com/nanananisore/sureview">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="clickable">
                    <a href="http://devpost.com/software/sureviews">
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
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/nlpure">
            <div className="project-content">
              <div className="project-content-top">
                <div className="img-container">
                  <img src={logo1} alt="Logo for Mindbook project" />
                  <div className="project-title">
                    <h2>NLPure</h2>
                  </div>
                </div>
                <div className="project-content-desc">
                  <p>
                    Toxicity detection model that classifies comments' toxicity.
                    An accompanied website uses it along with emotional analysis
                    and confidence metrics to detect harmful speech.
                  </p>
                </div>
              </div>
              <div className="project-content-bot">
                <div className="tech-container">
                  <div className="tech">Keras</div>
                  <div className="tech">scikit-learn</div>
                  <div className="tech">React.js</div>
                  <div className="tech">Node.js</div>
                </div>
                <div className="project-links">
                  <div className="clickable">
                    <a href="http:///github.com/mochangheng/Toximeter">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="clickable">
                    <a href="http://devpost.com/software/nlpure">
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
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
