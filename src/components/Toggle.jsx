import React, { useState } from "react";

function Toggle(props) {
 const array = props.info //[{english}, {teReo}]

 const [language, setLanguage] = useState([0])
 
 
 const findLanguage = array.find(x => {
  return x.language === array[language].language
 })
 // [0] returning {Eng}



 // const currentIndex = array.findIndex(page => {
 //  return page.language === findLanguage.language
 // })
 // returning 0

 const handleClick = () => {
  setLanguage(findLanguage)
 }
 

 return (
  <>
       <button onClick={handleClick}>
    {console.log("eng: ", language)}
    English
   </button>
   <button onClick={handleClick}>
    {console.log("tereo: ", language)}
    Te Reo
   </button>
  </>
 )

}

// onclick needs to trigger a change in [array] index
// onclick="myFunction()"

export default Toggle