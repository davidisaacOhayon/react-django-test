import React, {useState, useContext, useEffect} from "react";
import {UserContext} from './index.js';


export default function CourseContent(){
    const [data, setData] = useContext(UserContext); // get UserData from useContext
    const [courseData, setCourseData] = useState(null);
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/getStudentCourse/${data.courseID}`)
        .then((res) =>{
              
              if(!res.ok){
                throw new Error("Response was not okay.");
              }else{
                return res.json()
              }
        })
        .then((data) => {
            setCourseData(data);
        })
        .catch((error) =>{
            console.error("There was an error")
        })
    }, []);



    return(
        <div className="course_section">
           {courseData ? courseData.courseName : "Error Loading Course"}
        </div>
    );

}