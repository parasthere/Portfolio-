import React from 'react';
import { Film, ArrowUp, Instagram, MessageCircle, Mail, Youtube, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo = {}, contactInfo = {}, footer = {} } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  // Clean WhatsApp number
  const cleanPhone = (contactInfo.whatsappNumber || '').replace(/[^0-9]/g, '');
  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${personalInfo.name || 'there'}, I visited your video editing portfolio!`)}`
    : '#contact';

  // Format Instagram URL
  const instaUrl = contactInfo.instagramUrl || (
    contactInfo.instagramHandle
      ? `https://instagram.com/${contactInfo.instagramHandle.replace('@', '')}`
      : 'https://instagram.com'
  );

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Row: Brand & Quick Social Icons */}
        <div className="footer-top">
          <div>
            <a href="#" className="nav-brand" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
              <div className="nav-logo-icon">
                <Film size={20} />
              </div>
              <span className="nav-brand-text">
                {personalInfo.name || 'Portfolio'}
                <span>.</span>
              </span>
            </a>
            <p style={{ color: '#847C9E', fontSize: '0.9rem', maxWidth: '380px' }}>
              {personalInfo.tagline || 'Crafting stories that move audiences.'}
            </p>
          </div>

          {/* Social Channels */}
          <div className="footer-social-links">
            {cleanPhone && (
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            )}

            {contactInfo.instagramHandle && (
              <a
                href={instaUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
            )}

            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                className="footer-social-icon"
                title="Email"
              >
                <Mail size={18} />
              </a>
            )}

            {contactInfo.youtubeUrl && (
              <a
                href={contactInfo.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
            )}

            {contactInfo.linkedinUrl && (
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {personalInfo.name || 'Video Editor'}. {footer.copyrightText || 'All rights reserved.'}
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to Top"
          >
            <span>{footer.backToTopText || 'Back to Top'}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
