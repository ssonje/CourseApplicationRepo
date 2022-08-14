import React, { useState} from "react";
import Course from './Course';
import { useDocumentTitle } from '../Helpers/useDocumentTitleHook';
import { useFetchData } from "../Helpers/useFetchDataHook";
import { GetAllCoursesFromDatabase } from "../Database Service Components/GetAllCoursesFromDatabaseUtil";

function ViewCourses() {
    const [courses, setCourses] = useState([]);

    // Get all the courses from the server
    const getAllCourses = () => {
        GetAllCoursesFromDatabase(setCourses);
    };

    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect
    useDocumentTitle("Update Course");

    // Call the useFetchData to set all courses once when we setup the page and Skip initial execution of useEffect
    useFetchData(getAllCourses);

    const removeCourseByID=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
    }

    return (
        <div style={{ padding: 20 }}>
            <h4 align="center">List of Courses is as follows - </h4>
            {
                courses.length > 0
                    ? courses.map((course) => <Course key={course.id} course={course} update={removeCourseByID}></Course>)
                    : "No Courses Available"
            }
        </div>
    );
}

export default ViewCourses;