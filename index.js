import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [selectedDiv, setDiv] = useState("div1");

 

  return (
    <div className="react_root_1">
      <h1>use State for changing dividers</h1>
      <div className={selectedDiv == 'div1' ? 'divBox active' : 'divBox'} id="div1">  
        <h1>This is Div 1</h1>
        <p>F = Ma</p>
      </div>
      <div className={selectedDiv == 'div2' ? 'divBox active' : 'divBox'} id="div2">
         <h1>This is Div 2</h1>
         <p>ay caramba</p>
      </div>
      <button className="divButton" onClick={ () => setDiv("div1")} value="Div 1">Div 1</button>
      <button className="divButton" onClick={ () => setDiv("div2")} value="Div 1">Div 2</button>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)