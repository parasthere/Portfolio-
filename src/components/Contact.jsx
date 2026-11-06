import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Send, MapPin, Clock, CheckCircle, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contactInfo = {}, personalInfo = {} } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Reels / Shorts',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Clean WhatsApp phone number for link
  const cleanPhone = (contactInfo.whatsappNumber || '').replace(/[^0-9]/g, '');
  const recipientName = personalInfo.name || 'there';
  const defaultWaText = encodeURIComponent(`Hi ${recipientName}, I saw your video editor portfolio and would love to discuss a project!`);
  const waDirectUrl = cleanPhone ? `https://wa.me/${cleanPhone}?text=${defaultWaText}` : '#contact';

  // Format Instagram URL
  const instaUrl = contactInfo.instagramUrl || (
    contactInfo.instagramHandle
      ? `https://instagram.com/${contactInfo.instagramHandle.replace('@', '')}`
      : 'https://instagram.com'
  );

  const handleCopy = (text, fieldName, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare email draft
    const subject = encodeURIComponent(`Video Editing Inquiry from ${formData.name} [${formData.projectType}]`);
    const body = encodeURIComponent(
      `Hi ${recipientName},\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget || 'Open'}\n\nProject Details:\n${formData.message}\n`
    );

    // Open mail client after short pause
    setTimeout(() => {
      if (contactInfo.email) {
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      }
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactSection = portfolioData.contactSection || {};

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>{contactSection.badge || 'Get In Touch'}</span>
          </div>
          <h2 className="section-title">
            {contactSection.title || <>Let's Make Something <span className="gradient-text">Legendary</span></>}
          </h2>
          <p className="section-subtitle">
            {contactSection.subtitle || 'Have a project in mind, need a YouTube editor, or want viral vertical content? Send a message below or connect directly on WhatsApp.'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-info-col">
            {/* WhatsApp Card */}
            {cleanPhone && (
              <a
                href={waDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}>
                  <MessageCircle size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-card-label">Fastest Reply • WhatsApp</div>
                  <div className="contact-card-value">{contactInfo.whatsappDisplay || cleanPhone}</div>
                </div>
                <span className="contact-card-badge">Instant Chat</span>
              </a>
            )}

            {/* Email Card */}
            {contactInfo.email && (
              <div className="contact-card" style={{ cursor: 'pointer' }} onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
                <div className="contact-card-icon">
                  <Mail size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-card-label">Direct Email</div>
                  <div className="contact-card-value">{contactInfo.email}</div>
                </div>
                <button
                  className="copy-btn-pill"
                  onClick={(e) => handleCopy(contactInfo.email, 'email', e)}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check size={14} color="#34D399" />
                      <span style={{ color: '#34D399' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Instagram Card */}
            {contactInfo.instagramHandle && (
              <a
                href={instaUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon" style={{ background: 'rgba(225, 48, 108, 0.15)', color: '#E1306C' }}>
                  <Instagram size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-card-label">Instagram Portfolio & DMs</div>
                  <div className="contact-card-value">{contactInfo.instagramHandle}</div>
                </div>
                <span className="contact-card-badge">Follow</span>
              </a>
            )}

            {/* Location & Timezone info */}
            {contactInfo.location && (
              <div className="contact-card" style={{ cursor: 'default' }}>
                <div className="contact-card-icon">
                  <MapPin size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value" style={{ wordBreak: 'break-word' }}>
                    {contactInfo.location}
                  </div>
                </div>
              </div>
            )}

            {contactInfo.responseTime && (
              <div className="contact-card" style={{ cursor: 'default' }}>
                <div className="contact-card-icon">
                  <Clock size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="contact-card-label">Response Guarantee</div>
                  <div className="contact-card-value">{contactInfo.responseTime}</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-box">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
              Send Project Brief
            </h3>

            {submitted ? (
              <div className="form-status success">
                <CheckCircle size={28} style={{ margin: '0 auto 0.5rem', display: 'block' }} />
                <strong>Thank you! Your message is ready.</strong>
                <p style={{ marginTop: '0.4rem', fontSize: '0.85rem' }}>
                  Opening your email application... You can also message me directly on WhatsApp for an immediate response!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '1rem', width: '100%' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name / Brand</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera or Apex Media"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-project-type">Project Type</label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="Reels & Shorts">Reels & Shorts</option>
                      <option value="YouTube Long-Form">YouTube Long-Form</option>
                      <option value="Cinematic Commercial">Cinematic Commercial</option>
                      <option value="Color Grading Only">Color Grading Only</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Full Retainer / Ongoing">Full Retainer / Ongoing</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-budget">Estimated Budget</label>
                    <input
                      id="contact-budget"
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. $500 - $2,000"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Project Details / Vision</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your footage, turnaround time, video references, or vision..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  Send Inquiry Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
