import React from "react";
import { Link, useParams } from 'react-router-dom'
 
 
function Button(props) {
  const { pagename } = useParams()
  const url = props.page.data.exhibit

  const pageName = props.page.data.pages[0].id
  const stringFind = pagename.includes("-home") 

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