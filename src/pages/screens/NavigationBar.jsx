import React, { useState } from "react";

// STYLING
import '../styles/NavigationBar.css';

// ICONS
import { FaCode } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

// COMPONENT
function NavigationBar() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(3);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Here you would implement your dark mode logic
        document.body.classList.toggle('dark-theme');
    };

    return (
        <div className={`Parent-nav ${darkMode ? 'dark-mode' : ''}`}>

            {/* PORTFOLIO NAME */}
            <div className="Portfolio-name">
                <FaCode className="Portfolio-h2" />
                <h2 className="Portfolio-h2">Portfolio</h2>
            </div>

            {/* SEARCH BAR */}
            <div className="Portfolio-search">
                <CiSearch className="search-icon" />
                <input type="text" className="Search-bar" placeholder="Search Project..." />
            </div>

            {/* PORTFOLIO USER */}
            <div className="Portfolio-user">
                {/* NOTIFICATION ICON */}
                <div className="icon-container">
                    <IoMdNotificationsOutline size={28} className="nav-icon" />
                    {notifications > 0 && <span className="notification-badge">{notifications}</span>}
                </div>
                
                {/* REVIEWS/STARS ICON */}
                <div className="icon-container">
                    <AiOutlineStar size={28} className="nav-icon" />
                </div>
                
                {/* USER INFO */}
                <p className="name">Oscar Poco</p>
                <div className="abbreviation">
                    <p className="abbreviation-name">O</p>
                </div>
                
                {/* DARK MODE TOGGLE */}
                <div className="Dark-Mode" onClick={toggleDarkMode}>
                    {darkMode ? 
                        <MdLightMode size={22} className="mode-icon" /> : 
                        <MdDarkMode size={22} className="mode-icon" />
                    }
                </div>
            </div>

        </div>
    )
}

export default NavigationBar;