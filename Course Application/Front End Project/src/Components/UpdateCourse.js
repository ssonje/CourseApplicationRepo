import React, { useState, Fragment } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useCourseFormErrors } from "../Helper Hooks/useCourseFormErrors";
import { useNavigate, useLocation } from "react-router-dom";
import { useDocumentTitle } from '../Helper Hooks/useDocumentTitleHook';
import { UpdateCourseDatabaseUtil } from "../Database Service Components/UpdateCourseDatabaseUtil";
import { FormValidation } from "../Helper Components/FormValidation";

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

    // Update Form Validation
    const [courseErrors, setCourseErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Form handler function
    const handleForm = (e) => {
        e.preventDefault();
        setCourseErrors(FormValidation(course));
        setIsSubmit(true);
    };

    // Update course into the database
    const updateCourse = (course) => {
        if (window.confirm("Are you sure you want to update this Course?")) {
            UpdateCourseDatabaseUtil(course);
            navigate('/viewCourses');
        }
    }

    // Call the useCourseFormErrors in-order to Skip initial execution of useEffect and update course
    useCourseFormErrors(courseErrors, course, isSubmit, updateCourse);

    return (
        <Fragment>
            <h1 className="text-center my-3">Update Course Details from here</h1>
            <Form>
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
                    <Label style={{color:'red', marginTop:5}}>{courseErrors.name}</Label>
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
                    <Label style={{color:'red', marginTop:5}}>{courseErrors.description}</Label>
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