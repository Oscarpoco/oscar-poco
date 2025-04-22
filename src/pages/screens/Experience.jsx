import React, { useState, useEffect } from "react";

// STYLING
import '../styles/About.css';
import '../styles/Experience.css';

// ICONS - Importing individually to avoid errors
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode, MdLocationOn } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { BsBriefcase } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';
import { IoMdTrophy } from 'react-icons/io';
import { motion } from 'framer-motion';

function Experience() {
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-theme');
    };
   
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

    // Experience data with icons
    const experienceData = [
        {
            id: 1,
            company: "TechNova Solutions",
            position: "Senior Frontend Developer",
            period: "Jan 2022 - Present",
            location: "San Francisco, CA",
            description: "Led development of modern web applications using React, TypeScript, and GraphQL. Implemented responsive designs and improved performance for 5+ client projects. Mentored junior developers and established code quality standards.",
            technologies: ["React", "TypeScript", "GraphQL", "Redux", "Tailwind CSS"],
            icon: <HiCode />
        },
        {
            id: 2,
            company: "DataViz Systems",
            position: "Full Stack Developer",
            period: "Mar 2019 - Dec 2021",
            location: "Austin, TX",
            description: "Developed end-to-end solutions for data visualization platforms. Built RESTful APIs using Node.js and Express. Created interactive dashboards with D3.js and React. Collaborated with UX designers to implement user-friendly interfaces.",
            technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "D3.js"],
            icon: <BsBriefcase />
        },
        {
            id: 3,
            company: "InnoTech Startup",
            position: "Frontend Developer",
            period: "Jun 2017 - Feb 2019",
            location: "Seattle, WA",
            description: "Developed and maintained company website and web applications. Implemented responsive designs and ensured cross-browser compatibility. Collaborated with backend developers to integrate frontend with APIs.",
            technologies: ["HTML/CSS", "JavaScript", "jQuery", "SASS", "Webpack"],
            icon: <RiTeamLine />
        },
        {
            id: 4,
            company: "CodeCraft Academy",
            position: "Junior Web Developer",
            period: "Jan 2016 - May 2017",
            location: "Portland, OR",
            description: "Built web applications for clients across various industries. Collaborated with design team to implement user interfaces. Participated in code reviews and improved development processes.",
            technologies: ["HTML/CSS", "JavaScript", "React", "Bootstrap"],
            icon: <IoMdTrophy />
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
                        <span className="current-page">Work Experience</span>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="header-actions"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <button className="action-button contact-btn">
                        <MdInfo className="action-icon" />
                        <span>Contact Info</span>
                    </button>
                    <button className="action-button download-btn primary">
                        <MdDownload className="action-icon" />
                        <span>Download CV</span>
                    </button>
                </motion.div>
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