import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, GraduationCap, MessageCircle, Phone } from 'lucide-react';
import { Card } from '../ui/card';
import Header from './Header';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ProjectCard from './ProjectCard';
import { personalInfo, aboutText, education, projects } from '../../data/mock';

const textRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const Portfolio = () => {
  // Split about text into paragraphs
  const aboutParagraphs = aboutText.split('\n\n');

  return (
    <div className="portfolio">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Introduction</span>
            <h2 className="section-title">About Me</h2>
          </motion.div>
          <div className="about-content">
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="about-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Background</span>
            <h2 className="section-title">Education</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="education-card">
              <div className="education-icon">
                <GraduationCap size={28} />
              </div>
              <div className="education-content">
                <h3 className="education-institution">{education.institution}</h3>
                <p className="education-degree">{education.degree}</p>
                <div className="education-meta">
                  <span className="education-duration">{education.duration}</span>
                  <span className="education-divider">•</span>
                  <span className="education-status">{education.status}</span>
                </div>
                <p className="education-platform">Learning through <strong>{education.platform}</strong></p>
                <p className="education-description">{education.description}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Real websites built for real businesses — live and in production</p>
          </motion.div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Have a project in mind? I'd love to hear about it.</p>
          </motion.div>
          <motion.div
            className="contact-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href={`mailto:${personalInfo.email}`}
              className="contact-card"
            >
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">Send a message</span>
              </div>
            </a>
            <a 
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon whatsapp">
                <MessageCircle size={22} />
              </div>
              <div className="contact-info">
                <span className="contact-label">WhatsApp</span>
                <span className="contact-value">Chat directly</span>
              </div>
            </a>
            <a 
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <Github size={22} />
              </div>
              <div className="contact-info">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">View my code</span>
              </div>
            </a>
            <a 
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <Linkedin size={22} />
              </div>
              <div className="contact-info">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Connect professionally</span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-copyright">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
            <p className="footer-tagline">Building websites that work.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
