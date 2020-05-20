/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"

import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import Hero from "../molecules/Hero"
import "../../styles/styles.scss"

function Layout({ children, seoTitle = "Welcome to the 308 Electric Kitchen", srcImg, title }) {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<SEO title={seoTitle} />
			<Header siteTitle={data.site.siteMetadata.title} />
			<Hero imgSrc={srcImg} title={title} />
			<div>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
