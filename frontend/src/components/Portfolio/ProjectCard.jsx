import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Code2, Sparkles, ArrowUpRight, Github, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectCard = ({ project, index, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    // Only trigger modal on desktop (width > 1024px)
    if (window.innerWidth > 1024) {
      onSelect(project);
    }
  };

  return (
    <motion.div
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className={`project-card ${isExpanded ? 'expanded' : ''} ${window.innerWidth > 1024 ? 'modal-trigger' : ''}`}
        onClick={handleCardClick}
      >
        <div className="project-card-content">
          <div className="project-header">
            <div className="project-meta">
              <span className={`project-badge ${project.type === 'mobile' ? 'mobile-badge' : ''}`}>
                {project.clientType}
              </span>
              <span className="project-number">0{index + 1}</span>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-summary">{project.summary}</p>
          </div>

          <div className="project-actions">
            <button 
              className="expand-btn mobile-only"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <span>{isExpanded ? 'Less' : 'Details'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {project.type === 'mobile' ? (
              <>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-live-link github-btn"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </>
            ) : (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-live-link"
              >
                <span>View Live</span>
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="project-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="details-content mobile-only-details">
                <div className="detail-section">
                  <div className="detail-header">
                    <Layers size={16} />
                    <h4>Overview</h4>
                  </div>
                  <p>{project.overview}</p>
                </div>

                {project.type === 'mobile' && project.screenshots && (
                  <div className="detail-section mobile-screenshot-section">
                    <div className="detail-header">
                      <Sparkles size={16} />
                      <h4>App Screenshots</h4>
                    </div>
                    <div className="screenshot-gallery">
                      {project.screenshots.map((s, i) => (
                        <motion.div 
                          key={i} 
                          className="screenshot-card"
                          whileHover={{ y: -5, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {s.url ? (
                            <img src={s.url} alt={s.title} className="screenshot-img" />
                          ) : (
                            <div className="screenshot-placeholder">
                              <ImageIcon size={24} />
                              <span>Image Coming Soon</span>
                            </div>
                          )}
                          <span className="screenshot-title">{s.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="detail-section">
                  <div className="detail-header">
                    <Code2 size={16} />
                    <h4>My Contribution</h4>
                  </div>
                  <p>{project.whatIDid}</p>
                </div>

                <div className="detail-section">
                  <div className="detail-header">
                    <Sparkles size={16} />
                    <h4>Key Features</h4>
                  </div>
                  <ul className="feature-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <div className="detail-header">
                    <Code2 size={16} />
                    <h4>Tech Stack</h4>
                  </div>
                  <div className="tech-stack-grid">
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

                <div className="mobile-actions-footer">
                  {project.githubUrl && (
                    <Button 
                      className="view-live-btn-full github-footer-btn"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      View Source Code
                    </Button>
                  )}
                  {project.type !== 'mobile' && (
                    <Button 
                      className="view-live-btn-full"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      Visit Live Website
                      <ExternalLink size={16} />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
