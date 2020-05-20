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
		data.ceviche.childImageSharp.fluid,
		data.crepe.childImageSharp.fluid,
		data.portrait.childImageSharp.fluid,
		data.restoFive.childImageSharp.fluid,
		data.quartier.childImageSharp.fluid,
		data.frappe.childImageSharp.fluid,
	]
	const ImgSecondBlock = [
		data.streetfighter.childImageSharp.fluid,
		data.couscous.childImageSharp.fluid,
		data.meal.childImageSharp.fluid,
		data.pikachu.childImageSharp.fluid,
		data.peopleTwo.childImageSharp.fluid,
		data.brixton.childImageSharp.fluid,
	]
	return (
		<Layout
			srcImg={data.restaurantHero.childImageSharp.fluid}
			imgSrcMob={data.restaurantHeroMob.childImageSharp.fluid}
		>
			<section className="container">
				<Description />
				<GalleryGridImg images={ImgFirstBlock} />
				<Article />
			</section>
			<div className="parallax"></div>
			<section className="container">
				<Menu />
			</section>
			<section className="container">
				<Description content="The simpler the food, the harder it is to prepare well." />
				<GalleryGridImg images={ImgSecondBlock} />
				{/* <Article /> */}
			</section>
			<section className="container">
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
			fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const pageQuery = graphql`
	query {
		restaurantHero: file(relativePath: { eq: "people2.jpeg" }) {
			...fluidImage
		}
		restaurantHeroMob: file(relativePath: { eq: "portrait.jpg" }) {
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
		brunch: file(relativePath: { eq: "brunch.jpeg" }) {
			...fluidImage
		}
		crepe: file(relativePath: { eq: "crepe.jpeg" }) {
			...fluidImage
		}
		frappe: file(relativePath: { eq: "frappe.jpeg" }) {
			...fluidImage
		}
		quartier: file(relativePath: { eq: "quartier.jpeg" }) {
			...fluidImage
		}
		pikachu: file(relativePath: { eq: "pikachu.jpeg" }) {
			...fluidImage
		}
		restoFive: file(relativePath: { eq: "resto5.jpeg" }) {
			...fluidImage
		}
		people: file(relativePath: { eq: "people.jpeg" }) {
			...fluidImage
		}
		peopleTwo: file(relativePath: { eq: "people2.jpeg" }) {
			...fluidImage
		}
		meal: file(relativePath: { eq: "meal.jpeg" }) {
			...fluidImage
		}
		brixton: file(relativePath: { eq: "img-1.jpeg" }) {
			...fluidImage
		}
		streetfighter: file(relativePath: { eq: "streetfighter.jpeg" }) {
			...fluidImage
		}
	}
`

export default IndexPage
