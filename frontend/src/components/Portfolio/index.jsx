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
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
