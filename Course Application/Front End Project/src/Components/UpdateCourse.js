import React, { useState, Fragment } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useDocumentTitle } from '../Helpers/useDocumentTitleHook';

function UpdateCourse() {
    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect
    useDocumentTitle("Update Course");

    // Get the data for the course which we've to update
    const navigate = useNavigate();
    const { state } = useLocation();
    const id = state.id;
    const name = state.name;
    const description = state.description;

    const [course, setCourse] = useState({
        id: id,
        name: name,
        description: description
    });

    // Form handler function
    const handleForm = (e) => {
        e.preventDefault();
        updateCourse(course);
        navigate('/viewCourses');
    };

    // Update course into the database
    const updateCourse = (course) => {
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
    }

    return (
        <Fragment>
            <h1 className="text-center my-3">Update Course Details from here</h1>
            <Form>
                <FormGroup>
                    <Label for="courseID">
                        Course ID
                    </Label>
                    <Input
                        id="courseID"
                        name="id"
                        type="text"
                        value={course.id}
                        onChange={(e)=> {
                            setCourse({...course, id:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="courseTitle">
                        Course Title
                    </Label>
                    <Input
                        id="courseTitle"
                        name="name"
                        type="text"
                        value={course.name}
                        onChange={(e)=> {
                            setCourse({...course, name:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="courseDescription">
                        Course Description
                    </Label>
                    <Input
                        id="courseDescription"
                        name="description"
                        type="textarea"
                        value={course.description}
                        onChange={(e)=> {
                            setCourse({...course, description:e.target.value});
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success" outline onClick={(e) => {
                        handleForm(e);
                    }}>Update Course</Button>
                    <Button color="warning m-3" outline onClick={(e) => {
                        navigate('/viewCourses');
                    }}>Cancel</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default UpdateCourse;