import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaUnlockAlt, FaCog, FaFingerprint, FaShieldAlt, FaCircleNotch, FaTimes, FaCheck } from "react-icons/fa";
import "../styles/Biometrics.css";
import LoginForm from "./Login";

function Biometrics({ onClose }) {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  
  // Refs for input focus management
  const inputRefs = useRef([]);
  
  // Correct combination to unlock
  const correctCombination = ["7", "3", "9", "1", "5"];
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle input change and auto-focus to next input
  const handleInputChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    
    if (errorMessage) setErrorMessage("");
    
    // Auto-focus to next input if value is entered
    if (value && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };
  
  // Handle key down for backspace navigation
  const handleKeyDown = (index, e) => {
    // If backspace is pressed and current input is empty, focus previous input
    if (e.key === 'Backspace' && inputs[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  
  const checkCombination = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      const isCorrect = inputs.every((input, index) => input === correctCombination[index]);
      
      if (isCorrect) {
        setIsUnlocked(true);
        setShowSuccessMessage(true);
        setShowLoginForm(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      } else {
        setErrorMessage("Invalid combination. Access denied.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
      
      setIsProcessing(false);
    }, 1500);
  };
  
  const resetLock = () => {
    setInputs(["", "", "", "", ""]);
    setIsUnlocked(false);
    setErrorMessage("");
    // Focus the first input after reset
    setTimeout(() => {
      inputRefs.current[0].focus();
    }, 100);
  };
  
  // Close with animation
  const handleClose = () => {
    // Implement any cleanup before closing
    setTimeout(() => {
      onClose();
    }, 300);
  };
  
  return (
    <motion.div 
      className="biometrics-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    {showLoginForm ? 

    <LoginForm onClose={()=>setShowLoginForm(false)}/>

    :

      <motion.div 
        className="biometrics-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        {/* Background grid pattern */}
        <div className="grid-background"></div>
        
        {/* Glowing border effect */}
        <div className="glowing-border"></div>
        
        {/* Header */}
        <div className="biometrics-header">
          <div className="header-title">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaShieldAlt className="shield-icon" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ADVANCED BIOMETRIC SECURITY
            </motion.h1>
          </div>
          <div className="header-actions">
            <div className="header-status">
              <motion.div 
                className={`circle-notch ${isProcessing ? "rotating" : ""}`}
                animate={isProcessing ? { rotate: 360 } : {}}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <FaCircleNotch />
              </motion.div>
              <motion.div 
                className={`status-indicator ${isUnlocked ? "unlocked" : "locked"}`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  backgroundColor: isUnlocked ? "#4caf50" : "#f44336"
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
            <motion.button 
              className="close-button"
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
          </div>
        </div>
        
        {/* Main content */}
        <motion.div 
          className="biometrics-main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Central gear mechanism */}
          <div className="gear-mechanism">
            {/* Central gear */}
            <motion.div 
              className="central-gear"
              animate={{ rotate: isProcessing ? 360 : 0 }}
              transition={{ duration: 4, repeat: isProcessing ? Infinity : 0, ease: "linear" }}
            >
              <FaCog />
            </motion.div>
            
            {/* Surrounding gears */}
            {[
              { class: "outer-gear top-left", delay: 0 },
              { class: "outer-gear top-right", delay: 0.5 },
              { class: "outer-gear bottom-left", delay: 1 },
              { class: "outer-gear bottom-right", delay: 1.5 }
            ].map((gear, index) => (
              <motion.div 
                key={index}
                className={gear.class}
                animate={{ rotate: isProcessing ? -360 : 0 }}
                transition={{ 
                  duration: 3, 
                  repeat: isProcessing ? Infinity : 0, 
                  ease: "linear",
                  delay: gear.delay
                }}
              >
                <FaCog />
              </motion.div>
            ))}
            
            {/* Fingerprint center */}
            <motion.div 
              className="fingerprint-container"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {isUnlocked ? (
                <motion.div 
                  className="unlock-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <FaUnlockAlt />
                </motion.div>
              ) : (
                <motion.div 
                  className="fingerprint-icon"
                  animate={{ 
                    opacity: [0.6, 1, 0.6], 
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaFingerprint />
                </motion.div>
              )}
            </motion.div>
          </div>
          
          {/* Input fields scattered across the screen */}
          {[
            { class: "input-node node-1", label: "NODE 1", index: 0 },
            { class: "input-node node-2", label: "NODE 2", index: 1 },
            { class: "input-node node-3", label: "NODE 3", index: 2 },
            { class: "input-node node-4", label: "NODE 4", index: 3 },
            { class: "input-node node-5", label: "NODE 5", index: 4 }
          ].map((node, idx) => (
            <motion.div 
              key={idx}
              className={node.class}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="node-label">{node.label}</span>
              <input
                ref={el => inputRefs.current[node.index] = el}
                type="text"
                maxLength="1"
                value={inputs[node.index]}
                onChange={(e) => handleInputChange(node.index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(node.index, e)}
                disabled={isUnlocked || isProcessing}
                className="code-input"
              />
              {inputs[node.index] && (
                <motion.div 
                  className="input-status-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <FaCheck />
                </motion.div>
              )}
            </motion.div>
          ))}
          
          {/* Connecting lines between nodes and center */}
          <svg className="connecting-lines">
            <motion.line 
              x1="50%" y1="50%" 
              x2="20%" y2="15%" 
              stroke="#2363C7" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <motion.line 
              x1="50%" y1="50%" 
              x2="80%" y2="30%" 
              stroke="#2363C7" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: 0.9, duration: 1 }}
            />
            <motion.line 
              x1="50%" y1="50%" 
              x2="15%" y2="70%" 
              stroke="#2363C7" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <motion.line 
              x1="50%" y1="50%" 
              x2="75%" y2="70%" 
              stroke="#2363C7" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: 1.1, duration: 1 }}
            />
            <motion.line 
              x1="50%" y1="50%" 
              x2="50%" y2="85%" 
              stroke="#2363C7" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </svg>
          
          {/* Unlock button */}
          <motion.button
            className={`unlock-button ${isUnlocked ? "unlocked-button" : ""}`}
            onClick={isUnlocked ? resetLock : checkCombination}
            disabled={isProcessing || (!isUnlocked && inputs.some(input => input === ""))}
            whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(35, 99, 199, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {isUnlocked ? (
              <>
                <span>RESET</span>
                <FaLock className="button-icon" />
              </>
            ) : (
              <>
                <span>UNLOCK</span>
                <FaUnlockAlt className="button-icon" />
              </>
            )}
          </motion.button>
          
          {/* Error message */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div 
                className="error-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Success message */}
          <AnimatePresence>
            {showSuccessMessage && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <FaCheck /> Access Granted
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Status display */}
        <motion.div 
          className="biometrics-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="footer-status">
            <span className="status-label">STATUS:</span>
            <motion.span 
              className={`status-value ${isUnlocked ? "status-unlocked" : "status-locked"}`}
              animate={{ 
                color: isUnlocked ? "#4caf50" : "#f44336" 
              }}
              transition={{ duration: 0.3 }}
            >
              {isUnlocked ? "UNLOCKED" : "LOCKED"}
            </motion.span>
          </div>
          <div className="footer-info">
            <div className="security-level">
              <span className="security-label">SECURITY:</span>
              <motion.span 
                className="security-value"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LEVEL 5
              </motion.span>
            </div>
            <motion.div 
              className="time-display"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentTime}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    }

    </motion.div>
  );
}

export default Biometrics;