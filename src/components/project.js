import React from "react"
import PropTypes from "prop-types"

import logo1 from "../images/projects/mindbook-logo.png"

import "../styles/base.scss"
import "../styles/components/project.scss"

const Project = props => (
  <div className="project-container section">
    {/* TODO: Encapsulate project projects-container */}

    <div class="projects-container">
      <div class="project">
        <a href="#">
          <div class="project-content">
            <div className="img-container">
              <img src={logo1} alt="Logo for Mindbook project" />
            </div>
            <h2>Headline goes here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod voluptatum eveniet similique illum praesentium.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi placeat, impedit esse assumenda nemo dicta at culpa totam quo ex aliquid quas dignissimos maiores iure minima tempore voluptates praesentium?
            </p>
            <h3>sup</h3>
          </div>
        </a>
      </div>
      <div class="project">
        <a href="#">
          <div class="project-content">
            <div className="project-content">
              <h2>Headline goes here</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel necessitatibus blanditiis molestias esse quo ut. Provident sequi autem inventore quos laborum nulla magnam dolore, consectetur, magni quibusdam incidunt quidem.</p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aperiam?
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="project">
        <a href="#">
          <div class="project-content">
            <h2>Headline goes here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel veritatis minus libero quaerat nisi nemo. Laboriosam repellat officiis temporibus at! Quis molestiae sint, cumque corporis molestias qui in consequatur!
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </a>
      </div>
      <div class="project">
        <a href="#">
          <div class="project-content">
            <h2>Headline goes here</h2>
            <p>
              Here's to alcohol, the cause of — and solution to — all life's
              problems. How is education supposed to make me feel smarter?
            </p>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum labore facere vitae vero unde totam quasi tempora est autem nihil enim possimus, temporibus harum odit tenetur placeat consequuntur ea?
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
)

{
  /* Project.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  picLogo: PropTypes.string.isRequired,
  tech: propTypes.array.isRequired,
  githubLink: PropTypes.string,
  extLink: PropTypes.string,
} */
}

export default Project
