import React from 'react'
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
function Logo() {
	const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `)
	return (
		<Fade>
			<Img fluid={data.placeholderImage.childImageSharp.fluid} />
		</Fade>
	)
}

export default Logo