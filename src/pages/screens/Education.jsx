import React, { useState, useEffect } from "react";

// STYLING
import '../styles/About.css';
import '../styles/Education.css';

// ICONS
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode, MdSchool, MdAccessTime, MdLocationOn } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion'; 

// DATABASE
import { educationData, certificateData } from "../Database/EducationProjects";



function Education({darkMode, toggleTheme}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeEducation, setActiveEducation] = useState(0);

    // Scroll event handler
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
    

    // Animation variants
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
                        <span className="current-page">Academics</span>
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

            {/* EDUCATION SECTION */}
            <motion.div 
                className="education-section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="section-header">
                    <h2 className="section-title">Education & Qualifications</h2>
                </div>

                <div className="education-cards">
                    {educationData.map((edu, index) => (
                        <motion.div 
                            key={edu.id}
                            className={`education-card ${index === activeEducation ? 'active' : ''}`}
                            variants={itemVariants}
                            onMouseEnter={() => setActiveEducation(index)}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="education-accent"></div>
                            <div className="education-icon">
                                {edu.icon}
                            </div>
                            
                            <div className="education-content">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <div className="education-institution">{edu.institution}</div>
                                
                                <div className="education-meta">
                                    <div className="education-period">
                                        <MdAccessTime className="meta-icon" />
                                        <span>{edu.period}</span>
                                    </div>
                                    <div className="education-location">
                                        <MdLocationOn className="meta-icon" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                                
                                <p className="education-description">{edu.description}</p>
                                
                                <div className="education-courses">
                                    <h4 className="courses-title">Key Courses</h4>
                                    <div className="courses-list">
                                        {edu.courses.map((course, i) => (
                                            <span key={i} className="course-tag">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* CERTIFICATES SECTION */}
            <motion.div 
                className="certificates-section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="section-header">
                    <h2 className="section-title">Certifications & Licenses</h2>
                </div>

                <div className="certificates-grid">
                    {certificateData.map((cert, index) => (
                        <motion.div 
                            key={cert.id}
                            className="certificate-card"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="certificate-icon" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
                                {cert.icon}
                            </div>
                            <div className="certificate-content">
                                <h3 className="certificate-title">{cert.title}</h3>
                                <div className="certificate-issuer">{cert.issuer}</div>
                                <div className="certificate-date">{cert.date}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Education;