import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, Code2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="project-modal-overlay-wrapper">
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="project-modal-container">
            <motion.div
              className="project-modal-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                <X size={24} />
              </button>

              <div className="modal-header">
                <div className="modal-meta">
                  <span className={`project-badge ${project.type === 'mobile' ? 'mobile-badge' : ''}`}>
                    {project.clientType}
                  </span>
                </div>
                <h2 className="modal-title">{project.name}</h2>
                <p className="modal-summary">{project.summary}</p>
              </div>

              <div className="modal-body scroll-area">
                <div className="modal-section">
                  <div className="detail-header">
                    <Layers size={18} />
                    <h4>Overview</h4>
                  </div>
                  <p className="modal-text">{project.overview}</p>
                </div>

                {project.type === 'mobile' && project.screenshots && (
                  <div className="modal-section">
                    <div className="detail-header">
                      <Sparkles size={18} />
                      <h4>App Screenshots</h4>
                    </div>
                    <div className="screenshot-gallery modal-gallery">
                      {project.screenshots.map((s, i) => (
                        <div key={i} className="screenshot-card">
                          {s.url ? (
                            <img src={s.url} alt={s.title} className="screenshot-img" />
                          ) : (
                            <div className="screenshot-placeholder">
                              <ImageIcon size={24} />
                              <span>Image Coming Soon</span>
                            </div>
                          )}
                          <span className="screenshot-title">{s.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-section">
                  <div className="detail-header">
                    <Code2 size={18} />
                    <h4>My Contribution</h4>
                  </div>
                  <p className="modal-text">{project.whatIDid}</p>
                </div>

                <div className="modal-grid-info">
                  <div className="modal-section">
                    <div className="detail-header">
                      <Sparkles size={18} />
                      <h4>Key Features</h4>
                    </div>
                    <ul className="feature-list modal-features">
                      {project.features.map((feature, i) => (
                        <li key={i}>
                          <span className="feature-dot" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <div className="detail-header">
                      <Code2 size={18} />
                      <h4>Tech Stack</h4>
                    </div>
                    <div className="tech-stack-grid modal-tech">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          <img 
                            src={`https://cdn.simpleicons.org/${tech.slug}`} 
                            alt="" 
                            className="tech-tag-icon"
                            onError={(e) => (e.target.style.display = 'none')}
                          />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {project.type !== 'mobile' && project.url && (
                  <Button 
                    className="modal-footer-btn live"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    View Live Website
                    <ExternalLink size={18} />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button 
                    className="modal-footer-btn github"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={18} />
                    GitHub Repository
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
