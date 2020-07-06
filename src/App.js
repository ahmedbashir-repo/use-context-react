import React, {useState} from 'react';

import './App.css';
import Parent from './Parent';


function App() {
  let [number, setNumber] = useState(20);
  return (
    <div>
      Hello World!
      <Parent num = {number}></Parent>
      <button onClick = {()=>{setNumber(++number)}}> Update Number</button>
    </div>
  );
}

export default App;
