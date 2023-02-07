import React from "react";
import { useParams } from 'react-router-dom'

import Toggle from './Toggle.jsx'

 
function Octopus(props) {  
  const { pagename } = useParams()
  const array = props.data

  const find = array.find(x => {
    return x.id === pagename
  })
  const findArray = [find]

  const index = findArray.findIndex(page => {
    return page.id === find.id
  })
  const octopus = findArray[index]

 return (
  <>
   <Toggle info={find.copy}/>
  <h1>
  {octopus.copy[0].title}
  </h1>
  <h3>
    {octopus.copy[0].subtitle}
  </h3>
  <p>
    {octopus.copy[0].description}
  </p>
  <img src={octopus.image.src} alt={octopus.image.alt}/>
 </>
 );


}

 export default Octopus