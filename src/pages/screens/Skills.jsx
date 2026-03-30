import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

// STYLING
import '../styles/Skills.css';

// ICONS 
import { MdDownload, MdOutlineLightMode, MdOutlineDarkMode, MdCode } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';

// DATABASE
import { skillsData } from "../Database/SkillsData";

// Animated skill card component with scroll reveal
function AnimatedSkillCard({ skill, index, darkMode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={`skill-card-premium ${isHovered ? 'hovered' : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            {/* Animated accent line */}
            <motion.div
                className="accent-line"
                initial={{ height: "30px" }}
                animate={{ height: isHovered ? "60px" : "30px" }}
                transition={{ duration: 0.3 }}
            />

            {/* Glow effect */}
            <motion.div
                className="card-glow"
                animate={{
                    opacity: isHovered ? 0.5 : 0,
                    scale: isHovered ? 1.2 : 0.8
                }}
                transition={{ duration: 0.4 }}
            />

            <div className="skill-card-content">
                <motion.div
                    className="skill-icon-wrapper"
                    animate={{
                        rotate: isHovered ? 10 : 0,
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {skill.icon}
                </motion.div>

                <div className="skill-info">
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-description">{skill.description}</p>
                </div>

                <motion.a
                    href={skill.link}
                    className="skill-link"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span>Learn more</span>
                    <FaArrowRight className="arrow-icon" />
                </motion.a>
            </div>
        </motion.div>
    );
}

// Stats card component
function StatsCard({ icon, value, label, color, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="stats-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <div className="stats-icon" style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)`, color }}>
                {icon}
            </div>
            <div className="stats-info">
                <span className="stats-value">{value}</span>
                <span className="stats-label">{label}</span>
            </div>
        </motion.div>
    );
}

function Skills({ darkMode, toggleTheme, handleDownload }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            const target = e.target;
            if (target.scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const container = document.querySelector('.Child-dashboard');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Count skills by category for stats
    const totalSkills = skillsData?.length || 0;

    return (
        <div className={`skills-container ${darkMode ? 'dark-theme' : ''}`}>
            {/* Floating Theme Toggle */}
            <motion.button
                className="theme-toggle"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
            >
                {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </motion.button>

            {/* HEADER SECTION */}
            <motion.div
                ref={headerRef}
                className={`skills-header ${isScrolled ? 'scrolled' : ''}`}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="header-left">
                    <h1 className="page-title">Technical Skills</h1>
                    <div className="breadcrumb">
                        <span>Portfolio</span>
                        <IoIosArrowForward className="breadcrumb-icon" />
                        <span className="current-page">Skills</span>
                    </div>
                </div>

                <motion.div
                    className="header-actions"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.button
                        className="download-btn"
                        onClick={handleDownload}
                        whileHover={{ scale: 1.02, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <MdDownload className="btn-icon" />
                        <span className="btn-text">Download CV</span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* STATS SECTION */}
            <div className="skills-stats">
                <StatsCard
                    icon={<MdCode />}
                    value={`${totalSkills}+`}
                    label="Technologies"
                    color="#2363C7"
                    delay={0.1}
                />
                <StatsCard
                    icon={<FaStar />}
                    value="1+"
                    label="Years Experience"
                    color="#f59e0b"
                    delay={0.2}
                />
                <StatsCard
                    icon={<BsLightningChargeFill />}
                    value="100%"
                    label="Commitment"
                    color="#10b981"
                    delay={0.3}
                />
            </div>

            {/* SECTION HEADER */}
            <motion.div
                className="section-intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <h2 className="section-title">
                    <span className="title-accent" />
                    Professional Skillset
                </h2>
                <p className="section-subtitle">
                    A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications.
                </p>
            </motion.div>

            {/* SKILLS CARDS GRID */}
            <div className="skills-grid">
                {skillsData && skillsData.map((skill, index) => (
                    <AnimatedSkillCard
                        key={skill.id}
                        skill={skill}
                        index={index}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
