import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If it's the same page, just scroll to top
    if (location.pathname === path && !path.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If it's a hash link on the same page
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // If it's a hash link for a different page, navigate then scroll
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname === route) {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(path);
      }
      return;
    }

    // Otherwise, normal navigation
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-obsidian/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center group py-4">
            {/* Logo removed per user request */}
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="/legacy" onClick={(e) => handleNavClick(e, '/legacy')} className="micro-label hover:text-gold transition-colors">About Us</a>
            <a href="/services" onClick={(e) => handleNavClick(e, '/services')} className="micro-label hover:text-gold transition-colors">Services</a>
            <a href="/portfolio" onClick={(e) => handleNavClick(e, '/portfolio')} className="micro-label hover:text-gold transition-colors">Portfolio</a>
            <a 
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="micro-label border border-white/20 rounded-full px-6 py-3 hover:bg-parchment hover:text-obsidian transition-all duration-500"
            >
              Start Your Project
            </a>
          </div>

          <button 
            className="md:hidden text-parchment"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-6 text-parchment"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              <a href="/" onClick={(e) => handleNavClick(e, '/')} className="micro-label text-lg hover:text-gold transition-colors">Home</a>
              <a href="/legacy" onClick={(e) => handleNavClick(e, '/legacy')} className="micro-label text-lg hover:text-gold transition-colors">About Us</a>
              <a href="/services" onClick={(e) => handleNavClick(e, '/services')} className="micro-label text-lg hover:text-gold transition-colors">Services</a>
              <a href="/portfolio" onClick={(e) => handleNavClick(e, '/portfolio')} className="micro-label text-lg hover:text-gold transition-colors">Portfolio</a>
              <a 
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="micro-label border border-white/20 rounded-full mt-8 px-8 py-4 hover:bg-parchment hover:text-obsidian transition-all duration-500"
              >
                Start Your Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
