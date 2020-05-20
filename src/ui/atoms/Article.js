import React from "react"
import PropTypes from "prop-types"


function Article({ title, content }) {
	return (
		<div className="about-grid">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	)
}

Article.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
}

Article.defaultProps = {
	title: "We're crazy about electric Cuisine",
	content: `The story this year just after the Lunar New Year in
	Vietnam, we decide to continue our journey to Cambodia.
	We stopped at Phnom Penh, and discovered the "country of
	smiles", received an electric shock. That's how Electric
	Kitchen was created, after get experience in differents
	restaurant accross the world (Paris, Amsterdam, London,
	Montreal, Perth, Sydney). We had this electric dream, it
	becomes true at the 308 Street nearby the famous Bassac
	Lane.`,
}
export default Article
