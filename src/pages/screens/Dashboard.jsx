import React from "react";

// STYLING
import '../styles/Dashboard.css'

// COMPONENTS
import About from "./About";


function Dashboard({ activeItem }) {
    const renderContent = () => {
        switch (activeItem) {
            case "Dashboard":
                return <About />;
            case "Skills":
                return <div>Skills Component</div>; 
            case "Experience":
                return <div>Experience Component</div>; 
            case "Education":
                return <div>Education Component</div>;
            case "Featured":
                return <div>Featured Component</div>;
            case "Testimonials":
                return <div>Testimonials Component</div>;
            case "Contact":
                return <div>Contact Component</div>;
            default:
                return <div>Page Not Found</div>;
        }
    };

    return (
        <div className="Parent-dashboard">
            <div className="Child-dashboard">
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;
