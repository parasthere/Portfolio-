import React from 'react';
import { Film, Smartphone, Youtube, Sliders, Sparkles, Flame, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Icon Map helper
const iconMap = {
  Film: Film,
  Smartphone: Smartphone,
  Youtube: Youtube,
  Sliders: Sliders,
  Sparkles: Sparkles,
  Flame: Flame,
};

export default function Services() {
  const services = portfolioData.services || [];
  const servicesSection = portfolioData.servicesSection || {};

  return (
    <section className="section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>{servicesSection.badge || 'Post-Production Services'}</span>
          </div>
          <h2 className="section-title">
            {servicesSection.title || <>What I Bring To The <span className="gradient-text">Edit Suite</span></>}
          </h2>
          <p className="section-subtitle">
            {servicesSection.subtitle || 'Specialized solutions customized to turn views into subscribers, brand loyalty, and sales.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Film;

            return (
              <div key={service.id} className="service-card">
                {/* Glowing Icon Box */}
                <div className="service-icon-box">
                  <IconComponent size={26} />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                {/* Deliverables Checklist */}
                {Array.isArray(service.deliverables) && service.deliverables.length > 0 && (
                  <ul className="service-deliverables">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="service-item">
                        <Check size={16} className="service-item-bullet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

