import React from "react";
import { useParams } from 'react-router-dom'
 
 
function SouthIsland(props) {  
 const { pagename } = useParams()
 const array = props.data

 const find = array.find(x => {
   return x.id === pagename
 })

 const findArray = [find]

 const index = findArray.findIndex(page => {
   return page.id === find.id
 })
 const southIsland = findArray[index]

return (
<>
  <h1>
  {southIsland.copy[0].title}
  </h1>
  <h3>
    {southIsland.copy[0].subtitle}
  </h3>
  <p>
    {southIsland.copy[0].description}
  </p>
  <img src={southIsland.image.src} alt={southIsland.image.alt}/>
 </>
);

}

 export default SouthIsland