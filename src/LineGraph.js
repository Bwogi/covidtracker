 //rfce
 import React from 'react';
 import { Line } from "react-chartjs-2"; 
 
 function LineGraph() {
     const [data, setData] = useState({}); 
     
     useEffect(() =>{
         fetch('http://disease.sh/v3/covid-19/historical/all?lastdays=120')
         .then(response => response.json())
         .then(data => {
             //clever stuff goes here

         })
     }, [])


     return (
         <div>
             <Line 
                data
                options
                />
         </div>
     )
 }
 
 export default LineGraph
 