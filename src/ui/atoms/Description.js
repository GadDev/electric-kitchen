import React from "react"
import PropTypes from "prop-types"

function Description({ content }) {
	return <span className="description">{content}</span>
}
Description.propTypes = {
	content: PropTypes.string,
}

Description.defaultProps = {
	content: `La bonne cuisine, c'est le souvenir.`,
}
export default Description
