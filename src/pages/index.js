import React from "react"
import Layout from "../ui/templates/Layout"
// import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import InstaFeed from "../ui/molecules/InstaFeed"
import LeafletMap from "../ui/molecules/leafletMap"
import { useFirebase } from "gatsby-plugin-firebase"

const IndexPage = ({ data }) => {
	useFirebase(firebase => {
		firebase.analytics().logEvent("visited_electric-kitchen")
	}, [])
	return (
		<Layout>
			<section className="hero">
				<Img
					fluid={data.restaurantHero.childImageSharp.fluid}
					className="hero-image"
				/>
				<h1 style={{ zIndex: 1, color: "white" }}>Electric Kitchen</h1>
			</section>
			<section className="container">
				<span className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</span>
				<div className="gallery-grid">
					<Img
						fluid={data.portrait.childImageSharp.fluid}
						className="gallery-img1"
					/>
					<Img
						fluid={data.ceviche.childImageSharp.fluid}
						className="gallery-img2"
					/>
					<Img
						fluid={data.couscous.childImageSharp.fluid}
						className="gallery-img3"
					/>
					<Img
						fluid={data.portrait.childImageSharp.fluid}
						className="gallery-img4"
					/>
					<Img
						fluid={data.ceviche.childImageSharp.fluid}
						className="gallery-img5"
					/>
					<Img
						fluid={data.couscous.childImageSharp.fluid}
						className="gallery-img6"
					/>
				</div>
				<div className="about-grid">
					<h2>We're crazy about electric Cuisine</h2>
					<p>
						The story this year just after the Lunar New Year in
						Vietnam, we decide to continue our journey to Cambodia.
						We stopped at Phnom Penh, and discovered the "country of
						smiles", received an electric shock. That's how Electric
						Kitchen was created, after get experience in differents
						restaurant accross the world (Paris, Tours, London,
						Perth, Melbourne, Montreal). We had this electric dream,
						it becomes true at the 308 Street nearby the famous
						Bassac Lane.
					</p>
				</div>
			</section>
			<div className="parallax"></div>
			<section className="container">
				<Menu />
				<InstaFeed />
			</section>
			{typeof window !== "undefined" && (
				<LeafletMap
					zoom={18} // Zoom Level
					markerText={"Welcome to the 308 electric Kitchen"} // Icon text
				/>
			)}
		</Layout>
	)
}

export const fluidImage = graphql`
	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 1600) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const pageQuery = graphql`
	query {
		restaurantHero: file(relativePath: { eq: "hero.jpeg" }) {
			...fluidImage
		}
		portrait: file(relativePath: { eq: "portrait.jpg" }) {
			...fluidImage
		}
		couscous: file(relativePath: { eq: "img-2.jpeg" }) {
			...fluidImage
		}
		ceviche: file(relativePath: { eq: "img-3.jpeg" }) {
			...fluidImage
		}
	}
`

export default IndexPage
