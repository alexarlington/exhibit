import React from "react";
import { Link } from 'react-router-dom'
 
 
function Home() {

  
   return (<div>
    <p> 
      Click to see exhibit:
    </p>
    <p>
    <button><Link to={`/octopus/octopus-home`}>Octopus Exhibit</Link></button>
    <button><Link to={`/south-island/south-island-home`}>South Island Exhibit </Link></button>
    </p>

   </div>)

}

 export default Home