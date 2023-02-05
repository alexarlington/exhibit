import React from "react";
import { useParams } from 'react-router-dom'
 
 
function Octo(props) {  
  const { id } = useParams()

  console.log("OI", props.exhibit.pages[id])

   return (<div>
    <h1> 
      hey: { id }
    </h1>
    <p>
      {/* {props} */}
    </p>
   </div>);

}

 export default Octo