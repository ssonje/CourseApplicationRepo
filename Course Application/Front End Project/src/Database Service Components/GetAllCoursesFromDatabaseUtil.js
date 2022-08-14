import axios from "axios";
import base_url from "../Constants/serverBaseURL";
import { toast } from "react-toastify";

export const GetAllCoursesFromDatabase = (setCourses) => {
    return (
        axios.get(`${base_url}/courses`).then(
            (response) => {
                // Successfully get all the data from the server
                toast.success("All courses has been loaded!!!");
                setCourses(response.data);
            },
            (error)=> {
                // Error while fetching the data from the server
                toast.error("Something went wrong!!!");
            }
        )
    );
}
