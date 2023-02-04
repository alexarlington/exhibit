import React, { Component, useState } from "react";
 
function Octopus(props) {
    console.log('hi ', props)


   return <div>
    <p> 
      hi from Octopus.jsx
    </p>
   </div>;


}

 
 export default Octopus
 
 
 


 
//  constructor(){
//   super();
//   this.state = {
//   octopus: []
// }
// }

// componentDidMount(){
// fetch('/octopus')
// .then(res => res.json())
// .then(octopus => {
// this.setState({octopus: octopus})
// })
// }


//  {
//   this.state.db.map(db => {
//    <p>hi {db.Octopus} </p>
//   })
//  }

// {
//   this.state.octopus.map(octopus => 
//     <p key={octopus.id}>hi {octopus.english} </p>
//   )
// }

