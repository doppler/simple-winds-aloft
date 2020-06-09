const fetchWindsAloftData = async (region, station) => {
  const response = await fetch(
    `https://winds-aloft-json.herokuapp.com/forecast/${region}/${station}.json`,
    {
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const json = response.json();
  return json;
};

export default fetchWindsAloftData;
