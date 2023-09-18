import logo from './logo.svg';
import './App.css';
import Conway from './component/Conway/Conway';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect,useContext } from 'react';


function App() {
  const [started,setStarted] = useState(false);
  const [reset,setReset] = useState(false)
  return (
    <div className="App">
      <Conway length={10} width={10} started={started} reset={reset} setStarted={setStarted}/>
      
    </div>
  );
}

export default App;
