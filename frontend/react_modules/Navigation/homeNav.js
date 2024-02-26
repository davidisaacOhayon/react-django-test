import React, {useContext} from "react";
import  { ContentContext, UserContext}  from "./index.js";

import HomeNav from './homeComponent.js';
import CourseContent from "./courseContent.js";


export default function MainContentScreen() {
    const [currentContent, setContent] = useContext(ContentContext);
    const [data, setData]  = useContext(UserContext);


    
    return(
      <div class="main_content">
        <h1 style={{fontSize: "5vmin"}}>Welcome, {data ? data.name : "user"}</h1>
        <hr />
        <div id="main_content_root">
           <div className="screen">
           {currentContent === "home" ? <HomeNav/> : null} 
           {currentContent === "course" ? <CourseContent  /> : null}
           </div>
         </div>
      </div>
  
    );
  }