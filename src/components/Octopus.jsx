import React, {useState, useEffect} from "react";
import { useParams, Link} from 'react-router-dom'
import '../styles/horizontal-component.css';
import '../styles/button.css';

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
  
  const copyArray = find.copy
  const [state, setState] = useState("EN")
  const findLang = copyArray.find(x => {
    return x.language === state
  })

  let [timerId, setTimerId] = useState();
  
  function startTimer(){
     timerId = (setTimeout(function () {
      window.location.href = '/';
      }, 60000))
      setTimerId(timerId)
  }

  const resetTimer = () => {
    clearTimeout(timerId);
    startTimer()
  }
  
  useEffect(() => {
    startTimer()
    return () => {
      clearTimeout(timerId);
    };
  // eslint-disable-next-line
  }, [])
  
  const indexLang = copyArray.indexOf(findLang)
  const octopus = findArray[index]
  // const hotspot = octopus.hotspots


 return (
   <div onClick={resetTimer}>
    <div className="button-container-h">
      <Button page={props}/>
      <button className='page-button' onClick={() => setState("EN")} >
        English
      </button>
      <button className='page-button' onClick={() => setState("MI")} >
        Te Reo
      </button>
    </div>

  <div className="component-h">
    <div className="component-text-h">
      <h2>
        {octopus.copy[indexLang].title}
      </h2>
      <h3>
        {octopus.copy[indexLang].subtitle}
      </h3>
      <p>
        {octopus.copy[indexLang].description}
      </p>
    </div>
    <div className="component-image-h">
      <img src={octopus.image.src} alt={octopus.image.alt} useMap="octo=map"/>
    </div>
  </div>
  <div className="dom-links-h">
    <Link to={`/octopus/close-up-1`}>CLOSE UP ONE</Link><br/>
    <Link to={`/octopus/close-up-2`}>CLOSE UP TWO</Link><br/>
    <Link to={`/octopus/close-up-3`}>CLOSE UP THREE</Link><br/>
</div>
</ div>
 )
}

export default Octopus

