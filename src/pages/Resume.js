import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiBook, FiX, FiStar } from 'react-icons/fi';
import './Resume.css';

const Resume = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = 'Resume_1SEP.pdf';
    link.download = 'My-Resume.pdf';
    link.click();
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const experiences = [
    {
      title: "Internship Trainee",
      company: "Compilers Technologies Pvt. Ltd.",
      period: "July 2022- Sep 2022",
      description: "Worked on Advanced Java and Web Development projects, contributing to both front-end and back-end development tasks.",
      achievements: ["Built a desktop application for flight management", "Improved operational efficiency by 60%"]
    },
    {
      title: "Workshop on IoT & Its Applications – Trainee",
      company: "MDBelectrosoft pvt. Ltd.",
      period: "March 2023",
      description: "Gained exposure to IoT architecture, sensors, microcontrollers, communication protocols, and real-world use cases.",
      achievements: ["Developed a mini IoT-based project during the workshop", "Collaborated with peers to understand and implement IoT solutions."]
    }
  ];

  const education = [
    {
      degree: "Btech in Computer Science And Business Systems",
      institution: "KIT's College of Engineering",
      period: "2023 - 2026",
      gpa: "8.0/10"
    },
    {
      degree: "Diploma In Computer Engineering",
      institution: "Government Polytechnic Amravati",
      period: "2020 - 2023",
      gpa: "84.68%"
    },
    {
      degree: "Secondary Education",
      institution: "Late Rajiv Gandhi High School",
      period: "2020",
      gpa: "94.80%"
    }
  ];

  const achievements = [
    {
      title: "Consolation Prize At Regional-Level Project Competition",
      description: "Recognized for developing weGPAins, an innovative academic assistance platform.",
      year: "June 2023"
    },
    {
      title: "100 Days Badge - Leetcode",
      description: "Solved More than 200 problems on LeetCode in 100 days",
      year: "2024-25"
    },
    {
      title: "4 Star In Java - Hackerrank",
      description: "Achieved 4-star rating in Java on HackerRank by solving 100+ problems",
      year: "2024"
    },
  ];
  
  const certifications = [
    {
      title: "AWS Certified Developer Associate",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&h=350&fit=crop&crop=center"
    },
    {
      title: "Google Cloud Professional Developer",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=350&fit=crop&crop=center"
    },
    {
      title: "React Native Certification",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=350&fit=crop&crop=center"
    },
    {
      title: "Scrum Master Certification",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop&crop=center"
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [modalOpen]);

  return (
    <div className="resume">
      <div className="resume-container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Resume</h1>
          <p>My professional journey and achievements</p>
          <button className="btn btn--primary" onClick={handleDownloadCV}>
            <FiDownload size={20} />
            Download PDF
          </button>
        </motion.div>

        <div className="resume-content">
          {/* Experience Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-header">
              <FiBriefcase className="section-icon" />
              <h2>Work Experience</h2>
            </div>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h3>{exp.title}</h3>
                      <span className="period">{exp.period}</span>
                    </div>
                    <h4>{exp.company}</h4>
                    <p>{exp.description}</p>
                    <ul className="achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="section-header">
              <FiBook className="section-icon" />
              <h2>Education</h2>
            </div>
            
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <div className="education-details">
                    <span className="period">{edu.period}</span>
                    <span className="gpa">{edu.gpa}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header">
              <FiStar className="section-icon" />
              <h2>Achievements</h2>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="achievement-header">
                    <FiStar className="achievement-icon" />
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header">
              <FiAward className="section-icon" />
              <h2>Certifications</h2>
              <p className="section-subtitle">Click on any certificate to view</p>
            </div>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-item card clickable"
                  onClick={() => openModal(cert)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiAward className="cert-icon" />
                  <span>{cert.title}</span>
                  <div className="click-indicator">
                    <span>Click to view</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {modalOpen && selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.4, 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cert-modal-close" 
                onClick={closeModal}
                aria-label="Close certificate modal"
              >
                <FiX size={24} />
              </button>
              
              <div className="cert-modal-header">
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
              </div>
              
              <div className="cert-modal-image-container">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="cert-modal-image"
                  loading="lazy"
                />
              </div>
              
              <div className="cert-modal-footer">
                <p>Certificate earned through comprehensive training and examination</p>
                <button className="btn btn--secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;
