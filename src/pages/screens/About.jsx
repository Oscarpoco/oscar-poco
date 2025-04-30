import React, { useState, useEffect } from "react";

// STYLING
import '../styles/About.css';
import oscar from '../../assets/user.png'
import qrcode from '../../assets/qrcode.jfif'

// ICONS
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion'; 

// DATABASE
import { portfolioStats, featuredProjects } from "../Database/AboutData";

function About({darkMode, toggleTheme}) {
    const [activeTab, setActiveTab] = useState('featured');
    const [isScrolled, setIsScrolled] = useState(false);

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
                        <span className="current-page">About Me</span>
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

            {/* PROFILE SECTION */}
            <motion.div 
                className="profile-section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="profile-content">
                    <motion.div 
                        className="profile-image-container"
                        variants={itemVariants}
                    >
                        <div className="profile-image">
                            <img 
                                src={oscar}
                                alt="Oscar Kyle Poco"
                                className="avatar-image"
                            />
                            <div className="profile-badge">
                                <span>5+</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <motion.a 
                                href="#" 
                                className="social-link"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="social-link"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a 
                                href="#"
                                className="social-link"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTwitter />
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="profile-info"
                        variants={itemVariants}
                    >
                        <div className="name-badge">
                            <h1 className="profile-name">Oscar Kyle Poco</h1>
                            <span className="status-badge">Available for hire</span>
                        </div>
                        <h2 className="profile-title">Junior React Developer</h2>
                        <p className="profile-description">
                            Passionate developer with a knack for creating elegant, responsive and user-friendly 
                            web applications. Specialized in React.js ecosystem with 1+ years of professional 
                            experience building scalable solutions for various industries.
                        </p>
                        <div className="skills-container">
                            <span className="skill-tag">React.js</span>
                            <span className="skill-tag">TypeScript</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Redux</span>
                            <span className="skill-tag">React Native</span>
                            <span className="skill-tag">UI/UX</span>
                        </div>
                        <div className="profile-stats">
                            <motion.div 
                                className="Stat-item"
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <span className="stat-value">100%</span>
                                <span className="Stat-label">Client Satisfaction</span>
                            </motion.div>
                            <motion.div 
                                className="Stat-item"
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <span className="stat-value">3+</span>
                                <span className="Stat-label">Projects Completed</span>
                            </motion.div>
                            <motion.div 
                                className="Stat-item"
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <span className="stat-value">1+</span>
                                <span className="Stat-label">Years of Experience</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                className="qrcode"
                variants={itemVariants}
                >
                    <img src={qrcode} alt="qrcode" className="qrcode-image"/> 
                    <motion.h3 className="scan-tag">SCAN TO DOWNLOAD RESUME</motion.h3>

                </motion.div>

            </motion.div>

            {/* QUICK ACCESS SECTION */}
            <motion.div 
                className="quick-access-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <div className="section-header">
                    <h2>PORTFOLIO OVERVIEW</h2>
                </div>

                <div className="folders-container">
                    {portfolioStats.map((stat, index) => (
                        <motion.div 
                            className="folder-card" 
                            key={stat.id}
                            style={{ background: stat.gradient }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" 
                            }}
                        >
                            <div className="folder-header">
                                <div className="folder-title">{stat.title}</div>
                                <motion.div 
                                    className="folder-icon-container"
                                    whileHover={{ rotate: 15 }}
                                >
                                    {stat.icon}
                                </motion.div>
                            </div>
                            <div className="folder-count">
                                <motion.span 
                                    className="count-number"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + (0.2 * index), duration: 0.5 }}
                                >
                                    {stat.count}
                                </motion.span>
                                {stat.subtitle && <span className="count-subtitle">{stat.subtitle}</span>}
                            </div>
                            <div className="folder-users">
                                {stat.users.map((user, userIndex) => (
                                    <motion.div 
                                        className="user-avatar" 
                                        key={userIndex}
                                        style={{ 
                                            backgroundImage: `url(${user})`,
                                            zIndex: stat.users.length - userIndex
                                        }}
                                        initial={{ x: 20 * userIndex, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 + (0.1 * userIndex), duration: 0.3 }}
                                    />
                                ))}
                                <motion.div 
                                    className="user-avatar more"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, duration: 0.3 }}
                                >
                                    <span>+{stat.id + 3}</span>
                                </motion.div>
                            </div>
                            <div className="folder-metadata">
                                <span className="last-modified">Updated: Today</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* PROJECTS SECTION */}
            <motion.div 
                className="projects-section"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <div className="projects-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'featured' ? 'active' : ''}`}
                        onClick={() => setActiveTab('featured')}
                    >
                        Featured Projects
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'recent' ? 'active' : ''}`}
                        onClick={() => setActiveTab('recent')}
                    >
                        Recent Work
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        All Projects
                    </button>
                </div>

                <div className="projects-table">
                    <div className="projects-table-header">
                        <div className="table-column name-column">NAME</div>
                        <div className="table-column owner-column">CATEGORY</div>
                        <div className="table-column modified-column">LAST MODIFIED</div>
                        <div className="table-column size-column" id="type-column">TYPE</div>
                        <div className="table-column actions-column"></div>
                    </div>
                    
                    <motion.div 
                        className="projects-table-body"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {featuredProjects.map((project, index) => (
                            <motion.div 
                                className="project-row" 
                                key={project.id}
                                variants={itemVariants}
                                custom={index}
                                whileHover={{ 
                                    scale: 1.01,
                                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(35, 99, 199, 0.03)',
                                }}
                            >
                                <div className="table-column name-column">
                                    <div className="project-name">
                                        <motion.img 
                                            src={project.icon} 
                                            alt={project.name} 
                                            className="project-icon"
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                        />
                                        <span>{project.name}</span>
                                    </div>
                                </div>
                                <div className="table-column owner-column">{project.category}</div>
                                <div className="table-column modified-column">{project.lastModified}</div>
                                <div className="table-column size-column">
                                    <span className="project-type">{project.type}</span>
                                </div>
                                <div className="table-column actions-column">
                                    <motion.button 
                                        className="view-project-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;