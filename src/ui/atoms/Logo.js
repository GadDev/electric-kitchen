import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

const ImgWrapper = styled.div`
	width: 280px;
	height: auto;
	max-width: 40rem;

	@media screen and (min-width: 768px) {
		width: 100%;
	}
`
function Logo() {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "logo-green.png" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`)
	return (
		<ImgWrapper>
			<Fade>
				<Img fluid={data.placeholderImage.childImageSharp.fluid} />
			</Fade>
		</ImgWrapper>
	)
}

export default Logo
