import React from 'react' 
 
function Timeout() {
 const timeout = setTimeout(function () {
  window.location.href = '/';
  }, 5000)
  
}

 export default Timeout