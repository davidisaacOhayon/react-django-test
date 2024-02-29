import React, { useContext, useEffect } from "react";
import { ContentContext }  from "./index.js";

export default function SideNav(){
    const [currentContent, setContent] = useContext(ContentContext);

    return(
    <nav class="side_divider" id="side_nav">
      <ul>
        <li>
          <a className={currentContent === "home" ? "btn active" : "btn"} onClick={() => {setContent("home")}}>Home</a>
        </li>
        <li>
          <a className={currentContent === "btn2" ? "btn active" : "btn"} onClick={() => {setContent("btn2")}}>Messages</a>
        </li>
        <li>
          <a className={currentContent === "course" ? "btn active" : "btn"} onClick={() => {setContent("course")}}>My Course</a>
        </li>
      </ul>
    </nav>
    )
  }