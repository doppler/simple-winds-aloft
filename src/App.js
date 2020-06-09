import React, { useState, useEffect } from 'react';
import './App.css';
import useLocationHash from './useLocationHash';
import fetchWindsAloftData from './fetchWindsAloftData';

function App() {
  const [region, station] = useLocationHash().split(':');
  const [windsAloftData, setWindsAloftData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetchWindsAloftData(region, station);
      setWindsAloftData(json);
    };
    fetchData();
  }, [region, station]);
  return (
    <div className='App'>
      region: {region} station: {station}
      <div>
        <code>{JSON.stringify(windsAloftData, null, 2)}</code>
      </div>
    </div>
  );
}

export default App;
