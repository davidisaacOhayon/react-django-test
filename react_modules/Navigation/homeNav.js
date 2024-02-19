import React, {useContext} from "react";
import  { ContentContext }  from "./index.js";
import HomeNav from './homeComponent.js';



export default function MainContentScreen() {
    const [currentContent, setContent] = useContext(ContentContext);
    return(
      <div class="main_content">
        <h1 style={{fontSize: "5vmin"}}>Welcome, Student</h1>
        <hr />
        <div id="main_content_root">
           <div className="screen">
           {currentContent === "home" ? <HomeNav/> : null} 
           </div>
         </div>
      </div>
  
    );
  }