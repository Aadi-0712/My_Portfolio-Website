import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiGithub, 
  FiLinkedin,
  FiTwitter,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
      'service_9ce9bvx', // replace with your EmailJS service ID
      'template_iural6v', // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      '9rawog2GljkWHeZVo' // replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, (error) => {
      alert('Sorry, there was an error sending your message. Please try again later.');
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'adiofficial0712@gmail.com',
      link: 'mailto:adioffial0712@gmail.com'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+91 9588692349',
      link: 'tel:+919588692349'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Kolhapur, Maharashtra, India',
      link: 'https://www.google.com/maps/place/KITs+College+of+Engineering+Kolhapur+(Empowered+Autonomous)/@16.6541213,74.2599193,848m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc0ffb509926fa9:0x9af43eb75ec2804!8m2!3d16.6541213!4d74.2624942!16s%2Fm%2F06w1z3c?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/Aadi-0712',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/adityayerokar/',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      url: 'https://x.com/AdityaYerokar',
      color: '#1DA1F2'
    }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get In Touch</h1>
          <p>
            I'm always open to discussing new opportunities, creative ideas, 
            or potential collaborations. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-header">
              <FiMessageSquare className="form-icon" />
              <h2>Send me a message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser className="input-icon" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail className="input-icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  <FiMessageSquare className="input-icon" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageSquare className="input-icon" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-info-card card">
              <h3>Let's Connect</h3>
              <p>
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you.
              </p>
              
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    className="contact-method"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="social-link"
                      style={{ '--hover-color': social.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.9 + index * 0.1,
                        type: 'spring',
                        stiffness: 100
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;