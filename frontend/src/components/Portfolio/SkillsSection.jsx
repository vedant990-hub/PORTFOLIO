import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/mock';

const MarqueeRow = ({ items, direction = 'left', speed = 50 }) => {
  // Triple the items to ensure seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`marquee-row-wrapper ${direction}`}>
      <div className={`marquee-track ${direction}`}>
        {duplicatedItems.map((skill, index) => (
          <motion.div
            key={`${skill.slug}-${index}`}
            className="skill-badge-premium"
            whileHover={{ 
              y: -5,
              scale: 1.05, 
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <img
              src={skill.customIcon || `https://cdn.simpleicons.org/${skill.slug}`}
              alt={skill.name}
              className="skill-badge-logo"
              onError={(e) => (e.target.style.display = 'none')}
            />
            <span className="skill-badge-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="skills-section-marquee" id="skills">
      <div className="container-full">
        <motion.div
          className="section-header centered-premium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-intro-text">Technologies I use to build production-ready applications</p>
        </motion.div>

        <div className="marquee-container-main">
          {/* Edge Fades */}
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>

          <div className="marquee-rows-stack">
            <MarqueeRow items={skills.row1} direction="left" speed={40} />
            <MarqueeRow items={skills.row2} direction="right" speed={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
