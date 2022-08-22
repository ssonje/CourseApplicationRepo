import { useEffect, useRef } from 'react';

/**
 * @hook
 * `useCourseFormErrors` custom hook is used in-order to skip initial twice execution of useEffect and do some operation for course on the database.
 * @param {courseErrors} courseErrors
 * This is array of strings represents all the course errors.
 * @param {course} course
 * This is the `course` passed to the `operationForCourseOnDatabase` function.
 * @param {isSubmit} isSubmit
 * This boolean is initially false, and becomes true when we submit the form.
 * @param {operationForCourseOnDatabase} operationForCourseOnDatabase
 * This function will be executed if `isSubmit` is true and there are no `courseErrors`.
 */
const useCourseFormErrors = (courseErrors, course, isSubmit, operationForCourseOnDatabase) => {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(courseErrors).length === 0 && isSubmit) {
            operationForCourseOnDatabase(course);
        }
    }, [courseErrors]);

}

export default useCourseFormErrors;
