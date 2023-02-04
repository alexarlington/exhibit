import React from 'react';
import './main.css';
import Octopus from './components/Octopus.jsx'
import jsonData from './exhibit.json'
const octopusData = jsonData.octopus
// const asdfg = jsonData.octopus.english[0].name
// const southIslandData = jsonData['south island']


function App() {

  return (

    <div>
     <h1>hello from App.jsx</h1>
     <Octopus octo={octopusData}/> 
    </div>
  );
}

export default App;