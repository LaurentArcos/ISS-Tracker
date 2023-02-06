import './App.css';
import Map from './components/Map';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [loading, SetLoading] = useState(true);
  const [longitude, SetLongitude] = useState(6.0646);
  const [latitude, SetLatitude] = useState(43.0724);

  return (
    <div className="App">
      {!loading ? <Map center={{ lat: latitude, lng: longitude }}/> : <h1>Please wait</h1>}
    </div>
  );
}

export default App;
