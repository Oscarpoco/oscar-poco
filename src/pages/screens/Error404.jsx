import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';
import '../styles/Error404.css';

function Error404() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="error-page">
      <div className="stars"></div>
      <div className="twinkling"></div>

      <motion.div 
        className="content-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="error-container"
          whileHover={{ scale: 1.02 }}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            y: { 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
        >
          <motion.h1 
            className="error-code"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            4
            <motion.span 
              className="zero"
              animate={{ 
                rotateY: [0, 180, 360],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              0
            </motion.span>
            4
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          >
            <FaExclamationTriangle className="error-icon" />
          </motion.div>

          <motion.div 
            className="message-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="error-message">Page Not Found</h2>
            <p className="error-description">The page you're looking for doesn't exist or has been moved.</p>
          </motion.div>
          
          <motion.button 
            className="home-button"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#3273d9" 
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              animate={{ x: isHovered ? -5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaHome className="button-icon" />
            </motion.div>
            Back to Home
          </motion.button>
        </motion.div>
        
        {/* Animated elements in background */}
        <motion.div 
          className="floating-element element-1"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <FaSearch size={32} />
        </motion.div>
        
        <motion.div 
          className="floating-element element-2"
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <FaExclamationTriangle size={35} />
        </motion.div>
        
        <motion.div 
          className="floating-element element-3"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -25, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <FaHome size={30} />
        </motion.div>
        
        <motion.div 
          className="loader-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaSpinner className="spinner-icon" />
          </motion.div>
          <span>Searching for your page...</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Error404;