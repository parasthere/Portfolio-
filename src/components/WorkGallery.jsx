import React, { useState } from 'react';
import { Play, Sparkles, Filter, VideoOff } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import VideoModal from './VideoModal';

// Safe default cinematic fallback thumbnail if an image fails to load
const DEFAULT_FALLBACK_THUMB = "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80";

export default function WorkGallery() {
  const { categories = [], projects = [], workSection = {} } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  // Safe category filtering logic
  const filteredProjects = projects.filter((project) => {
    if (!project) return false;
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return Boolean(project.featured);
    return (project.category || '').toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section className="section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>{workSection.badge || 'Featured Portfolio'}</span>
          </div>
          <h2 className="section-title">
            {workSection.title || <>Crafted In The <span className="gradient-text">Cut</span></>}
          </h2>
          <p className="section-subtitle">
            {workSection.subtitle || 'A curated showcase of high-impact visual projects, cinematic grades, and viral social edits.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Featured' ? '★ Featured' : cat}
            </button>
          ))}
        </div>

        {/* Responsive Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const isVertical = project.aspectRatio === '9:16';
              const safeTags = Array.isArray(project.tags) ? project.tags : [];
              const safeThumbnail = project.thumbnail || DEFAULT_FALLBACK_THUMB;
              const isHovered = hoveredProjectId === project.id;
              const cleanVideoUrl = (project.videoUrl || '').replace(/\\/g, '/');
              const normalizedVideoSrc = cleanVideoUrl.startsWith('/') || cleanVideoUrl.startsWith('http') || !cleanVideoUrl ? cleanVideoUrl : `/${cleanVideoUrl}`;
              const isDirectVideo = (project.videoType === 'direct' || cleanVideoUrl.endsWith('.mp4') || cleanVideoUrl.endsWith('.webm') || cleanVideoUrl.includes('/assets/videos/')) && Boolean(cleanVideoUrl);

              return (
                <div
                  key={project.id || `project-${index}`}
                  className={`project-card ${isVertical ? 'aspect-vertical' : ''}`}
                  onClick={() => setSelectedVideo(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Play ${project.title || 'video'}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedVideo(project);
                    }
                  }}
                >
                  {/* Thumbnail Media Container */}
                  <div className="project-media-box">
                    <img
                      src={safeThumbnail}
                      alt={project.title || 'Video project thumbnail'}
                      className="project-thumb"
                      loading="lazy"
                      decoding="async"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        if (e.currentTarget.src !== DEFAULT_FALLBACK_THUMB) {
                          e.currentTarget.src = DEFAULT_FALLBACK_THUMB;
                        }
                      }}
                    />

                    {/* On-Hover Live Video Preview for Direct MP4 Clips */}
                    {isHovered && isDirectVideo && (
                      <video
                        src={normalizedVideoSrc}
                        muted
                        loop
                        autoPlay
                        playsInline
                        crossOrigin="anonymous"
                        className="project-hover-video"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}

                    {/* Vignette Overlay with Centered Play Button */}
                    <div className="project-thumb-overlay">
                      <div className="play-btn-circle">
                        <Play size={22} fill="currentColor" />
                      </div>
                    </div>

                    {/* Category Tag (Top Left) */}
                    <div className="category-tag-pill">
                      {project.category || 'Cinematic'}
                    </div>

                    {/* Featured Pill (Top Right if featured) */}
                    {project.featured && (
                      <div className="featured-tag-pill">
                        ★ Featured
                      </div>
                    )}

                    {/* Duration Badge (Bottom Right) */}
                    {project.duration && (
                      <div className="duration-tag-pill">
                        {project.duration}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="project-details">
                    <h3 className="project-title">{project.title || 'Untitled Edit'}</h3>
                    <p className="project-desc">{project.description || 'No description provided.'}</p>

                    {/* Tags */}
                    {safeTags.length > 0 && (
                      <div className="project-tags">
                        {safeTags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="project-tag-item">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="gallery-empty-state">
              <VideoOff size={44} style={{ color: '#8247FF', margin: '0 auto 1rem', display: 'block' }} />
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>No projects found in "{activeCategory}"</h3>
              <p style={{ color: '#847C9E' }}>
                Try selecting "All" or add more projects to this category in <code>src/data/portfolioData.js</code>.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="btn-secondary"
                style={{ marginTop: '1.25rem' }}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <VideoModal
          project={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
