import React, { useState }from "react";

function Toggle(props) {
 const array = props.info //[{english}, {teReo}]
 
 const [state, setState] = useState("EN")
 const findLang = array.find(x => {
  return x.language === state
 })
 const indexLang = array.indexOf(findLang)
 
 console.log(indexLang)
 

 return (
  <>
   <button onClick={() => setState("EN")} >
    English
   </button>
   <button onClick={() => setState("MI")} >
    Te Reo
   </button>
  </>
 )

}



export default Toggle