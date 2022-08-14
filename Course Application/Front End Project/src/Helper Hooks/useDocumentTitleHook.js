import { useEffect, useRef } from 'react';

export function useDocumentTitle( pageTitle ) {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if(isInitialRender.current){
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        document.title = pageTitle;
    }, []);

}