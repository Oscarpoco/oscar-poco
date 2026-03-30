import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import './IntroAnimation.css';

function IntroAnimation({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="intro-container"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="intro-content">
                        <motion.div
                            className="intro-logo-wrapper"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 200, 
                                damping: 20,
                                delay: 0.2 
                            }}
                        >
                            <div className="intro-logo-glow"></div>
                            <FaCode className="intro-logo-icon" />
                        </motion.div>

                        <motion.h1
                            className="intro-name"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Oscar Kyle Poco
                        </motion.h1>

                        <motion.div
                            className="intro-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            <span className="intro-title-text">React Developer</span>
                            <motion.span
                                className="intro-cursor"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                            >
                                |
                            </motion.span>
                        </motion.div>

                        <motion.div
                            className="intro-loader"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
                        >
                            <div className="intro-loader-track">
                                <motion.div
                                    className="intro-loader-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            className="intro-tagline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            Building exceptional digital experiences
                        </motion.p>
                    </div>

                    {/* Background particles */}
                    <div className="intro-particles">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="intro-particle"
                                initial={{ 
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    scale: 0
                                }}
                                animate={{ 
                                    y: [null, Math.random() * -200],
                                    scale: [0, 1, 0],
                                    opacity: [0, 0.6, 0]
                                }}
                                transition={{ 
                                    duration: 2 + Math.random() * 2,
                                    delay: Math.random() * 1,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${50 + Math.random() * 50}%`,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default IntroAnimation;
