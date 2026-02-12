import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Code2, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
        <div className="project-card-content">
          <div className="project-header">
            <div className="project-meta">
              <span className="project-badge">{project.clientType}</span>
              <span className="project-number">0{index + 1}</span>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-summary">{project.summary}</p>
          </div>

          <div className="project-actions">
            <button 
              className="expand-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <span>{isExpanded ? 'Less' : 'Details'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-link"
            >
              <span>View Live</span>
              <ArrowUpRight size={16} />
            </a>
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
              <div className="details-content">
                <div className="detail-section">
                  <div className="detail-header">
                    <Layers size={16} />
                    <h4>Overview</h4>
                  </div>
                  <p>{project.overview}</p>
                </div>

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

                <Button 
                  className="view-live-btn-full"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  Visit Live Website
                  <ExternalLink size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
