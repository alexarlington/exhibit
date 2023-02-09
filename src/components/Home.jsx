import React from "react";
import { Link } from 'react-router-dom'
import '../styles/home.css';



function Home() {

   return (
   <div >
    <h2 className="h2-home"> 
      Click to see exhibit:
    </h2>
    <div className="home">
    <button className="home-button"><Link to={`/octopus/octopus-home`}>Octopus Exhibit</Link></button>
    <button className="home-button"><Link to={`/south-island/south-island-home`}>South Island Exhibit </Link></button>
    </div>
   </div>)
   
}

export default Home
