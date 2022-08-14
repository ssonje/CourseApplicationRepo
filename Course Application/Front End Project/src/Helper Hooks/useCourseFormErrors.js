import { useEffect, useRef } from 'react';

export function useCourseFormErrors( courseErrors, course, isSubmit, addCourse ) {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if(isInitialRender.current){
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        if (Object.keys(courseErrors).length === 0 && isSubmit) {
            addCourse(course);
        }
    }, [courseErrors]);

}