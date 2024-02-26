import React, {useContext} from "react";
import { UserContext, ContentContext }  from "./index.js";




export default function HomeNav(){
    const [currentContent, setContent] = useContext(ContentContext); 
    return(
    <div className="main_nav active">
        <button className="nav_widget" onClick={() => setContent("timetable")}>
          <span className="widget_style">
            <h1>My Timetable</h1>
             <br/>
             <br/>
             <br/>
             <p>Access your course timetable.</p>
          </span>
        </button>
        <button className="nav_widget" onClick={() => setContent("student_detail")}>
          <h1>Student Details</h1>
          <br/>
          <p>Check/Verify your information.</p>
        </button>
        <button className="nav_widget" onClick={() => setContent("course")}>
          <h1>Course Details</h1>
          <br/>
          <p>Access all information about your course.</p>
        </button>
     </div>
    );
}