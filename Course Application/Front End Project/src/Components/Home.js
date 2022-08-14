import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from '../Helpers/useDocumentTitleHook';

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

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ssonje99@gmail.com" target="_blank"><i class="fa fa-envelope fa-2x me-3"></i></a>
                    <a href="https://www.linkedin.com/in/sanket-sonje-6801a3158/" target="_blank"><i class="fa fa-linkedin-square fa-2x me-3"></i></a> 
                    <a href="https://medium.com/@sanket.sonje99" target="_blank"><i class="fa fa-medium fa-2x me-3"></i></a>                  
                </div>
            </div>
        </div>

    );
}

export default Home;