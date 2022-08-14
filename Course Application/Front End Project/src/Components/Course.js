import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Course({ course, update }) {

    // Delete the course from the database
    const deleteCourse = (courseID) => {
        axios.delete(`${base_url}/courses/${courseID}`).then(
            (response) => {
                // Successfully post the data to the server
                toast.success("Course deleted successfully!!!");
                update(courseID);
            },
            (error) => {
                // Error while deleting the data
                toast.error("Something went wrong!!!");
            }
        )
    }

    const navigate = useNavigate();

    return (
        <div class="mt-3">
            <Card>
                <CardBody>
                    <CardSubtitle className="fw-bold text-center">
                        {course.name}
                    </CardSubtitle>
                    <CardText className="text-center">
                        {course.description}
                    </CardText>
                    <Container className="text-center">
                        <Button color="danger" outline onClick={() => {
                            deleteCourse(course.id);
                        }}>Delete
                        </Button>

                        <Button color="warning m-3" outline onClick={() => {
                            navigate('/updateCourse', {state: {
                                id: course.id,
                                name: course.name,
                                description: course.description
                            }});
                        }}>
                        Update
                        </Button>
                    </Container>
                </CardBody>
            </Card>
        </div >
    );
}

export default Course;