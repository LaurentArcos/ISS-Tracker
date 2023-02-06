import React from 'react';
import GoogleMapReact from 'google-map-react';

const MAP_KEY = process.env.REACT_APP_MAP_KEY

function Map( {center, zoom} ) {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 43.0724,
    lng: 6.0646,
  },
  zoom: 11,
}

export default Map;