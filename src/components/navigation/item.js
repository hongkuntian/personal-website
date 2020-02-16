import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Item = (props) => {
  const name = props.name
  const id = "/#" + props.id

  return (
    <div role="button" onClick={props.closeCallback} onKeyDown={props.closeCallback} className="menu-item">
      <Link to={id}>{name}</Link>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Item
