import React from "react"
import logo5 from "../../images/projects/mindbook-logo.png"
import logo4 from "../../images/projects/painttrix-logo.png"
import logo3 from "../../images/projects/travelcc-logo.png"
import logo2 from "../../images/projects/sureviews-logo.png"
import logo1 from "../../images/projects/nlpure-logo.png"

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
                    A web app that logs journal entries and performs sentiment
                    analysis on them, providing recommended activities based on
                    the predicted mood.
                  </p>
                </div>
              </div>
              <div className="project-content-bot"></div>
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
                    A Python app that allows users to write to their screen with
                    controlled movements of their hand. The app is built using
                    wrnchAI's pose estimation model.
                  </p>
                </div>
              </div>
              <div className="project-content-bot"></div>
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
                    An Android app that uses captured images to recognize
                    foreign currency and convert it accordingly to the user's
                    home country currency.
                  </p>
                </div>
              </div>
              <div className="project-content-bot"></div>
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
                    A web app to search for an existing location on Google Maps
                    whose reviews will undergo sentiment analysis. A brief
                    summary of the contents of the reviews will be generated.
                    This includes a one sentence summary of the reviews, and a
                    listing of subcategory ratings.
                  </p>
                </div>
              </div>
              <div className="project-content-bot"></div>
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
                    A toxicity detection model that is capable of accurately
                    telling the difference between toxic comments and non-toxic
                    comments online. The accompanied website uses the model
                    along with emotional analysis and confidence metrics to
                    detect harmful behaviour and disrespectful speech.
                  </p>
                </div>
              </div>
              <div className="project-content-bot"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
