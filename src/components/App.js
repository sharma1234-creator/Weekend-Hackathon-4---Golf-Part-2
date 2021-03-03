import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
import ReactDOM from "react-dom";
const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
setX(0);
    setY(0);
    setBallPosition({left:"0px",top:"0px"});
    setRenderBall(false);
    renderChoice();
  };
  const renderChoice = () => {
      if(renderBall)
      return (<div className="ball" style={{position:"absolute",left:x , top:y}}></div>);
      else
      return (<button className="start ballProvider" onClick={getBall}>Start</button>);

   
  };
  function getBall()
  {
      setRenderBall(true);
      renderChoice();
     
  }
    
  useEffect(function(){
    document.addEventListener("keydown",(event)=>{
        if(event.key=="ArrowLeft"||event.keyCode=='37')
        setX(x=>x-5);
        if(event.key=="ArrowUp"||event.keyCode=='38')
        setY(y=>y-5);
        if(event.key=="ArrowRight"||event.keyCode=='39')
        setX(x=>x+5);
        if(event.key=="ArrowDown"||event.keyCode=='40')
        setY(y=>y+5);
        console.log(event.key+" "+x+" "+y);
      });
    renderChoice();
  },[]);
    
    


  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App
