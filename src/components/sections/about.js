import React from "react"
import Emoji from "../emoji"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "../../styles/about.scss"

const About = ({ data }) => (
  <div className="container section">
    <div className="section-title" id="about">
      <h1>About me</h1>
      <div className="content-container">
        <div className="profile-image">
            <Img
              fixed={data.profileImage.childImageSharp.fixed}
              alt="Hong Kun's profile picture"
            />
        </div>
        <div className="about-text">
            <p>
              I'm currently enrolled in McGill's Honours Computer Science program
              and have a cumulative GPA of 3.64/4.00. <Emoji symbol="✨" /> I've
              been introduced to programming in high school and have ever since
              fallen in love with it. I'm super analytical and detail-oriented, so
              it's pretty much a match made in heaven! I haven't set my sights on a
              particular field yet since all the options seem so interesting and I'd
              like to explore them all. My philosophy in life is to leave the world
              better than we found it, and every step I take is to further that
              personal mantra in order to make the world slightly better.{" "}
              <Emoji symbol="😁" />
            </p>
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
