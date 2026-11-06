import React from 'react';
import { Cpu, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SoftwareSkills() {
  const softwareSkills = portfolioData.softwareSkills || [];
  const editingDisciplines = portfolioData.editingDisciplines || [];
  const skillsSection = portfolioData.skillsSection || {};

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>{skillsSection.badge || 'Tools & Expertise'}</span>
          </div>
          <h2 className="section-title">
            {skillsSection.title || <>Software & <span className="gradient-text">Creative Arsenal</span></>}
          </h2>
          <p className="section-subtitle">
            {skillsSection.subtitle || 'Industry standard NLEs, color grading suites, and motion graphics software mastered to perfection.'}
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="skills-grid">
          {softwareSkills.map((item, idx) => (
            <div key={idx} className="software-card">
              <div className="software-header">
                {/* Custom Stylized Software Monogram Badge */}
                <div
                  className="software-badge"
                  style={{
                    backgroundColor: item.badgeColor,
                    color: item.badgeTextColor,
                    borderColor: `${item.badgeTextColor}44`,
                  }}
                >
                  {item.badge}
                </div>
                <span className="software-level">{item.level}</span>
              </div>

              <h3 className="software-name">{item.name}</h3>
              <div className="software-category">{item.category}</div>
              <p className="software-desc">{item.description}</p>

              {/* Proficiency Level Bar */}
              <div className="software-bar-bg">
                <div
                  className="software-bar-fill"
                  style={{
                    width: `${item.percentage}%`,
                    background: `linear-gradient(90deg, #8247FF 0%, ${item.color} 100%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Disciplines Strip */}
        <div className="disciplines-wrapper">
          <h3 className="disciplines-title">
            Core Disciplines & Techniques
          </h3>
          <div className="disciplines-pills">
            {editingDisciplines.map((discipline, idx) => (
              <span key={idx} className="discipline-pill">
                ✦ {discipline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

