import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Home.css';
// import lavanya from '../assets/profile.jpg';

const Home = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = 'Resume_1SEP.pdf';
    link.download = 'My-Resume.pdf';
    link.click();
  };

  return (
    <div className="home">
      <div className="home-container">
        <motion.div 
          className="home-split-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Profile Image */}
          <motion.div 
            className="home-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src= "/assets/profile.jpg"
                  alt="Profile" 
                  className="profile-image"
                />
                <div className="profile-image-overlay"></div>
              </div>
              <div className="profile-decorations">
                <div className="decoration-circle decoration-1"></div>
                <div className="decoration-circle decoration-2"></div>
                <div className="decoration-circle decoration-3"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="home-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="home-content">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h1 className="home-name">
                  <span className="name-primary">Aditya</span>
                  <span className="name-accent">Yerokar</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="home-description">
                  Aspiring Software Engineer with strong foundations in DSA and software development. Skilled in Flutter, Spring Boot, Firebase, and cloud-based app design. Passionate about solving complex problems and building innovative, user-centric solutions.
                </p>
              </motion.div>

              <motion.div 
                className="home-actions"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <button className="btn btn-primary" onClick={handleDownloadCV}>
                  <FiDownload size={20} />
                  Download CV
                </button>
                <div className="social-links">
                  <a href="https://github.com/Aadi-0712" className="social-link" aria-label="GitHub">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/adityayerokar/" className="social-link" aria-label="LinkedIn">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHvpJBCdtJfTrkGwHVcrFcgtbBlvMClrlMspQKnjWtsPXJHcfjbmZgblbmcHFZVCbKzdqkB" className="social-link" aria-label="Email">
                    <FiMail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="home-stats"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">13+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">19+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;