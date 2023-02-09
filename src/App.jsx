import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './main.css';
import octopusExhibit from './exhibit1.json'
import southIslandExhibit from './exhibit2.json'

import Home from './components/Home.jsx'
import Octopus from './components/Octopus.jsx'
import SouthIsland from './components/SouthIsland.jsx'

function App() {

  return (
    <div>
     {/* <h1>Tamaki Paenga Hira</h1> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/octopus/:pagename" element={<Octopus data={octopusExhibit}/>} />
        <Route path="/south-island/:pagename" element={<SouthIsland data={southIslandExhibit}/>} />
      </Routes>

    </div>
  )
}

export default App;