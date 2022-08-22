import React, { useState, Fragment } from "react";
import useCourseFormErrors from "../Helper Hooks/useCourseFormErrors";
import useDocumentTitle from '../Helper Hooks/useDocumentTitleHook';
import { AddCourseDatabaseUtil } from '../Database Service Components/AddCourseDatabaseUtil';
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FormValidation } from "../Helper Components/FormValidation";

/**
 * @compoent
 * `AddCourse` component provides the UI and functionality for adding user into the database.
 */
function AddCourse() {
    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect.
    useDocumentTitle("Add Course");

    const [course, setCourse] = useState([]);
    const [courseErrors, setCourseErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Form handler function is called when we click on the `Add Course` button.
    const handleForm = (e) => {
        e.preventDefault();
        setCourseErrors(FormValidation(course));
        setIsSubmit(true);
    };

    const navigate = useNavigate();

    // Add course into the database.
    const addCourse = (course) => {
        if (window.confirm("Are you sure you want to add this Course?")) {
            AddCourseDatabaseUtil(navigate, course);
        }
    };

    // Call the useCourseFormErrors in-order to skip initial execution of useEffect and add course to the database.
    useCourseFormErrors(courseErrors, course, isSubmit, addCourse);

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details here</h1>
            <Form>
                <FormGroup>
                    <Label for="courseName">
                        Course Name
                    </Label>
                    <Input
                        id="courseName"
                        name="name"
                        placeholder="Enter course name here"
                        type="text"
                        onChange={(e) => {
                            setCourse({ ...course, name: e.target.value });
                        }}
                    />
                    <Label style={{ color: 'red', marginTop: 5 }}>{courseErrors.name}</Label>
                </FormGroup>

                <FormGroup>
                    <Label for="courseDescription">
                        Course Description
                    </Label>
                    <Input
                        id="courseDescription"
                        name="description"
                        placeholder="Enter course description here"
                        type="textarea"
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                    />
                    <Label style={{ color: 'red', marginTop: 5 }}>{courseErrors.description}</Label>
                </FormGroup>

                <Container className="text-center">
                    <Button type="button" color="success" outline onClick={(e) => {
                        handleForm(e);
                    }}>Add Course</Button>
                    <Button color="warning m-3" outline type="reset" onClick={() => {
                        setCourse({ ...course, name: null, description: null });
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