import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo = {} } = portfolioData;
  const about = personalInfo.about || {};
  const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [personalInfo.profileImage]);

  const displayImage = imgError
    ? (personalInfo.fallbackProfileImage || defaultAvatar)
    : (personalInfo.profileImage || defaultAvatar);

  const paragraphs = Array.isArray(about.paragraphs) ? about.paragraphs : [];
  const pillars = Array.isArray(about.pillars) ? about.pillars : [];

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            {about.heading || <>The Vision Behind The <span className="gradient-text">Timeline</span></>}
          </h2>
          <p className="section-subtitle">
            {about.subheading || 'Passion meets precision in every frame I cut.'}
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Left: Photograph with Film-Strip Accent */}
          <div className="about-photo-wrapper">
            <div className="film-strip-accent" />
            <div className="about-photo-card">
              <img
                src={displayImage}
                alt={`${personalInfo.name || 'Video Editor'} - About`}
                className="about-photo-img"
                onError={() => setImgError(true)}
              />
            </div>
          </div>

          {/* Right: Narrative & Experience Pillars */}
          <div className="about-content-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Core Pillars of Craft */}
            {pillars.length > 0 && (
              <div className="about-pillars-grid">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="about-pillar-card">
                    <div className="pillar-title">
                      <span className="pillar-title-dot" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
