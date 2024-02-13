import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [selectedDiv, setDiv] = useState("div1");

 

  return (
    <div>
      
      <div className={selectedDiv == 'div1' ? 'divBox active' : 'divBox'} id="div1">  
        <h1>This is Div 1</h1>
      </div>
      <div className={selectedDiv == 'div2' ? 'divBox active' : 'divBox'} id="div2">
         <h1>This is Div 2</h1>
      </div>
      <button onClick={ () => setDiv("div2")} value="Div1"/>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)