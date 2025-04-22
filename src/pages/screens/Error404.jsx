import React from 'react';
import '../styles/Error404.css'; 

function Error404() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
}

export default Error404;
