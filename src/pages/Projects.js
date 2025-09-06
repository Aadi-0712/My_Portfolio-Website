import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCode, 
  FiEye,
  FiCalendar,
  FiTag,
  FiFilter,
  FiSearch
} from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "WeGpains - E-Learning Platform",
      description: "A cross-platform mobile app built using Flutter & Firebase, providing academic resources to 500+ users with 99.9% uptime. Integrated an e-library, tools, and AI chatbot, reducing manual note distribution by 70% and improving accessibility.",
      image: "/assets/wegpains.jpg",
      category: "Mobile",
      technologies: ["Dart","Flutter", "Firebase"],
      githubUrl: "https://github.com/Aadi-0712/weGPAins-The-Educational-App",
      liveUrl: "https://github.com/Aadi-0712/weGPAins-The-Educational-App",
      date: "2024",
      featured: true
    },
    {
      id: 2,
      title: "LocalLink - Verified Service Marketplace Application",
      description: "A cross-platform app connecting users with 100% admin-verified service providers, eliminating fraud and fake listings. Implemented features like Top Rated This Week, community alerts, and category-based browsing, improving discovery efficiency by 40%. Designed an admin dashboard for verification, ads, and real-time notifications, reducing manual workload by 60% while ensuring 99% uptime with secure authentication and encrypted storage.",
      image: "/assets/LocalLink.png",
      category: "Mobile",
      technologies: ["Dart", "Flutter", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.com",
      date: "Present",
      featured: true
    },
    {
      id: 3,
      title: "Airline Management System",
      description: "A desktop application for flight management, booking, and passenger records, automating admin work flows. Implemented CRUD operations with JDBC, cutting errors by 60% and improving operational efficiency. Applied OOP principles for modular workflows and conducted unit testing to ensure system stability.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      category: "Full Stack",
      technologies: ["Java", "MySql"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      date: "2023",
      featured: false
    },
    {
      id: 4,
      title: "TootSay - Real-Time News Reporting Android App",
      description: "TootSay is a real-time news reporting application developed for Android devices. It allows users to explore up-to-date news from various reliable sources across multiple categories like Business, Sports, Technology, Health, and Entertainment. Built using Android Studio and powered by APIs, the app delivers a fast, responsive, and clean user experience.",
      image: "/assets/TootSay.png",
      category: "Mobile",
      technologies: ["Java", "XML", "Firebase"],
      githubUrl: "https://github.com/Aadi-0712/TootSay-News-Reporting-Application.",
      liveUrl: "https://github.com/Aadi-0712/TootSay-News-Reporting-Application.",
      date: "2024",
      featured: false
    },
    {
      id: 5,
      title: "Resume Builder",
      description: "A Website that allows users to create and customize professional resumes easily. Built with HTML, CSS, JS for a dynamic user interface, real-time preview, and PDF export functionality.",
      image: "/assets/resume_gen.png",
      category: "Mobile",
      technologies: ["React Native", "Expo", "Firebase", "Health Kit"],
      githubUrl: "https://github.com/Aadi-0712/Expense-Tracker",
      liveUrl: "https://github.com/Aadi-0712/Expense-Tracker",
      date: "2023",
      featured: false
    },
    {
      id: 6,
      title: "Volunteer Matching Application",
      description: "A smart machine learning-based web platform that matches volunteers to charitable activities registered by NGOs, ensuring that the most suitable individuals are recommended based on availability, experience, and skills.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Full Stack",
      technologies: ["Python Flask", "Scikit-learn", "SQLite", "HTML5", "CSS3","BootStrap" , "Pandas"],
      githubUrl: "https://github.com/Aadi-0712/Volunteer_Matching_Application",
      liveUrl: "https://github.com/Aadi-0712/Volunteer_Matching_Application",
      date: "2024",
      featured: false
    },
    {
      id: 7,
      title: "My Portfolio Application - V1",
      description: "This is a personal portfolio mobile app built using Flutter to showcase my skills, projects, experience, and contact information in a clean and interactive UI.",
      image: "/assets/portfolio_app.png",
      category: "Full Stack",
      technologies: ["Flutter", "Dart" ],
      githubUrl: "https://github.com/Aadi-0712/My_Portfolio",
      liveUrl: "https://github.com/Aadi-0712/My_Portfolio",
      date: "2025",
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My Projects</h1>
          <p>A showcase of my work, featuring web applications, mobile apps, and innovative solutions</p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          className="featured-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-project card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.githubUrl} className="project-link" aria-label="GitHub">
                        <FiGithub size={20} />
                      </a>
                      <a href={project.liveUrl} className="project-link" aria-label="Live Demo">
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-date">
                      <FiCalendar size={14} />
                      {project.date}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        <FiTag size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Filter and Search */}
        <motion.section
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="filter-controls">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="       Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filters">
              <FiFilter className="filter-icon" />
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* All Projects Grid */}
        <motion.section
          className="all-projects-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>All Projects ({filteredProjects.length})</h2>
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a href={project.githubUrl} className="action-btn">
                        <FiCode size={16} />
                        Code
                      </a>
                      <a href={project.liveUrl} className="action-btn primary">
                        <FiEye size={16} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <FiSearch size={48} />
              <h3>No projects found</h3>
              <p>Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;