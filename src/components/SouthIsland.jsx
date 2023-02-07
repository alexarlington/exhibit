import React, {useState} from "react";
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
  {southIsland.copy[indexLang].title}
  </h1>
  <h3>
    {southIsland.copy[indexLang].subtitle}
  </h3>
  <p>
    {southIsland.copy[indexLang].description}
  </p>
  <img src={southIsland.image.src} alt={southIsland.image.alt}/>
 </>
);

}

 export default SouthIsland