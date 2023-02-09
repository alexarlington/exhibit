import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
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
      }, 600000))
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
    </div>
    </div>
);

}

 export default SouthIsland

//  <Link to={`/south-island/south-island-home`}>HOME</Link><br/>
//  <Link to={`/south-island/tasman`}>Tasman</Link><br/>
//   <Link to={`/south-island/nelson`}>Nelson</Link><br/>
//   <Link to={`/south-island/marlborough`}>Marlborough</Link><br/>
//   <Link to={`/south-island/west-coast`}>West Coast</Link><br/>
//   <Link to={`/south-island/canterbury`}>Canterbury</Link><br/>
//   <Link to={`/south-island/otago`}>Otago</Link><br/>
//   <Link to={`/south-island/southland`}>Southland</Link><br/>