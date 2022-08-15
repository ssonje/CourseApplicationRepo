import axios from "axios";
import base_url from "../Constants/serverBaseURL";
import { toast } from "react-toastify";

/**
 * @function
 * `DeleteCourseDatabaseUtil` provides the functionality to delete data from the database by using the `axios`.
 * @param {courseID} courseID
 * Data will be deleted from the database on the basis of the `courseID`.
 * @param {update} update
 * This function used to update the existing course list.
 */
export const DeleteCourseDatabaseUtil = (courseID, update) => {
    return (
        axios.delete(`${base_url}/courses/${courseID}`).then(
            (response) => {
                // Successfully deleted the data from the database
                toast.success("Course deleted successfully!!!");

                // Update the existing courses list
                update(courseID);
            },
            (error) => {
                // Error while deleting the data
                toast.error("Something went wrong!!!");
            }
        )
    );
}
