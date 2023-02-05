import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './main.css';
import Octopus from './components/Octopus.jsx'
import Octo from './components/Octo.jsx'
import octopusExhibit from './exhibit1.json'
// import southIslandExhibit from './exhibit2.json'

function App() {

  return (
    <div>
      <h1>App.jsx</h1>
      <Routes>
        <Route path="/octopus" element={<Octopus data={octopusExhibit}/>} />
        <Route path="/octopus/:id" element={<Octo exhibit={octopusExhibit}/>} />
      </Routes>

    </div>
  )
}

export default App;