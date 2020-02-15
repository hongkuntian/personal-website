import React from "react"
import Emoji from "../emoji"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "../../styles/about.scss"

const About = ({ data }) => (
  <div className="section" id="about-section">
    <h1 className="section-title" id="about">
      About me
    </h1>
    <div className="section-content">
      <div className="content-flow-container">
        <div className="profile-image">
          <Img
            fixed={data.profileImage.childImageSharp.fixed}
            alt="Hong Kun's profile picture"
          />
        </div>
        <div className="about-text">
          <p>
            I'm currently enrolled in <a href="https://www.mcgill.ca" className="un">McGill University</a>'s Honours Computer Science program
            and have a cumulative GPA of 3.64/4.00. <Emoji symbol="✨" /> I've
            been introduced to programming in high school and have ever since
            fallen in love with it. I'm super analytical and detail-oriented, so
            it's pretty much a match made in heaven! I haven't set my sights on
            a particular field yet since all the options seem so interesting and
            I'd like to explore them all. My philosophy in life is to leave the
            world better than we found it, and every step I take is to further
            that personal mantra in order to make the world slightly better.{" "}
            <Emoji symbol="😁" />
          </p>
        </div>
      </div>
      <div className="content-flow-container-non-centered">
        <div className="courses-container">
          <h3>A few notable courses I've completed</h3>
          <ul>
            <li><a href="https://www.mcgill.ca/study/2018-2019/courses/comp-302" className="un">Functional Programming</a></li>
            <li><a href="https://www.mcgill.ca/study/2019-2020/courses/comp-310" className="un">Operating Systems</a></li>
            <li><a href="https://www.mcgill.ca/study/2019-2020/courses/comp-350" className="un">Numerical Computing</a></li>
            <li><a href="https://www.mcgill.ca/study/2019-2020/courses/comp-557" className="un">Fundamentals of Computer Graphics</a></li>
          </ul>
        </div>
        <div className="courses-container">
        	<h3>Some courses I'm currently taking</h3>
        	<ul>
        	  <li><a href="https://www.mcgill.ca/study/2019-2020/courses/comp-303" className="un">Software Design</a></li>
        	  <li><a href="https://www.mcgill.ca/study/2019-2020/courses/comp-421" className="un">Database Systems</a></li>
        	  <li><a href="https://www.mcgill.ca/study/2019-2020/courses/comp-551" className="un">Applied Machine Learning</a></li>
        	</ul>
        </div>
      </div>
    </div>
  </div>
)

// export const imgQuery = graphql`
//   {
//     profileImage: file(relativePath: { eq: "profile-square.jpeg" }) {
//       childImageSharp {
//         fixed(maxWidth: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
