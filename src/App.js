import React, {useState} from 'react';

import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let [number, setNumber] = useState(20);
  return (
    <ValueContext.Provider value = {75}>
      <div>
        Hello World!
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;
