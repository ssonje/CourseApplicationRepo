import axios from "axios";
import base_url from "../Constants/serverBaseURL";
import { toast } from "react-toastify";

/**
 * @function
 * `GetAllCoursesFromDatabaseUtil` provides the functionality to get all courses related data from the database by using the `axios`.
 * @param {setCourses} setCourses
 * This function used to update the existing courses list with the new course list.
 */
export const GetAllCoursesFromDatabaseUtil = (setCourses) => {
    return (
        axios.get(`${base_url}/courses`).then(
            (response) => {
                // Successfully get all the data from the database
                toast.success("All courses has been loaded!!!");
                setCourses(response.data);
            },
            (error) => {
                // Error while fetching the data from the database
                toast.error("Something went wrong!!!");
            }
        )
    );
}
