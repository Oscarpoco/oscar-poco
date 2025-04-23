import React, { useState, useEffect } from "react";

// STYLING
import '../styles/About.css';
import '../styles/Featured.css';
import mobile from '../../assets/mobile.jfif'

// ICONS
import { FaFolderOpen, FaCalendarAlt, FaSmile, FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode, MdAdd, MdRemove } from 'react-icons/md';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

function Featured({ isAuthenticated }) {
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('featured');
    const [activeProject, setActiveProject] = useState(0);

    // Theme toggle handler
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-theme');
    };

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

    // Sample project data
    const projects = {
        featured: [
            {
                id: 1,
                title: "E-Commerce Platform",
                description: "A fully responsive e-commerce platform with advanced filtering, user authentication, and payment integration. Built with React, Node.js, and MongoDB.",
                image: mobile,
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                github: "https://github.com/username/e-commerce",
                liveLink: "https://e-commerce-example.com",
                status: "completed",
                featured: true,
                completionDate: "March 2025"
            },
            {
                id: 2,
                title: "AI-Powered Task Manager",
                description: "Smart task management application that uses machine learning to prioritize tasks based on user behavior and deadlines. Features include voice commands and natural language processing.",
                image: mobile,
                technologies: ["React", "Python", "TensorFlow", "Django"],
                github: "https://github.com/username/ai-task-manager",
                liveLink: "https://ai-tasks.example.com",
                status: "current",
                featured: true,
                completionDate: "In Progress"
            },
            {
                id: 3,
                title: "Virtual Reality Tour App",
                description: "An immersive VR tour application allowing users to explore historical landmarks with interactive elements and educational content.",
                image: mobile,
                technologies: ["Three.js", "WebXR", "React", "Firebase"],
                github: "https://github.com/username/vr-tour",
                liveLink: "https://vr-tour.example.com",
                status: "current",
                featured: true,
                completionDate: "In Progress"
            }
        ],
        current: [
            {
                id: 4,
                title: "AI-Powered Task Manager",
                description: "Smart task management application that uses machine learning to prioritize tasks based on user behavior and deadlines. Features include voice commands and natural language processing.",
                image: mobile,
                technologies: ["React", "Python", "TensorFlow", "Django"],
                github: "https://github.com/username/ai-task-manager",
                liveLink: "https://ai-tasks.example.com",
                status: "current",
                featured: true,
                completionDate: "In Progress"
            },
            {
                id: 5,
                title: "Virtual Reality Tour App",
                description: "An immersive VR tour application allowing users to explore historical landmarks with interactive elements and educational content.",
                image: mobile,
                technologies: ["Three.js", "WebXR", "React", "Firebase"],
                github: "https://github.com/username/vr-tour",
                liveLink: "https://vr-tour.example.com",
                status: "current",
                featured: true,
                completionDate: "In Progress"
            },
            {
                id: 6,
                title: "Climate Change Analytics Dashboard",
                description: "Real-time analytics dashboard visualizing climate data from various sources with predictive modeling capabilities.",
                image: mobile,
                technologies: ["D3.js", "React", "Python", "AWS"],
                github: "https://github.com/username/climate-dashboard",
                liveLink: null,
                status: "current",
                featured: false,
                completionDate: "In Progress"
            }
        ],
        completed: [
            {
                id: 7,
                title: "E-Commerce Platform",
                description: "A fully responsive e-commerce platform with advanced filtering, user authentication, and payment integration. Built with React, Node.js, and MongoDB.",
                image: mobile,
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                github: "https://github.com/username/e-commerce",
                liveLink: "https://e-commerce-example.com",
                status: "completed",
                featured: true,
                completionDate: "March 2025"
            },
            {
                id: 8,
                title: "Blockchain Voting System",
                description: "Secure and transparent voting system built on blockchain technology. Features include identity verification and real-time results.",
                image: mobile,
                technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
                github: "https://github.com/username/blockchain-voting",
                liveLink: "https://blockchain-vote.example.com",
                status: "completed",
                featured: false,
                completionDate: "January 2025"
            },
            {
                id: 9,
                title: "Health & Fitness Tracking App",
                description: "Comprehensive health tracking application with workout plans, nutrition tracking, and progress visualization.",
                image: mobile,
                technologies: ["React Native", "Firebase", "Node.js"],
                github: "https://github.com/username/fitness-app",
                liveLink: "https://fitness-app.example.com",
                status: "completed",
                featured: false,
                completionDate: "November 2024"
            }
        ]
    };

    // Auto-rotate projects
    useEffect(() => {
        const interval = setInterval(() => {
            const currentProjects = projects[activeTab];
            setActiveProject((prev) => (prev + 1) % currentProjects.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [activeTab]);

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

    const tabVariants = {
        inactive: { y: 10, opacity: 0.7 },
        active: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setActiveProject(0);
    };

    const navigateProject = (direction) => {
        const currentProjects = projects[activeTab];
        if (direction === 'next') {
            setActiveProject((prev) => (prev + 1) % currentProjects.length);
        } else {
            setActiveProject((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
        }
    };

    const toggleFeature = (projectId, isFeatured) => {
        // This would typically involve API calls to update the project status
        console.log(`Project ${projectId} ${isFeatured ? 'removed from' : 'added to'} featured`);
    };

    const renderProjectButtons = (project) => {
        if (activeTab === 'featured') {
            return (

                <>
                    {isAuthenticated && (
                        <motion.button
                            className="project-action-button remove-featured"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleFeature(project.id, true)}
                        >
                            <MdRemove className="button-icon" />
                            <span>Remove from Featured</span>
                        </motion.button>
                    )}
                </>
            );
        } else {
            return (
                project.featured ? (
                    <motion.button
                        className="project-action-button featured-badge"
                        disabled
                    >
                        <FaStar className="button-icon" />
                        <span>Featured Project</span>
                    </motion.button>
                ) : (

                    <>
                        {isAuthenticated && (

                            <motion.button
                                className="project-action-button add-featured"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleFeature(project.id, false)}
                            >
                                <MdAdd className="button-icon" />
                                <span>Add to Featured</span>
                            </motion.button>

                        )}
                    </>

                )

            );
        }
    };

    return (
        <div className={`about-container ${darkMode ? 'dark-theme' : ''}`} id="contact-wrapper">
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
                        <span className="current-page">My Projects</span>
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

            {/* PROJECT SHOWCASE SECTION */}
            <motion.div
                className="project-showcase"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Tabs Navigation */}
                <div className="project-tabs">
                    <motion.div
                        className={`tab ${activeTab === 'featured' ? 'active' : ''}`}
                        onClick={() => handleTabChange('featured')}
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === 'featured' ? "active" : "inactive"}
                    >
                        <FaStar className="tab-icon" />
                        <span>Featured</span>
                    </motion.div>
                    <motion.div
                        className={`tab ${activeTab === 'current' ? 'active' : ''}`}
                        onClick={() => handleTabChange('current')}
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === 'current' ? "active" : "inactive"}
                    >
                        <FaFolderOpen className="tab-icon" />
                        <span>Current</span>
                    </motion.div>
                    <motion.div
                        className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
                        onClick={() => handleTabChange('completed')}
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === 'completed' ? "active" : "inactive"}
                    >
                        <FaCalendarAlt className="tab-icon" />
                        <span>Completed</span>
                    </motion.div>
                </div>

                {/* Project Cards */}
                <motion.div
                    className="project-cards-container"
                    variants={itemVariants}
                >
                    <div className="project-navigation">
                        <motion.button
                            className="nav-button prev"
                            onClick={() => navigateProject('prev')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IoIosArrowBack />
                        </motion.button>
                        <motion.button
                            className="nav-button next"
                            onClick={() => navigateProject('next')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IoIosArrowForward />
                        </motion.button>
                    </div>

                    <div className="project-window">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject}
                                className="project-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="project-content">
                                    <div className="project-details">
                                        <h2 className="project-title">{projects[activeTab][activeProject].title}</h2>
                                        <p className="project-description">{projects[activeTab][activeProject].description}</p>

                                        <div className="project-meta">
                                            <div className="completion-date">
                                                <FaCalendarAlt className="meta-icon" />
                                                <span>{projects[activeTab][activeProject].completionDate}</span>
                                            </div>
                                        </div>

                                        <div className="project-technologies">
                                            {projects[activeTab][activeProject].technologies.map((tech, index) => (
                                                <span key={index} className="tech-badge">{tech}</span>
                                            ))}
                                        </div>

                                        <div className="project-actions">
                                            {renderProjectButtons(projects[activeTab][activeProject])}

                                            {projects[activeTab][activeProject].github && (
                                                <motion.a
                                                    href={projects[activeTab][activeProject].github}
                                                    className="project-action-button github"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FaGithub className="button-icon" />
                                                    <span>View Code</span>
                                                </motion.a>
                                            )}

                                            {projects[activeTab][activeProject].liveLink && (
                                                <motion.a
                                                    href={projects[activeTab][activeProject].liveLink}
                                                    className="project-action-button live"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FaExternalLinkAlt className="button-icon" />
                                                    <span>Live Demo</span>
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="project-image-container">
                                        <motion.img
                                            src={projects[activeTab][activeProject].image}
                                            alt={projects[activeTab][activeProject].title}
                                            className="project-image"
                                            initial={{ scale: 1.1, opacity: 0.8 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.7 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="project-indicators">
                        {projects[activeTab].map((_, index) => (
                            <motion.span
                                key={index}
                                className={`indicator ${activeProject === index ? 'active' : ''}`}
                                onClick={() => setActiveProject(index)}
                                whileHover={{ scale: 1.2 }}
                                animate={
                                    activeProject === index
                                        ? { scale: 1.2, backgroundColor: "#2363C7" }
                                        : { scale: 1, backgroundColor: "rgba(0,0,0,0.2)" }
                                }
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* STATISTICS SECTION */}
            <motion.div
                className="project-stats"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="stat-item">
                    <div className="stat-number">
                        {projects.featured.length + projects.current.length + projects.completed.length}
                    </div>
                    <div className="stat-label">Total Projects</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">{projects.featured.length}</div>
                    <div className="stat-label">Featured</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">{projects.current.length}</div>
                    <div className="stat-label">Current</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">{projects.completed.length}</div>
                    <div className="stat-label">Completed</div>
                </div>
            </motion.div>
        </div>
    );
}

export default Featured;