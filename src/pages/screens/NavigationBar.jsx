import React, { useState, useEffect } from "react";

import '../styles/NavigationBar.css'

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
    const [searchFocused, setSearchFocused] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Here you would implement your dark mode logic
        document.body.classList.toggle('dark-theme');
    };

    // Animation for notification badge
    useEffect(() => {
        const timer = setTimeout(() => {
            const badge = document.querySelector('.notification-badge');
            if (badge) badge.classList.add('pulse');
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`Parent-nav ${darkMode ? 'dark-mode' : ''}`}>

            {/* PORTFOLIO NAME */}
            <div className="Portfolio-name">
                <FaCode className="logo-icon" />
                <h2 className="Portfolio-h2">Portfolio</h2>
            </div>

            {/* SEARCH BAR */}
            <div className={`Portfolio-search ${searchFocused ? 'focused' : ''}`}>
                <CiSearch className="search-icon" />
                <input 
                    type="text" 
                    className="Search-bar" 
                    placeholder="Search Project..." 
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                />
            </div>

            {/* PORTFOLIO USER */}
            <div className="Portfolio-user">
                {/* NOTIFICATION ICON */}
                <div className="icon-container">
                    <IoMdNotificationsOutline size={24} className="nav-icon" />
                    {notifications > 0 && <span className="notification-badge">{notifications}</span>}
                </div>
                
                {/* REVIEWS/STARS ICON */}
                <div className="icon-container">
                    <AiOutlineStar size={24} className="nav-icon" />
                </div>
                
                {/* USER INFO */}
                <div className="user-info">
                    <p className="name">Oscar Poco</p>
                    <p className="role">Developer</p>
                </div>
                
                <div className="abbreviation">
                    <p className="abbreviation-name">O</p>
                </div>
                
                {/* DARK MODE TOGGLE */}
                <div className="Dark-Mode" onClick={toggleDarkMode}>
                    {darkMode ? 
                        <MdLightMode size={20} className="mode-icon" /> : 
                        <MdDarkMode size={20} className="mode-icon" />
                    }
                </div>
            </div>

        </div>
    )
}

export default NavigationBar;
