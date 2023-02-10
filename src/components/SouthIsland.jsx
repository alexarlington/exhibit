import React, {useState, useEffect} from "react";
import { useParams, Link } from 'react-router-dom'
import '../styles/vertical-component.css';
import '../styles/button.css';
import '../main.css';
import Button from './Button.jsx'


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
      console.log(timerId)
      setTimerId(timerId)
  }

  const resetTimer = () => {
    clearTimeout(timerId);
    startTimer()
    console.log(timerId)
  }
  
  useEffect(() => {
    startTimer()
    return () => {
      clearTimeout(timerId);
    };
      // eslint-disable-next-line
  }, [])

  const indexLang = copyArray.indexOf(findLang)
  const southIsland = findArray[index]



return (
  < div onClick={resetTimer}>
      <div className="button-container-v">
        <Button page={props}/>
        <button className='page-button' onClick={() => setState("EN")} >
          English
        </button>
        <button className='page-button' onClick={() => setState("MI")} >
          Te Reo
        </button>      
      </div>

    <div className="component-v">
      <div className="component-image-v">
        <img src={southIsland.image.src} alt={southIsland.image.alt}/>
      </div>

      <div className="component-text-v">
          <h2 className="h2-v">
            {southIsland.copy[indexLang].title}
          </h2>
          <h3 className="h3-v">
            {southIsland.copy[indexLang].subtitle}
          </h3>
          <p className="p-v">
            {southIsland.copy[indexLang].description}
          </p>
      </div>
    </div >
    <div className="dom-links-v">
        <Link to={`/south-island/tasman`}>TASMAN</Link><br/>
        <Link to={`/south-island/nelson`}>NELSON</Link><br/>
        <Link to={`/south-island/marlborough`}>MALBOROUGH</Link><br/>
        <Link to={`/south-island/west-coast`}>WEST COAST</Link><br/>
        <Link to={`/south-island/canterbury`}>CANTERBURY</Link><br/>
        <Link to={`/south-island/otago`}>OTAGO</Link><br/>
        <Link to={`/south-island/southland`}>SOUTHLAND</Link><br/>
    </div>
    </div>
);

}

 export default SouthIsland
