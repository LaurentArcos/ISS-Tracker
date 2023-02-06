import './App.css';
import Map from './components/Map';
import { useState,useEffect } from 'react';

function App() {

  const [loading, SetLoading] = useState(true);

  return (
    <div className="App">
      {!loading ? <Map /> : <h1>Please wait</h1>}
    </div>
  );
}

export default App;
