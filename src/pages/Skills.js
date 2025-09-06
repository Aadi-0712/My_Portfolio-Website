import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiLayers, 
  FiSmartphone, 
  FiTool, 
  FiGitBranch,
  FiCloud,
  FiMonitor
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FiMonitor />,
      color: "var(--color-bg-1)",
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript/TypeScript", level: 75 },
        { name: "HTML5 & CSS3", level: 95 },
        // { name: "Vue.js", level: 80 },
        // { name: "Sass/SCSS", level: 85 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      icon: <FiDatabase />,
      color: "var(--color-bg-3)",
      skills: [
        { name: "Java", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "PHP", level: 75 }
      ]
    },
    {
      category: "Mobile Development",
      icon: <FiSmartphone />,
      color: "var(--color-bg-5)",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Java", level: 85 },
        // { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 75 }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: <FiCloud />,
      color: "var(--color-bg-8)",
      skills: [
        { name: "Google Cloud Firebase", level: 85 },
        { name: "AWS", level: 75 },
        // { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 75 },
        // { name: "Nginx", level: 75 }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: <FiCode /> },
    { name: "Git & GitHub", icon: <FiGitBranch /> },
    { name: "Figma", icon: <FiLayers /> },
    { name: "Postman", icon: <FiTool /> },
    { name: "Webpack", icon: <FiTool /> },
    { name: "Jest", icon: <FiCode /> },
    { name: "Storybook", icon: <FiLayers /> },
    { name: "Firebase", icon: <FiCloud /> }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Skills & Expertise</h1>
          <p>Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="skills-content">
          {/* Skills Categories */}
          <motion.section
            className="skills-categories"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="skill-category card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                style={{ background: category.color }}
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + index * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.8 + index * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Tools & Technologies */}
          <motion.section
            className="tools-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>Tools & Technologies</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="tool-item card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="tool-icon">{tool.icon}</div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Additional Info */}
          <motion.section
            className="additional-info"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="info-grid">
              <div className="info-card card">
                <h3>Learning Philosophy</h3>
                <p>
                  I believe in continuous learning and staying updated with the latest 
                  technologies. Always exploring new frameworks and best practices to 
                  deliver cutting-edge solutions.
                </p>
              </div>
              <div className="info-card card">
                <h3>Collaboration</h3>
                <p>
                  Strong believer in agile methodologies and team collaboration. 
                  Experience working with cross-functional teams and mentoring 
                  junior developers.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Skills;