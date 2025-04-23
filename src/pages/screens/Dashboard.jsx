import React from "react";

// STYLING
import '../styles/Dashboard.css'

// COMPONENTS
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import Contacts from "./Contact";
import Error404 from "./Error404";
import Biometrics from "../popupps/screens/Biometrics";


function Dashboard({ activeItem, isBiometrics, onClose, isAuthenticated }) {


    const renderContent = () => {
        switch (activeItem) {
            case "Dashboard":
                return <About />;
            case "Skills":
                return <Skills/>; 
            case "Experience":
                return <Experience/>; 
            case "Education":
                return <Education/>;
            case "Featured":
                return <Featured isAuthenticated={isAuthenticated}/>;
            case "Testimonials":
                return <Testimonials/>;
            case "Contact":
                return <Contacts/>;
            default:
                return <Error404/>;
        }
    };

    return (
        <div className="Parent-dashboard">

            <div className="Child-dashboard">
                
                {renderContent()}

            <>
            {isBiometrics && <Biometrics onClose={onClose} />}
            </>

            </div>

        </div>
    );
}

export default Dashboard;
