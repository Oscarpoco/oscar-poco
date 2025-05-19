import React, { useState, useEffect } from "react";
import '../styles/NavigationBar.css';

// ICONS
import { FaCode } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// IMAGE
import oscar from './../../assets/avatar4.jfif'

function NavigationBar({ onOpen, darkMode, toggleTheme }) {

    return (
        <nav className={`Parent-nav ${darkMode ? 'dark-mode' : ''}`}>
            {/* PORTFOLIO NAME */}
            <div className="Portfolio-name">
                <FaCode className="logo-icon" />
                <h2 className="Portfolio-h2">Portfolio</h2>
                <h2 className="Portfolio-h2" id="mobile-device-only">OSCAR POCO</h2>
            </div>

            {/* PORTFOLIO USER */}
            <div className="Portfolio-user">

                {/* USER INFO */}
                <div className="user-info">
                    <p className="name">Oscar Poco</p>
                    <p className="role">React Developer</p>
                </div>

                <div className="abbreviation" onClick={onOpen}>
                    <div className="nav-avatar" >
                        <img src={oscar} alt="Oscar Poco" className="nav-image" />
                    </div>
                </div>

                {/* DARK MODE TOGGLE */}
                <div className="Dark-Mode" onClick={toggleTheme}>
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