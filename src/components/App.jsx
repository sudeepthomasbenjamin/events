import React, { useState } from "react";

function App() {



var [init,changeFn]=useState("")  
var [clicked,clickfn]=useState("")
 
function changed(event)
  {
changeFn(event.target.value)
  }
 
  function clickeed()
  {
clickfn(init)
    
  }
 


  return (
    <div className="container">
      <h1>Hello {clicked} </h1>
      <input type="text" onChange={changed} placeholder="What's your name?" />
      <button onClick={clickeed} >Submit</button>
    </div>
  );
}

export default App;
