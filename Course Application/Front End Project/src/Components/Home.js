import React from 'react';
import useDocumentTitle from '../Helper Hooks/useDocumentTitleHook';
import { useNavigate } from "react-router-dom";
import { LINKEDIN_URL, MEDIUM_URL, GITHUB_URL, COMPOSE_MAIL_URL } from '../Constants/socialMediaURLs';

/**
 * @compoent
 * `Home` component provides the UI for Home page in course application.
 */
function Home() {
    // Call the useDocumentTitle to set the document title and Skip initial execution of useEffect
    useDocumentTitle("Home");

    const navigate = useNavigate();

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div>
                <div className="text-center" style={{ background: '#e9ecef', padding: 20 }}>
                    <h2>Home</h2>
                    <p class="lead">All the given courses are developed by Sanket Sonje who is interested in Full Stack Engineering!</p>
                    <p className="mb-0"><em>Sanket is currently working as a Full Stack Engineer.</em></p>
                    <p className="mb-0"><em>He has a one and half years of Industry Experience as of now.</em></p>
                    <p className="mb-0"><em>In the backend, he uses the Spring Boot.</em></p>
                    <p><em>In the frontend, he uses the React JS.</em></p>

                    <a href={LINKEDIN_URL} target="_blank"><i class="fa fa-linkedin-square fa-2x me-3"></i></a>
                    <a href={MEDIUM_URL} target="_blank"><i class="fa fa-medium fa-2x me-3"></i></a>
                    <a href={GITHUB_URL} target="_blank"><i class="fa fa-github fa-2x me-3"></i></a>
                    <a href={COMPOSE_MAIL_URL} target="_blank"><i class="fa fa-envelope fa-2x me-3"></i></a>
                </div>
            </div>
        </div>

    );
}

export default Home;