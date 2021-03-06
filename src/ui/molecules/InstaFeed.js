import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Instagram() {
	const data = useStaticQuery(graphql`
		query {
			allInstaNode(
				limit: 6
				sort: { fields: [timestamp], order: [DESC] }
			) {
				edges {
					node {
						id
						likes
						comments
						mediaType
						preview
						original
						timestamp
						localFile {
							childImageSharp {
								fixed(width: 280, height: 280) {
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				}
			}
		}
	`)
	const instaPosts = data.allInstaNode.edges
	const renderPosts = instaPosts.map(({ node }) => {
		return (
			<li key={node.id} className="insta-post">
				<Img fixed={node.localFile.childImageSharp.fixed} />
				<div className="overlay">
					<img
						className="icon"
						src={require("../../images/like.png")}
						alt="like icon"
					/>
					<p className="text">{node.likes}</p>
				</div>
			</li>
		)
	})
	return (
		<div className="insta">
			<h2>Instagram</h2>
			<span>@electrickitchen</span>
			<ul className="insta-posts">{renderPosts}</ul>
		</div>
	)
}

export default Instagram
