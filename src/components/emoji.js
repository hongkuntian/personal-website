import React from "react"
import PropTypes from "prop-types"

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
}

export default Emoji
