import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { DeleteCourseDatabaseUtil } from "../Database Service Components/DeleteCourseDatabaseUtil";

function Course({ course, update }) {

    // Delete the course from the database
    const deleteCourse = (courseID) => {
        DeleteCourseDatabaseUtil(courseID, update);
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
                            if (window.confirm("Are you sure you want to delete this Course?")) {
                                deleteCourse(course.id);
                            }
                        }}>Delete
                        </Button>

                        <Button color="warning m-3" outline onClick={() => {
                            navigate('/updateCourse', {
                                state: {
                                    id: course.id,
                                    name: course.name,
                                    description: course.description
                                }
                            });
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