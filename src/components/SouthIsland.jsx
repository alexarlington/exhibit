import React, {useState, useEffect} from "react";
import { useParams, Link } from 'react-router-dom'
import Button from './Button.jsx'
import Timeout from './Timeout.jsx'
 
 
function SouthIsland(props) {  
  const { pagename } = useParams()
  const array = props.data.pages
  const find = array.find(x => {
   return x.id === pagename
  })
  const findArray = [find]
  const index = findArray.findIndex(page => {
   return page.id === find.id
  })
  const southIsland = findArray[index]

  const copyArray = find.copy
  const [state, setState] = useState("EN")
  const findLang = copyArray.find(x => {
   return x.language === state
  })
  const indexLang = copyArray.indexOf(findLang)
  


return (
  <div>

  <Button page={props}/>
  <Timeout />
    <div>
      <button onClick={() => setState("EN")} >
        English
      </button>
      <button onClick={() => setState("MI")} >
        Te Reo
      </button>
    </div>

  <h1>
    {southIsland.copy[indexLang].title}
  </h1>
  <h3>
    {southIsland.copy[indexLang].subtitle}
  </h3>
  <p>
    {southIsland.copy[indexLang].description}
  </p>
  <img src={southIsland.image.src} alt={southIsland.image.alt}/>
  <div>
    <Link to={`/`}>back</Link><br/>
    <Link to={`/south-island/south-island-home`}>HOME</Link><br/>
    <Link to={`/south-island/tasman`}>Tasman</Link><br/>
    <Link to={`/south-island/nelson`}>Nelson</Link><br/>
    <Link to={`/south-island/marlborough`}>Marlborough</Link><br/>
    <Link to={`/south-island/west-coast`}>West Coast</Link><br/>
    <Link to={`/south-island/canterbury`}>Canterbury</Link><br/>
    <Link to={`/south-island/otago`}>Otago</Link><br/>
    <Link to={`/south-island/southland`}>Southland</Link><br/>
  </div>
</div>
);

}

 export default SouthIsland