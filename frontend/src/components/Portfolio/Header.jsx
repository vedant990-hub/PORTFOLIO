import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`header ${isScrolled ? 'header-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="header-container">
          <a href="#hero" className="header-logo" onClick={(e) => scrollToSection(e, '#hero')}>
            {personalInfo.name.split(' ')[0]}
            <span className="logo-dot">.</span>
          </a>

          <nav className="header-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
