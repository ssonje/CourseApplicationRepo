import axios from "axios";
import base_url from "../Constants/serverBaseURL";
import { toast } from "react-toastify";

export const UpdayeCourseDatabaseUtil = (course) => {
    return (
        axios.put(`${base_url}/courses`, course).then(
            (response) => {
                // Successfully put the data to the server
                toast.success("Course updated successfully!!!");
            },
            (error) => {
                // Error while putting the data
                toast.error("Something went wrong!!!");
            }
        )
    );
}
