import React, { useState, useEffect } from "react";
import '../styles/NavigationBar.css';

// ICONS
import { FaCode } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

function NavigationBar({ onOpen, isAuthenticated }) {
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
        <nav className={`Parent-nav ${darkMode ? 'dark-mode' : ''}`}>
            {/* PORTFOLIO NAME */}
            <div className="Portfolio-name">
                <FaCode className="logo-icon" />
                <h2 className="Portfolio-h2">Portfolio</h2>
            </div>

            {/* SEARCH BAR */}

            {isAuthenticated && (
                <div className={`Portfolio-search ${searchFocused ? 'focused' : ''}`}>
                    <CiSearch className="search-icon" />
                    <input
                        className="Search-bar"
                        type="text"
                        placeholder="Search projects, skills, or technologies..."
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                    />
                </div>

            )}

            {/* PORTFOLIO USER */}
            <div className="Portfolio-user">

                {isAuthenticated && (

                    <>
                        {/* NOTIFICATION ICON */}
                        <div className="icon-container">
                            <IoMdNotificationsOutline className="nav-icon" size={28} />
                            {notifications > 0 && (
                                <span className="notification-badge">{notifications}</span>
                            )}
                        </div>

                        {/* REVIEWS/STARS ICON */}
                        <div className="icon-container">
                            <IoSettingsOutline className="nav-icon" size={28} />
                        </div>
                    </>
                )}

                {/* USER INFO */}
                <div className="user-info">
                    <p className="name">Oscar Poco</p>
                    <p className="role">React Developer</p>
                </div>

                <div className="abbreviation" onClick={onOpen}>
                    <p className="abbreviation-name">O</p>
                </div>

                {/* DARK MODE TOGGLE */}
                <div className="Dark-Mode" onClick={toggleDarkMode}>
                    {darkMode ?
                        <MdLightMode className="mode-icon" size={20} /> :
                        <MdDarkMode className="mode-icon" size={20} />
                    }
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;