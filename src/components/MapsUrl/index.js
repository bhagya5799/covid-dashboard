import React from 'react'
import './index.css'

const MapsUrl = props => {
  const {details} = props
  const {mapStateName, mapUrl, totalTestedData} = details
  console.log(mapStateName, totalTestedData)
  return (
    <div className="maps-container">
      <img src={mapUrl} alt="map" className="map" />
      <div>
        <h2 className="mapname">{mapStateName}</h2>
      </div>
    </div>
  )
}
export default MapsUrl
