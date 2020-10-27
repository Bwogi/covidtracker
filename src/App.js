import React, { useEffect, useState } from 'react';
import{ Select,FormControl,MenuItem, Card, CardContent } from "@material-ui/core";
import InfoBox from "./infoBox";
import "./App.css";
import Map from "./Map";
import Table from "./Table"

function App() {
  //to loop through the countries, we need to use state
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then((data) => {
      setCountryInfo(data);
    });
  }, []);

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
          setTableData(data);
          setCountries(countries);
      });
    };
    getCountriesData();
  
  },[]);

  const onCountryChange = async(event) =>{
    const countryCode = event.target.value;
    setCountry(countryCode);

    //lets activate the data
    const url = countryCode === 'worldwide' 
                                ? 'https://disease.sh/v3/covid-19/all'
                                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url) //fetch the response from above
    .then(response => response.json()) //then get the response and turn it into a json object data
    .then(data => {  //then with the data
      setCountry(countryCode);

      //all of the data...
      //from the country response
      setCountryInfo(data);
    });
  };

  console.log("COUNTRY INFO >>>", countryInfo);

  return (
    <div className="app">
      <div className="app__left">
          <div className="app__header">
                  <h1>GPRTT-Covid19</h1><p>Global Pandemic Realtime Tracker for Covid19</p>
                  <FormControl className="app__dropdown" >
                    <Select variant="outlined" onChange={onCountryChange} value={country} >
                      <MenuItem value="worldwide">Worldwide</MenuItem>
                      {countries.map((country) => (
                          <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))}
                    </Select> 
                  </FormControl>
          </div>
          <div className="app__stats">
                  <InfoBox title="Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
                  <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
                  <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          </div>
                {/* Map */}
          <Map /> 
      </div>
      <Card className="app__right">
            <CardContent>
                <h3>Live Cases by Country</h3>
                    {/* Table */}
                    <Table countries={tableData}/>
                <h3>Worldwide new Cases</h3>
                    {/* Graph */}
            </CardContent>
      </Card>
    </div>
  );
}

export default App;
