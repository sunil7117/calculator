import * as  math from 'mathjs';
import './App.css';
import { useState } from 'react';

function App() {
  const[screen,setScreen]=useState("")
  const[show,setShow]=useState(true)
  const buttonClick=()=>{
    setShow(!show)
  }
  const handleClick=(keys)=>{
    switch(keys){
      case "=":
      setScreen(math.evaluate(screen))
      break
      case 'c':
        setScreen("")
        break
      case 'b':
        if(typeof(screen)==="string"){
          console.log("Strings")
          setScreen(screen.slice(0,-1))
        }else{
          console.log("number")
          setScreen("")
        }
        break
    default:
      setScreen((screen)=>
      screen+keys)
  }
  }

  return (
    <div className="App">
      <button onClick={buttonClick}>Using Mathjs</button>
      <h1>{show&& "Calculator with mathjs"}</h1>
      <div id='cal'>
        <div id='screen'>{screen}</div>
        <div id='pad'>
          <div id='keys'onClick={(e)=>handleClick("c")}>C</div>
          <div id='keys'onClick={(e)=>handleClick("/")}>/</div>
          <div id='keys'onClick={(e)=>handleClick("*")}>X</div>
          <div id='keys'onClick={(e)=>handleClick("b")}>B</div>
          <div id='keys' onClick={(e)=>handleClick("7")}>7</div>
          <div id='keys' onClick={(e)=>handleClick("8")}>8</div>
          <div id='keys'onClick={(e)=>handleClick("9")}>9</div>
          <div id='keys'onClick={(e)=>handleClick("-")}>-</div>
          <div id='keys'onClick={(e)=>handleClick("4")}>4</div>
          <div id='keys' onClick={(e)=>handleClick("5")}>5</div>
          <div id='keys'onClick={(e)=>handleClick("6")}>6</div>
          <div id='keys'onClick={(e)=>handleClick("+")}>+</div>
          <div id='keys'onClick={(e)=>handleClick("1")} >1</div>
          <div id='keys'onClick={(e)=>handleClick("2")}>2</div>
          <div id='keys'onClick={(e)=>handleClick("3")}>3</div>
          <div id='keys' className='exp' onClick={(e)=>handleClick("=")}>=</div>
          <div id='keys'onClick={(e)=>handleClick("%")}>%</div>
          <div id='keys'onClick={(e)=>handleClick("0")}>0</div>
          <div id='keys'onClick={(e)=>handleClick(".")}>.</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
