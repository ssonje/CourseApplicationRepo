import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from 'react-router-dom';

function Menus() {
    return (
        <ListGroup>
            <Link className="list-group-item list=group-item-action" to="/home">Home</Link>
            <Link className="list-group-item list=group-item-action" to="/addCourse">Add Course</Link>
            <Link className="list-group-item list=group-item-action" to="/viewCourses">View Courses</Link>
        </ListGroup>
    );
}

export default Menus;