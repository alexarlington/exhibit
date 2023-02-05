import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import './main.css';
import Octopus from './components/Octopus.jsx'
// import OctoText from './components/OctoText.jsx'
import jsonData from './exhibit1.json'
// const asdfg = jsonData.octopus.english[0].name
// const southIslandData = jsonData['south island']
// images/1.jpg
// const octopusData = jsonData.octopus

function App() {

  return (
    <div>
      <h1>App.jsx</h1>
      <p className="description">{jsonData.pages[1].copy[1].description}</p>
      <Octopus />
      
    </div>
  )
}

export default App;