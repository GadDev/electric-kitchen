import React from "react"
import PropTypes from "prop-types"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

function LeafletMap(props) {
	const { position, zoom, markerText } = props
	return (
		<Map center={position} zoom={zoom}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
			/>
			{markerText !== "" && (
				<Marker position={position}>
					<Popup>{markerText}</Popup>
				</Marker>
			)}
		</Map>
	)
}

LeafletMap.defaultProps = {
	position: [11.552921, 104.929497],
	zoom: 13,
	markerText: `308 Electric Kitchen,Street 308
	Phnom Penh, Cambodia`,
}
LeafletMap.propTypes = {
	/** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
	position: PropTypes.array,
	/** Initial zoom level for the map (default 13) **/
	zoom: PropTypes.number,
	/** If set, will display a marker, which when clicked will display this text **/
	markerText: PropTypes.string,
}

export default LeafletMap
