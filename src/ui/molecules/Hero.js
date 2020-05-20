import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

function Hero({ imgSrc, title }) {
	return (
		<section className="hero">
			<Img fluid={imgSrc} className="hero-image" />
			<h1 style={{ zIndex: 1, color: "white" }}>{title}</h1>
		</section>
	)
}

Hero.propTypes = {
	imgSrc: PropTypes.shape({}),
	title: PropTypes.string,
}

Hero.defaultProps = {
	title: `Electric Kitchen`,
}

export default Hero
