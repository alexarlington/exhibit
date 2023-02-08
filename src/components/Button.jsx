import React from "react";
import { Link } from 'react-router-dom'
 
 
function Button(props) {

  const url = props.page.data.exhibit
  // const pageName = find.id
  const pageName = props.page.data.pages[0].id
  const stringFind = pageName.includes("home")
  // stringFind //true or false
  console.log(pageName)
 
 
 
 
 return (
  <div>
   <button><Link to={`/`}>Choose Exhibit</Link></button>

    {stringFind
     ? null
     : <button><Link to={`/${url}/${pageName}`}>Home</Link></button>}
     <br />
   </div>
   )

}

 export default Button