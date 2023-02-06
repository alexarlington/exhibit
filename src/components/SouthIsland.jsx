import React from "react";
import { useParams } from 'react-router-dom'
 
 
function SouthIsland(props) {  
 const { pagename } = useParams()
 const arraySouth = props.data

 const findSouth = arraySouth.find(x => {
   return x.id === pagename
 })
 console.log(arraySouth)
 const findArraySouth = [findSouth]

 const indexSouth = findArraySouth.findIndex(page => {
   return page.id === findSouth.id
 })
 const southIsland = findArraySouth[indexSouth]

return (
 <>
 <p>
 {southIsland.id}
 </p>
 <img src={southIsland.image.src} alt={southIsland.image.alt}/>
</>
);

}

 export default SouthIsland