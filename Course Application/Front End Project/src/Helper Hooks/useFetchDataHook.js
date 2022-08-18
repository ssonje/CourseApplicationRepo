import { useEffect, useRef } from 'react';

/**
 * @hook
 * `useFetchData` custom hook is used in-order to skip initial twice execution of useEffect and fetch the data from the database.
 * @param {fetchData} fetchData
 * This function is used to fetch the data from the database.
 */
export function useFetchData(fetchData) {

    const isInitialRender = useRef(true);

    useEffect(() => {
        // Skip initial execution of useEffect
        if (isInitialRender.current) {
            // Set isInitialRender.current to false so subsequent changes of dependency array will make useEffect to execute
            isInitialRender.current = false;
            return;
        }

        fetchData();
    }, []);

}