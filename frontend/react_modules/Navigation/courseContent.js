import React, {useState, useContext} from "react";
import {UserContext} from './index.js';


export default function CourseContent(){
    const [data, setData] = useContext(UserContext); // get UserData from useContext



    return(
        <div className="course_section">
            <h1>{data.courseID}</h1> 
            <h1>Testing</h1>
        </div>
    );

}