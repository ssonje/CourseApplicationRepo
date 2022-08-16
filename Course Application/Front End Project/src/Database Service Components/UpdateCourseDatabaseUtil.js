import axios from "axios";
import base_url from "../Constants/serverBaseURL";
import { toast } from "react-toastify";

/**
 * @function
 * `UpdateCourseDatabaseUtil` provides the functionality to update the course from the database by using the `axios`.
 * @param {course} course
 * This course will be updated on the basis of `course.id`.
 */
export const UpdateCourseDatabaseUtil = (course) => {
    return (
        axios.put(`${base_url}/courses`, course).then(
            (response) => {
                // Successfully put the data to the database
                toast.success("Course updated successfully!!!");
            },
            (error) => {
                // Error while putting the data
                toast.error("Something went wrong!!!");
            }
        )
    );
}
