import React from "react"

import "../../styles/base.scss"
import "../../styles/experience.scss"

const Experience = () => (
  <div className="section">
    <h1 className="section-title" id="experience">
      Work Experience
    </h1>
    <div className="section-content">
      <div className="content-text-container">
        <h2><a href="https://umaknow.com" className="un">UMAknow</a></h2>
        <h3>Software Development Intern</h3>
        <p>June 2019 — August 2019</p>
        <ul>
          <li>Developed a server-side REST API for <a href="https://cloudockit.com" className="un">Cloudockit</a>, a cloud environment diagram generator for AWS, Azure and GCP, using .NET Framework, through which end consumers can trigger document generation.</li>
          <li>Built an interactive page using HTML, CSS, and Javascript through which end consumers can visualize and interact with the API’s endpoints</li>
          <li>Developed test cases that detected irregularities and unwanted changes within template documents and generated documents using Aspose file management APIs</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Experience
