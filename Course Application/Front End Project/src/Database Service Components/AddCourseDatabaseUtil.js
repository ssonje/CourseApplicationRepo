import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export const AddCourseDatabaseUtil = (navigate, course) => {
    return (
        axios.post(`${base_url}/courses`, course).then(
            (response) => {
                // Successfully post the data to the server
                toast.success("Course has been added to the database!!!");

                // Navigate to the view courses pages after course has been successfully added to the system
                navigate('/viewCourses');
            },
            (error) => {
                // Error while posting the data
                toast.error("Something went wrong!!!");
            }
        )
    );
}
