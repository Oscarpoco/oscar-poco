import React, { useState, useEffect } from "react";

// STYLING
import '../styles/About.css';
import '../styles/Experience.css';

// ICONS 
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode, MdLocationOn } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// DATABASE
import { experienceData } from "../Database/ExperienceData";

function Experience({darkMode, toggleTheme}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
   
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };


    return (
        <div className={`about-container ${darkMode ? 'dark-theme' : ''}`}>
            {/* Floating Theme Toggle */}
            <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>

            {/* HEADER SECTION */}
            <div className={`about-header ${isScrolled ? 'scrolled' : ''}`}>
                <motion.div 
                    className="header-left"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>My Portfolio</h1>
                    <div className="breadcrumb">
                        <span>Dashboard</span>
                        <IoIosArrowForward className="breadcrumb-icon" />
                        <span className="current-page">Work Experience</span>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="header-actions"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <button className="action-button contact-btn" id="mobileSideBar">
                        <MdInfo className="action-icon" />
                        <span className="mobileSideBar">Contact Info</span>
                    </button>
                    <button className="action-button download-btn primary">
                        <MdDownload className="action-icon" />
                        <span className="mobileSideBar">Download CV</span>
                    </button>
                </motion.div>
            </div>

            <div className="skills-section-wrapper">
                <div className="section-header">
                    <h2 className="section-title">Work Experience</h2>
                </div>
            </div>

            {/* MODERN EXPERIENCE CARDS SECTION */}
            <motion.div 
                className="modern-experience-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <div className="experience-cards">
                    {experienceData.map((exp, index) => (
                        <motion.div 
                            key={exp.id}
                            className={`experience-card ${index === activeIndex ? 'active' : ''}`}
                            variants={itemVariants}
                            onMouseEnter={() => setActiveIndex(index)}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="experience-card-accent"></div>
                            <div className="experience-card-icon">
                                {exp.icon}
                            </div>
                            
                            <div className="experience-card-content">
                                <div className="experience-card-header">
                                    <h3 className="experience-position">{exp.position}</h3>
                                    <span className="experience-company">{exp.company}</span>
                                </div>
                                
                                <div className="experience-card-meta">
                                    <div className="experience-period">
                                        <FaCalendarAlt className="experience-meta-icon" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="experience-location">
                                        <MdLocationOn className="experience-meta-icon" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                                
                                <p className="experience-description">
                                    {exp.description}
                                </p>
                                
                                <div className="experience-tech-container">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="experience-tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Experience;