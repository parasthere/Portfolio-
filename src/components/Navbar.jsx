import React, { useState, useEffect } from 'react';
import { Film, Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#" className="nav-brand">
            <div className="nav-logo-icon">
              <Film size={20} />
            </div>
            <span className="nav-brand-text">
              {portfolioData.personalInfo.name}
              <span>.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Call To Action */}
          <a href="#contact" className="btn-primary nav-cta-btn">
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <aside className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>
            {portfolioData.personalInfo.name}
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          className="btn-primary"
          style={{ marginTop: '1.5rem', width: '100%' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Send size={16} />
          Get in Touch
        </a>
      </aside>
    </>
  );
}

