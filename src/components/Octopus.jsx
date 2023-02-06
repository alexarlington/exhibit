import React from "react";
import { useParams } from 'react-router-dom'
 
 
function Octopus(props) {  
  const { pagename } = useParams()
  const arrayOct = props.data

  const findOct = arrayOct.find(x => {
    return x.id === pagename
  })
  const findArrayOct = [findOct]

  const indexOct = findArrayOct.findIndex(page => {
    return page.id === findOct.id
  })
  const octopus = findArrayOct[indexOct]

 return (
  <>
  <p>
  {octopus.id}
  </p>
  <img src={octopus.image.src} alt={octopus.image.alt}/>
 </>
 );


}

 export default Octopus