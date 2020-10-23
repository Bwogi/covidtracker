import React, { useEffect, useState } from 'react';
import{ Select,FormControl,MenuItem } from "@material-ui/core";
import './App.css';

function App() {
  //to loop through th countries, we need to use state
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    //async means(->) send a request, wait for it, 
    //do something with the result
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data)=>{
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
      });
    };
    getCountriesData();
  
  },[]);

  const onCountryChange = (event) =>{
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="App">
      <div className="app__header">
        <h1>Global COVID Tracker(in real time)</h1>
        <FormControl className="app__dropdown" >
          <Select variant="outlined" onChange={onCountryChange} value={country} >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
          </Select> 
        </FormControl>
      </div>


      {/* Header */}
      {/* Worldwide Dropdown */}

      <div className="app__stats">
        {/* infobox title="Corona virus cases"*/}
        {/* infobox title="Corona virus deaths"*/}
        {/* infobox title="Corona virus recoveries"*/}
        {/* infobox */}
        {/* infobox */}
        
      </div>


      {/* Map */}

      {/* Table */}
      {/* Graph */}


    </div>
  );
}

export default App;
