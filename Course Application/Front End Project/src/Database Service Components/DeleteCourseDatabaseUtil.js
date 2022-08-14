import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export const DeleteCourseDatabaseUtil = (courseID, update) => {
    return (
        axios.delete(`${base_url}/courses/${courseID}`).then(
            (response) => {
                // Successfully deleted the data from the server
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
