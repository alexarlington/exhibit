import React, {useState} from "react";
import { useParams, Link } from 'react-router-dom'
import Button from './Button.jsx'



 
function Octopus(props) {  
  const { pagename } = useParams()
  const array = props.data.pages
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
  <Button page={props}/>
  <div>
   <button onClick={() => setState("EN")} >
    English
   </button>
   <button onClick={() => setState("MI")} >
    Te Reo
   </button>
  </div>

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
  
  
  
  
  <div>
   <Link to={`/`}>choose exhibit</Link><br/>
   <Link to={`/octopus/octopus-home`}>HOME</Link><br/>
   <Link to={`/octopus/close-up-1`}>CLOSE UP ONE</Link><br/>
   <Link to={`/octopus/close-up-2`}>CLOSE UP TWO</Link><br/>
   <Link to={`/octopus/close-up-3`}>CLOSE UP THREE</Link><br/>
  </div>
 </>
 );


}

 export default Octopus