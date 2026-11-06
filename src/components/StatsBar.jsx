import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function StatsBar() {
  const stats = portfolioData.personalInfo?.stats || [];

  if (!stats || stats.length === 0) return null;

  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

