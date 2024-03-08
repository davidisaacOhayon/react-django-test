import React, {useState, useContext, useEffect} from "react";
import {UserContext} from './index.js';
import { FetchAPI } from "./fetch.js";
import TestForm from "./testLogin.js";


export default function CourseContent(){
    const [data, setData] = useContext(UserContext); // get UserData from useContext
    const [courseData, setCourseData] = useState(null);


    useEffect(()=>{
        FetchAPI(`http://127.0.0.1:8000/getStudentCourse/${data.courseID}`)
        .then((data) => setCourseData(data)); // SetCourseData once response is gotten.
    }, []); // Dependency array ensures that once data.CourseID changes, useEffect will run again.
    




    return(
        <div className="course_section">
           <div className="course_details">
              <h1>Course Details</h1>
              <hr />
              <h3>Course - {courseData ? courseData.courseName : "Error Loading Info."} </h3>
              <h3>Course Code: {courseData ? courseData.courseCode : "Error Loading Info."}</h3>
           </div>

           <TestForm />
           




           
        </div>
    );

}