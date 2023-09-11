import './App.css';
import { useState } from 'react';

function App() {
  const[screen,setScreen]=useState("")
  console.log(screen)
  const handleClick=(keys)=>{
  
  }

  return (
    <div className="App">
      <h1>Calculator without mathjs</h1>
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
