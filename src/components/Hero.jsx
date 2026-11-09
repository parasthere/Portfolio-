import React, { useState, useEffect } from 'react';
import { Play, Send, Zap, Clapperboard, Instagram, MessageCircle, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo = {}, contactInfo = {} } = portfolioData;

  const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [personalInfo.profileImage]);

  const displayImage = imgError
    ? (personalInfo.fallbackProfileImage || defaultAvatar)
    : (personalInfo.profileImage || defaultAvatar);

  // Clean WhatsApp number (digits only for direct link)
  const cleanPhone = (contactInfo.whatsappNumber || '').replace(/[^0-9]/g, '');
  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${personalInfo.name || 'there'}, I saw your video editor portfolio and would love to collaborate!`)}`
    : '#contact';

  // Format Instagram URL
  const instaUrl = contactInfo.instagramUrl || (
    contactInfo.instagramHandle
      ? `https://instagram.com/${contactInfo.instagramHandle.replace('@', '')}`
      : 'https://instagram.com'
  );

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="hero-content">
            {/* Status Badge */}
            {personalInfo.availabilityBadge && (
              <div className="hero-badge">
                <span className="pulse-beacon" />
                <span>{personalInfo.availabilityBadge}</span>
              </div>
            )}

            <div className="hero-greeting">
              {personalInfo.heroGreeting || 'Welcome to my creative realm'}
            </div>

            {/* Large Name */}
            <h1 className="hero-name" aria-label="Paras | Video Editor & Computer Science Engineer">
              I'm <span className="gradient-text">{personalInfo.name || 'Paras'}</span>
            </h1>

            {/* Title / Profession */}
            <div className="hero-title">
              {personalInfo.title ? (
                personalInfo.title.includes(' & ') ? (
                  <>
                    <span>{personalInfo.title.split(' & ')[0]}</span>
                    <span className="hero-title-separator">&</span>
                    <span>{personalInfo.title.split(' & ')[1]}</span>
                  </>
                ) : (
                  <span>{personalInfo.title}</span>
                )
              ) : (
                <span>VIDEO EDITOR & COMPUTER SCIENCE ENGINEER</span>
              )}
            </div>

            {/* Short Introduction */}
            <p className="hero-intro">
              {personalInfo.heroIntro || 'Transforming raw clips into cinematic visual masterpieces.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-actions">
              <a href="#work" className="btn-primary">
                <Play size={18} fill="currentColor" />
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                <Send size={18} />
                Contact Me
              </a>
            </div>

            {/* Quick Social Badges */}
            <div className="hero-socials">
              {cleanPhone && (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-pill"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle size={16} color="#25D366" />
                  <span>WhatsApp</span>
                </a>
              )}

              {contactInfo.instagramHandle && (
                <a
                  href={instaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-pill"
                  title="Follow on Instagram"
                >
                  <Instagram size={16} color="#E1306C" />
                  <span>{contactInfo.instagramHandle}</span>
                </a>
              )}

              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hero-social-pill"
                  title="Send an Email"
                >
                  <Mail size={16} color="#8247FF" />
                  <span>Email Me</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Personal Photograph with Animated Purple Frame & Floating Badges */}
          <div className="hero-visual-wrapper">
            <div className="hero-portrait-frame">
              <img
                src={displayImage}
                alt={`${personalInfo.name || 'Paras'} - Video Editor & Computer Science Engineer Portfolio`}
                className="hero-portrait-img"
                decoding="async"
                crossOrigin="anonymous"
                onError={() => setImgError(true)}
              />
              <div className="hero-portrait-overlay" />
            </div>

            {/* Floating Motion Graphics Badge #1: Top Left */}
            <div className="floating-badge badge-top-left">
              <div className="floating-badge-icon">
                <Zap size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.725rem', color: '#B4ACCF' }}>Export Quality</div>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>4K 60fps Masters</div>
              </div>
            </div>

            {/* Floating Motion Graphics Badge #2: Bottom Right */}
            <div className="floating-badge badge-bottom-right">
              <div className="floating-badge-icon" style={{ background: '#FF6B4A' }}>
                <Clapperboard size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.725rem', color: '#B4ACCF' }}>Finishing</div>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Cinematic Color Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
