import React from "react"
import { graphql } from "gatsby"
import Layout from "../ui/templates/Layout"

const NotFoundPage = ({ data }) => (
	<Layout
		seoTitle="404: Not found"
		srcImg={data.restaurantHero.childImageSharp.fluid}
		title="Page not found"
	></Layout>
)
export const page404Query = graphql`
	query {
		restaurantHero: file(relativePath: { eq: "hero.jpeg" }) {
			...fluidImage
		}
	}
`
export default NotFoundPage
