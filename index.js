import React, { useState } from 'react';
import ReactDOM from 'react-dom';



function SideNav(){
  const [selectedButton, setButton] = useState("btn1")
  return(
    <ul>
      <li>
        <a className={selectedButton == "btn1" ? "btn active" : "btn"} onClick={() => {setButton("btn1")}}>Home</a>
      </li>
      <li>
        <a className={selectedButton == "btn2" ? "btn active" : "btn"} onClick={() => {setButton("btn2")}}>Messages</a>
      </li>
      <li>
        <a className={selectedButton == "btn3" ? "btn active" : "btn"} onClick={() => {setButton("btn3")}}>My Course</a>
      </li>
  </ul>
  )
}

function App() {
  const [selectedDiv, setDiv] = useState("main_nav");
  return (
    <div className={selectedDiv == "main_nav" ? "main_nav active" : "main_nav"}>
      <div className="nav_widget">
        <h1>My Timetable</h1>
        <br/>
        <p>Access your course timetable.</p>
      </div>
      <div className="nav_widget">
        <h1>Student Details</h1>
        <br/>
        <p>Check/Verify your information.</p>
      </div>
      <div className="nav_widget">
        <h1>Course Details</h1>
        <br/>
        <p>Access all information about your course.</p>
      </div>
    </div>
  );
}


const mainContentRoot = ReactDOM.createRoot(document.getElementById("main_content_root"));
mainContentRoot.render(<App />);

const sideNavRoot = ReactDOM.createRoot(document.getElementById("side_nav"));
sideNavRoot.render(<SideNav />)