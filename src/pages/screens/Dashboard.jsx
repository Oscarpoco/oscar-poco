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


function Dashboard({ activeItem, isAuthenticated, darkMode, toggleTheme, handleDownload }) {


    const renderContent = () => {
        switch (activeItem) {
            case "Dashboard":
                return <About toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            case "Skills":
                return <Skills toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            case "Experience":
                return <Experience toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            case "Education":
                return <Education toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            case "Featured":
                return <Featured isAuthenticated={isAuthenticated} toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            case "Testimonials":
                return <Testimonials toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            case "Contact":
                return <Contacts toggleTheme={toggleTheme} darkMode={darkMode} handleDownload={handleDownload} />;
            default:
                return <Error404 />;
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
