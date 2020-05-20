import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Logo from "../atoms/Logo"

function Hero({ imgSrc, imgSrcMob, title }) {
	return (
		<section className="hero">
			<Img fluid={imgSrc} className="hero-image" />
			<Img fluid={imgSrcMob} className="hero-image-mobile" />
			<Logo />
			<h1 style={{ textIndent: "-9999px" }}>{title}</h1>
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
