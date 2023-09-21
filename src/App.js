
import './App.css';
import Conway from './component/Conway/Conway';
import React, { useState } from 'react';


function App() {
  const [started,setStarted] = useState(false);
  const [reset,setReset] = useState(false)
  return (
    <div className="App">
      <Conway length={10} width={10} started={started} reset={reset} setStarted={setStarted} setReset={setReset}/>
      
    </div>
  );
}

export default App;
