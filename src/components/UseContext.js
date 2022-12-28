


import React,{ useContext,useState,useEffect } from "react";
import { ToggleTheme } from "../App";
import { text } from "../App";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  const [name,set] = useState(0);

  function ver (){
    set(name+1);
  }



  const out= useContext(text);
  const output = 
    
    out?`Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.
    Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.`:""
  
    useEffect(()=>{
        alert(`Button is clicked`)
      },[out])


  return(
    <div style={themeStyle}>
        <div>
        {output}
        </div>
      {/* <div>
        <button onClick={fast} >Context</button>
      </div> */}
      <div className="center">
      <div>
            {name}
      </div>
      <div>
      <button onClick={ver}>Like</button>
      </div>
      </div>
    </div>
  )
}

export default UseContext;