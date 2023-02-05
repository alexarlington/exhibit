import React from "react";
import { useParams } from 'react-router-dom'
 
 
function Octopus(props) {
  // const { id } = useParams()
  // const pageData  = octopusExhibit.find(page => page.id === id)
  
  
  console.log(props)

   return (<div>
    <p> 
      hi from Octopus.jsx
    </p>
    <img src="/images/close-up-1.jpg" alt="tenticle" />
   </div>);

}

 export default Octopus