import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Cloud, Wrench } from 'lucide-react';
import { skills } from '../../data/mock';

const skillCategories = [
  { key: 'frontend', title: 'Frontend', icon: Code2 },
  { key: 'backend', title: 'Backend', icon: Server },
  { key: 'cms', title: 'CMS & E-Commerce', icon: Globe },
  { key: 'hosting', title: 'Hosting & Deployment', icon: Cloud },
  { key: 'tools', title: 'Developer Tools', icon: Wrench }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I use to build production-ready websites</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const categorySkills = skills[category.key];
            
            return (
              <motion.div
                key={category.key}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <ul className="skill-list">
                  {categorySkills.map((skill, i) => (
                    <motion.li 
                      key={i}
                      className="skill-item"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className="skill-dot" />
                      <span className="skill-name">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
