import React, { useState, useEffect } from "react";

import '../styles/SideBar.css'

// ICONS
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDashboard, MdCode, MdWork, MdSchool } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaProjectDiagram, FaLaptopCode } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

function SideBar({ activeItem, setActiveItem, isAuthenticated, setIsBiometrics }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setIsAnimating(true);
        }, 300);

        return () => clearTimeout(animationTimeout);
    }, []);

    const handleNavClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="Parent-sidebar">
            <div className="sidebar-content">

                {/* ADD PROJECT BUTTON */}

                {isAuthenticated ?

                    <div className="add-project-button">
                        <div className="add-icon-wrapper">
                            <IoAddCircleOutline className="add-icon" />
                        </div>
                        <span>Add New Project</span>
                    </div>
                    :
                    <div className="add-project-button" onClick={()=>setIsBiometrics(true)}>
                        <div className="add-icon-wrapper">
                            <CiLogin className="add-icon" />
                        </div>
                        <span>Login As Admin</span>
                    </div>

                }


                {/* NAVIGATION LINKS */}
                <div className="sidebar-navigation">
                    <div className={`navigation-item ${activeItem === "Dashboard" ? "active" : ""}`}
                        onClick={() => handleNavClick("Dashboard")}>
                        <MdDashboard className="navigation-icon" />
                        <span className="mobileSideBar">Dashboard</span>
                        {activeItem === "Dashboard" && <div className="active-indicator"></div>}
                    </div>
                    <div className={`navigation-item ${activeItem === "Skills" ? "active" : ""}`}
                        onClick={() => handleNavClick("Skills")}>
                        <MdCode className="navigation-icon" />
                        <span className="mobileSideBar">Skills</span>
                        {activeItem === "Skills" && <div className="active-indicator"></div>}
                    </div>
                    <div className={`navigation-item ${activeItem === "Experience" ? "active" : ""}`}
                        onClick={() => handleNavClick("Experience")}>
                        <MdWork className="navigation-icon" />
                        <span className="mobileSideBar">Experience</span>
                        {activeItem === "Experience" && <div className="active-indicator"></div>}
                    </div>
                    <div className={`navigation-item ${activeItem === "Education" ? "active" : ""}`}
                        onClick={() => handleNavClick("Education")}>
                        <MdSchool className="navigation-icon" />
                        <span className="mobileSideBar">Education</span>
                        {activeItem === "Education" && <div className="active-indicator"></div>}
                    </div>
                    <div className={`navigation-item ${activeItem === "Featured" ? "active" : ""}`}
                        onClick={() => handleNavClick("Featured")}>
                        <AiFillStar className="navigation-icon" />
                        <span className="mobileSideBar">Featured</span>
                        {activeItem === "Featured" && <div className="active-indicator"></div>}
                    </div>
                    <div className={`navigation-item ${activeItem === "Testimonials" ? "active" : ""}`}
                        onClick={() => handleNavClick("Testimonials")}>
                        <BsAward className="navigation-icon" />
                        <span className="mobileSideBar">Testimonials</span>
                        {activeItem === "Testimonials" && <div className="active-indicator"></div>}
                    </div>
                    <div className={`navigation-item ${activeItem === "Contact" ? "active" : ""}`}
                        onClick={() => handleNavClick("Contact")}>
                        <BiSolidMessageDetail className="navigation-icon" />
                        <span className="mobileSideBar">Contact</span>
                        {activeItem === "Contact" && <div className="active-indicator"></div>}
                    </div>
                </div>

                {/* PORTFOLIO STATS */}
                <div className="portfolio-stats">
                    <h3 className="stats-heading">PORTFOLIO STATS</h3>
                    <div className="stats-item">
                        <div className="stats-icon-container">
                            <FaLaptopCode className="stats-icon" />
                        </div>
                        <div className="stats-info">
                            <span className="stats-label">CURRENT</span>
                            <div className="stats-progress-bar">
                                <div className={`stats-progress-fill ${isAnimating ? "animate" : ""}`} style={{ width: "40%" }}></div>
                            </div>
                            <div className="stats-details">
                                <span className="stats-text">5 Active Projects</span>
                                <span className="stats-percentage">40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="view-portfolio-button">
                        <span className="mobileSideBar">Full Portfolio</span>192
                        <div className="button-arrow-container">
                            <IoRocketOutline className="button-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;