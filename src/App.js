import{
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>COVID WORLDWIDE TRACKER</h1>
      <FormControl className="app__dropdown" >
        <select variant="outlined" value="abc" >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
        </select> 
      </FormControl>

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
