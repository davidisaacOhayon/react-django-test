import React, {useContext} from "react";
import { ContentContext }  from "./index.js";

export default function HomeNav(){
    const [currentContent, setContent] = useContext(ContentContext); 
    return(
    <div className="main_nav active">
        <div className="nav_widget" onClick={() => setContent("timetable")}>
          <h1>My Timetable</h1>
          <br/>
          <p>Access your course timetable.</p>
        </div>
        <div className="nav_widget" onClick={() => setContent("student_detail")}>
          <h1>Student Details</h1>
          <br/>
          <p>Check/Verify your information.</p>
        </div>
        <div className="nav_widget" onClick={() => setContent("course_detail")}>
          <h1>Course Details</h1>
          <br/>
          <p>Access all information about your course.</p>
        </div>
     </div>
    );
}