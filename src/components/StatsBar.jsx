import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function StatsBar() {
  const fallbackStats = [
    { value: "1+", label: "Years Experience" },
    { value: "45+", label: "Videos Delivered" },
    { value: "65K+", label: "Total Views Generated" },
    { value: "4K 60fps", label: "Master Delivery" }
  ];

  const stats = (portfolioData.personalInfo?.stats && portfolioData.personalInfo.stats.length > 0)
    ? portfolioData.personalInfo.stats
    : fallbackStats;

  return (
    <section className="stats-bar" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

