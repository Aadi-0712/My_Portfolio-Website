import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;