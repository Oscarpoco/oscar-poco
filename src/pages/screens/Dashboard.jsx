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


function Dashboard({ activeItem, isBiometrics, onClose, isAuthenticated, darkMode, toggleTheme }) {


    const renderContent = () => {
        switch (activeItem) {
            case "Dashboard":
                return <About toggleTheme={toggleTheme} darkMode={darkMode}/>;
            case "Skills":
                return <Skills toggleTheme={toggleTheme} darkMode={darkMode}/>; 
            case "Experience":
                return <Experience toggleTheme={toggleTheme} darkMode={darkMode}/>; 
            case "Education":
                return <Education toggleTheme={toggleTheme} darkMode={darkMode}/>;
            case "Featured":
                return <Featured isAuthenticated={isAuthenticated} toggleTheme={toggleTheme} darkMode={darkMode}/>;
            case "Testimonials":
                return <Testimonials toggleTheme={toggleTheme} darkMode={darkMode}/>;
            case "Contact":
                return <Contacts toggleTheme={toggleTheme} darkMode={darkMode}/>;
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
