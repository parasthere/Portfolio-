import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Workflow() {
  const workflowSteps = portfolioData.workflowSteps || [];
  const workflowSection = portfolioData.workflowSection || {};
  if (workflowSteps.length === 0) return null;

  return (
    <section className="section workflow-section" id="workflow">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>{workflowSection.badge || 'Editing Pipeline'}</span>
          </div>
          <h2 className="section-title">
            {workflowSection.title || <>From Raw Footage To <span className="gradient-text">Master Cut</span></>}
          </h2>
          <p className="section-subtitle">
            {workflowSection.subtitle || 'A battle-tested 4-step post-production workflow designed for smooth communication, fast turnaround, and zero creative friction.'}
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="workflow-grid">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="workflow-card">
              <div className="workflow-card-header">
                <span className="workflow-step-number">{step.step}</span>
                {idx < workflowSteps.length - 1 && (
                  <span className="workflow-connector-line" />
                )}
              </div>
              <h3 className="workflow-title">{step.title}</h3>
              <p className="workflow-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

