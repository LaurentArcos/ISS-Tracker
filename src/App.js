import './App.css';
import Map from './components/Map';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState(6.0646);
  const [latitude, setLatitude] = useState(43.0724);


  useEffect(() => {
    getLocation()
  }, [])



  const getLocation = async () => {

    setLoading(true)

    const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
    
    const longitude = await response.data.longitude;
    const latitude = await response.data.latitude;

    setLongitude(parseFloat(longitude))
    setLatitude(parseFloat(latitude))
    setLoading(false)

    console.log(response);

  }


  return (
    <div className="App">
      {!loading ? <Map center={{ lat: latitude, lng: longitude }}/> : <h1>Please wait</h1>}
    </div>
  );
}

export default App;
