import React from "react"
import PropTypes from "prop-types"

function Description({ content }) {
	return <span className="description">{content}</span>
}
Description.propTypes = {
	content: PropTypes.string,
}

Description.defaultProps = {
	content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
	do eiusmod tempor incididunt ut labore et dolore magna
	aliqua.`,
}
export default Description
