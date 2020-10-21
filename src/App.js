import React from 'react';
import{
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <h1>Global COVID Real time TRACKER</h1>
        <FormControl className="app__dropdown" >
          <Select variant="outlined" value="abc" >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
          </Select> 
        </FormControl>
      </div>


      {/* Header */}
      {/* Worldwide Dropdown */}

      {/* infobox */}
      {/* infobox */}
      {/* infobox */}

      {/* Map */}

      {/* Table */}
      {/* Graph */}


    </div>
  );
}

export default App;
