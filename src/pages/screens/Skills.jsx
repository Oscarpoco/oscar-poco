import React, { useState, useEffect } from "react";
// STYLING
import '../styles/About.css';
import '../styles/Skills.css';

// ICONS - Import one by one to avoid errors
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
// Different icon set - importing one by one
import { FiMonitor } from 'react-icons/fi';
import { FiSmartphone } from 'react-icons/fi';
import { FiGrid } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FiLayers } from 'react-icons/fi';
import { FiCoffee } from 'react-icons/fi';
import { FiPenTool } from 'react-icons/fi';
import { FiDatabase } from 'react-icons/fi';

function Skills({ darkMode, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false);

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
                staggerChildren: 0.1
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
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Skills data with different icons
    const skillsData = [
        {
            id: 1,
            title: "UI/UX Design",
            icon: <FiMonitor />,
            description: "Creating intuitive interfaces and exceptional user experiences."
        },
        {
            id: 2,
            title: "Application Design",
            icon: <FiSmartphone />,
            description: "Designing functional and beautiful application interfaces."
        },
        {
            id: 3,
            title: "Website Design",
            icon: <FiGrid />,
            description: "Building responsive and engaging website layouts."
        },
        {
            id: 4,
            title: "UI Design",
            icon: <FiEdit2 />,
            description: "Crafting attractive user interface components and systems."
        },
        {
            id: 5,
            title: "Design System",
            icon: <FiSettings />,
            description: "Creating cohesive design languages and component libraries."
        },
        {
            id: 6,
            title: "Wireframing",
            icon: <FiLayers />,
            description: "Building structural blueprints for digital products."
        },
        {
            id: 7,
            title: "Brand Identity",
            icon: <FiCoffee />,
            description: "Developing cohesive visual identity systems for brands."
        },
        {
            id: 8,
            title: "Illustration",
            icon: <FiPenTool />,
            description: "Creating custom illustrations and visual assets."
        },
        {
            id: 9,
            title: "Web App Design",
            icon: <FiDatabase />,
            description: "Designing responsive web applications with modern features."
        }
    ];

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
                        <span className="current-page">Skills</span>
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
                    <h2 className="section-title">Professional Skills</h2>
                </div>
            </div>

            {/* SKILLS CARDS SECTION */}
            <motion.div
                className="skills-card-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {skillsData.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{
                            y: -5,
                            boxShadow: "0 8px 20px rgba(11, 206, 90, 0.15)",
                            transition: { duration: 0.3 }
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.1 }
                        }}
                    >
                        <div className="green-line"></div>
                        <div className="skill-icon-container">
                            {skill.icon}
                        </div>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                        <a href="#" className="learn-more">
                            Learn more <IoIosArrowForward className="arrow-icon" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;