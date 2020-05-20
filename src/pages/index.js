import React from "react"
import Layout from "../ui/templates/Layout"
// import SEO from "../components/seo"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import InstaFeed from "../ui/molecules/InstaFeed"
import Article from "../ui/atoms/Article"
import Description from "../ui/atoms/Description"
import GalleryGridImg from "../ui/molecules/GalleryGridImg"
import LeafletMap from "../ui/molecules/leafletMap"
import { useFirebase } from "gatsby-plugin-firebase"

const IndexPage = ({ data }) => {
	useFirebase(firebase => {
		firebase.analytics().logEvent("visited_electric-kitchen")
	}, [])

	const ImgFirstBlock = [
		data.portrait.childImageSharp.fluid,
		data.ceviche.childImageSharp.fluid,
		data.couscous.childImageSharp.fluid,
		data.portrait.childImageSharp.fluid,
		data.ceviche.childImageSharp.fluid,
		data.couscous.childImageSharp.fluid,
	]
	return (
		<Layout srcImg={data.restaurantHero.childImageSharp.fluid}>
			<section className="container">
				<Description />
				<GalleryGridImg images={ImgFirstBlock} />
				<Article />
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
