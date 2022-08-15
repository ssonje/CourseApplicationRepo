import React, { useState, Fragment } from "react";
import {AddCourseDatabaseUtil} from '../Database Service Components/AddCourseDatabaseUtil';
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useCourseFormErrors } from "../Helper Hooks/useCourseFormErrors";
import { useDocumentTitle } from '../Helper Hooks/useDocumentTitleHook';
import { useNavigate } from "react-router-dom";
import { FormValidation } from "../Helper Components/FormValidation";

function AddCourse() {
    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect
    useDocumentTitle("Add Course");

    const [course, setCourse] = useState([]);
    const [courseErrors, setCourseErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Form handler function
    const handleForm=(e)=> {
        e.preventDefault();
        setCourseErrors(FormValidation(course));
        setIsSubmit(true);
    };

    const navigate = useNavigate();

    // Add course into the database
    const addCourse = (course) => {
        if (window.confirm("Are you sure you want to add this Course?")) {
            AddCourseDatabaseUtil(navigate, course);
        }
    };

    // Call the useDocumentTitle in-order to Skip initial execution of useEffect and add course
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