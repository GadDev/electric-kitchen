import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

function GalleryGridImg({ images }) {
	const renderImages = images.map((image, index) => {
		const classImg = `gallery-img${index + 1}`
		return <Img key={classImg} fluid={image} className={classImg} />
	})

	return <div className="gallery-grid">{renderImages}</div>
}

GalleryGridImg.propTypes = {
	images: PropTypes.arrayOf(PropTypes.shape({})),
}

export default GalleryGridImg
