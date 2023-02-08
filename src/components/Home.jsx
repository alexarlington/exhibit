import React from "react";
import { Link } from 'react-router-dom'
import '../styles/home.css';
 
 
function Home() {

  
   return (
   <div className="home">
    <p className="home-p"> 
      Click to see exhibit:
    </p>
    <p>
    <button className="home-button"><Link to={`/octopus/octopus-home`}>Octopus Exhibit</Link></button>
    <button className="home-button"><Link to={`/south-island/south-island-home`}>South Island Exhibit </Link></button>
    </p>

   </div>)

}

 export default Home