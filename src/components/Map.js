import GoogleMapReact from 'google-map-react';
import iss from './iss.png'

const MAP_KEY = process.env.REACT_APP_MAP_KEY

function Map( {center, zoom} ) {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      <img 
        src={iss} alt='ISS icon' 
        className='iss-icon'
        lat={center.lat}
        lng={center.lng}
      />
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 43.0724,
    lng: 6.0646,
  },
  zoom: 5,
}

export default Map;