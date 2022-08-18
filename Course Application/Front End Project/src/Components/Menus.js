import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from 'react-router-dom';

/**
 * @compoent
 * `Menus` component provides the all `Menus` appears on the `Home` page in course application.
 */
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