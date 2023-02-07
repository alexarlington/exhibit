import React, {useState} from "react";
import { useParams } from 'react-router-dom'


 
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


  const copyArray = find.copy
  const [state, setState] = useState("EN")
  const findLang = copyArray.find(x => {
   return x.language === state
  })
  const indexLang = copyArray.indexOf(findLang)

 return (
  <>
   <button onClick={() => setState("EN")} >
    English
   </button>
   <button onClick={() => setState("MI")} >
    Te Reo
   </button>

  <h1>
  {octopus.copy[indexLang].title}
  </h1>
  <h3>
    {octopus.copy[indexLang].subtitle}
  </h3>
  <p>
    {octopus.copy[indexLang].description}
  </p>
  <img src={octopus.image.src} alt={octopus.image.alt}/>
 </>
 );


}

 export default Octopus