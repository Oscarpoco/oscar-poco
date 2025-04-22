import React, { useState, useEffect } from "react";

// STYLING
import '../styles/About.css';
import '../styles/Education.css';

// ICONS
import { MdDownload, MdInfo, MdOutlineLightMode, MdOutlineDarkMode, MdSchool, MdAccessTime, MdLocationOn } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FaGraduationCap, FaUniversity, FaAward, FaMedal, FaCertificate } from 'react-icons/fa';
import { BiLaptop, BiCodeAlt } from 'react-icons/bi';
import { motion } from 'framer-motion'; 

function Education() {
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeEducation, setActiveEducation] = useState(0);
    
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

    // Education data
    const educationData = [
        {
            id: 1,
            degree: "Master of Computer Science",
            institution: "Stanford University",
            period: "2018 - 2020",
            location: "Palo Alto, CA",
            description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Network Optimization Techniques. GPA: 3.92/4.0",
            courses: ["Advanced Algorithms", "Machine Learning", "Neural Networks", "Computer Vision", "NLP"],
            icon: <FaGraduationCap />
        },
        {
            id: 2,
            degree: "Bachelor of Science in Computer Engineering",
            institution: "MIT",
            period: "2014 - 2018",
            location: "Cambridge, MA",
            description: "Focused on software development and computer architecture. Participated in multiple hackathons and led programming club. Dean's List all semesters. GPA: 3.87/4.0",
            courses: ["Data Structures", "Operating Systems", "Database Systems", "Web Development", "Software Engineering"],
            icon: <FaUniversity />
        },
        {
            id: 3,
            degree: "High School Diploma",
            institution: "Tech Prep Academy",
            period: "2010 - 2014",
            location: "Boston, MA",
            description: "Advanced placement in mathematics and computer science. Graduated valedictorian with honors. Founded school's first robotics team.",
            courses: ["AP Computer Science", "AP Calculus", "AP Physics", "Digital Electronics", "Robotics"],
            icon: <MdSchool />
        }
    ];

    // Certificate data
    const certificateData = [
        {
            id: 1,
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "March 2023",
            icon: <FaAward />,
            color: "#FF9900"
        },
        {
            id: 2,
            title: "Google Cloud Professional Engineer",
            issuer: "Google",
            date: "November 2022",
            icon: <FaCertificate />,
            color: "#4285F4"
        },
        {
            id: 3,
            title: "Microsoft Azure Developer Associate",
            issuer: "Microsoft",
            date: "July 2022",
            icon: <FaMedal />,
            color: "#0078D4"
        },
        {
            id: 4,
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            date: "May 2022",
            icon: <BiCodeAlt />,
            color: "#FF6F00"
        },
        {
            id: 5,
            title: "Full Stack Web Development",
            issuer: "Udacity",
            date: "January 2022",
            icon: <BiLaptop />,
            color: "#01B3E3"
        },
        {
            id: 6,
            title: "Deep Learning Specialization",
            issuer: "Coursera",
            date: "October 2021",
            icon: <FaAward />,
            color: "#2A73CC"
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
                        <span className="current-page">Academics</span>
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
                    <h2 className="section-title">Professional Certifications</h2>
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