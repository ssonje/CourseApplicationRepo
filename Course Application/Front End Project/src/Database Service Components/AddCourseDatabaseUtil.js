import axios from "axios";
import base_url from "../Constants/serverBaseURL";
import { toast } from "react-toastify";

/**
 * @function
 * `AddCourseDatabaseUtil` provides the functionality to post data into the database by using the `axios`.
 * @param {navigate} navigate
 * Navigate to the destination where we want to go after successfully adding course to the database.
 * @param {course} course
 * This course will be added into the database.
 */
export const AddCourseDatabaseUtil = (navigate, course) => {
    return (
        axios.post(`${base_url}/courses`, course).then(
            (response) => {
                // Successfully post the data to the database
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
