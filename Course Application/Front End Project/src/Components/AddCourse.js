import React, { useState, Fragment } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from '../Helpers/useDocumentTitleHook';
import { useCourseFormErrors } from "../Helpers/useCourseFormErrors";

function AddCourse() {
    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect
    useDocumentTitle("Add Course");

    const [course, setCourse] = useState([]);
    const [courseErrors, setCourseErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Form handler function
    const handleForm=(e)=> {
        e.preventDefault();
        console.log("HandleSubmit",course)
        setCourseErrors(validate(course));
        setIsSubmit(true);
    };

    const navigate = useNavigate();
    const validate = (course) => {
        const errors = {};

        if (!course.name) {
            errors.name = "Course Title cannot be empty!";
        }

        if (!course.description) {
            errors.description = "Course Description cannot be empty!";
        }

        return errors;
    };

    // Add course into the database
    const addCourse = (course) => {
        axios.post(`${base_url}/courses`, course).then(
            (response) => {
                // Successfully post the data to the server
                toast.success("Course has been added to the database!!!");

                // Navigate to the view courses pages after course has been successfully added to the system
                navigate('/viewCourses');
            },
            (error)=> {
                // Error while posting the data
                toast.error("Something went wrong!!!");
            }
        )
    };

    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect
    useCourseFormErrors(courseErrors, course, isSubmit, addCourse);

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details here</h1>
            <Form>
                <FormGroup>
                    <Label for="courseTitle">
                        Course Title
                    </Label>
                    <Input
                        id="courseTitle"
                        name="name"
                        placeholder="Enter course Title here"
                        type="text"
                        onChange={(e)=> {
                            setCourse({...course, name:e.target.value});
                        }}
                    />
                    <Label style={{color:'red', marginTop:5}}>{courseErrors.name}</Label>
                </FormGroup>

                <FormGroup>
                    <Label for="courseDescription">
                        Course Description
                    </Label>
                    <Input
                        id="courseDescription"
                        name="description"
                        placeholder="Enter course Description here"
                        type="textarea"
                        onChange={(e)=> {
                            setCourse({...course, description:e.target.value});
                        }}
                    />
                    <Label style={{color:'red', marginTop:5}}>{courseErrors.description}</Label>
                </FormGroup>

                <Container className="text-center">
                    <Button type="button" color="success" outline  onClick={(e)=> {
                        handleForm(e);
                    }}>Add Course</Button>
                    <Button color="warning m-3" outline type="reset" onClick={()=> {
                        setCourse({...course, name:null, description:null});
                        course.id = null;
                        course.name = null;
                        course.description = null;
                    }}>
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;