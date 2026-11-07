import React, { useEffect, useRef, useState } from 'react';
import { X, AlertCircle, ExternalLink } from 'lucide-react';

/**
 * Robust video URL parser:
 * Automatically converts YouTube links (watch, shorts, embed, youtu.be),
 * Vimeo links, and direct MP4 files into ready-to-play formats.
 */
function parseVideoSource(project) {
  if (!project || !project.videoUrl) {
    return { type: 'invalid', url: '' };
  }

  let rawUrl = project.videoUrl.trim().replace(/\\/g, '/');
  if (rawUrl.startsWith('assets/')) {
    rawUrl = '/' + rawUrl;
  }
  const explicitType = project.videoType ? project.videoType.toLowerCase() : '';

  // 1. Direct MP4/WebM video file (local or web)
  if (
    explicitType === 'direct' ||
    rawUrl.endsWith('.mp4') ||
    rawUrl.endsWith('.webm') ||
    rawUrl.startsWith('/assets/videos/') ||
    rawUrl.startsWith('./assets/videos/')
  ) {
    return { type: 'direct', url: rawUrl };
  }

  // 2. YouTube Shorts link: https://www.youtube.com/shorts/VIDEO_ID
  const shortsMatch = rawUrl.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    return {
      type: 'youtube',
      url: `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?autoplay=1&rel=0&modestbranding=1`
    };
  }

  // 3. YouTube standard watch link: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = rawUrl.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) {
    return {
      type: 'youtube',
      url: `https://www.youtube-nocookie.com/embed/${watchMatch[1]}?autoplay=1&rel=0&modestbranding=1`
    };
  }

  // 4. YouTube short link: https://youtu.be/VIDEO_ID
  const ytuMatch = rawUrl.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (ytuMatch && ytuMatch[1]) {
    return {
      type: 'youtube',
      url: `https://www.youtube-nocookie.com/embed/${ytuMatch[1]}?autoplay=1&rel=0&modestbranding=1`
    };
  }

  // 5. Existing YouTube Embed URL
  const embedMatch = rawUrl.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch && embedMatch[1]) {
    const cleanEmbed = `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`;
    return {
      type: 'youtube',
      url: cleanEmbed.includes('?') ? `${cleanEmbed}&autoplay=1` : `${cleanEmbed}?autoplay=1&rel=0`
    };
  }

  // 6. Vimeo URL: https://vimeo.com/VIDEO_ID
  const vimeoMatch = rawUrl.match(/vimeo\.com\/([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'vimeo',
      url: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
    };
  }

  // Fallback to iframe embed or direct
  return {
    type: explicitType || 'iframe',
    url: rawUrl
  };
}

export default function VideoModal({ project, onClose }) {
  const modalRef = useRef(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    // Handle ESC key to dismiss
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isVertical = project.aspectRatio === '9:16';
  const videoSource = parseVideoSource(project);
  const safeTags = Array.isArray(project.tags) ? project.tags : [];

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`modal-content-card ${isVertical ? 'modal-vertical-layout' : ''}`} ref={modalRef}>
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Video Player"
        >
          <X size={20} />
        </button>

        {/* Video Player Display Container */}
        <div className={`modal-player-wrapper ${isVertical ? 'vertical-video' : ''}`}>
          {loadError || !videoSource.url ? (
            <div className="video-error-fallback">
              <AlertCircle size={40} color="#FF6B4A" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ color: '#FFFFFF', marginBottom: '0.35rem' }}>Unable to load video</h4>
              <p style={{ color: '#847C9E', fontSize: '0.85rem', maxWidth: '320px', margin: '0 auto 1rem' }}>
                Please check the video link in <code>src/data/portfolioData.js</code>.
              </p>
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}
                >
                  <ExternalLink size={14} />
                  Open Source Link
                </a>
              )}
            </div>
          ) : videoSource.type === 'direct' ? (
            <video
              src={videoSource.url}
              className="modal-video-element"
              controls
              autoPlay
              playsInline
              crossOrigin="anonymous"
              onError={() => setLoadError(true)}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={videoSource.url}
              title={project.title || 'Video Player'}
              className="modal-iframe-element"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Metadata & Project Details */}
        <div className="modal-info-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
            <span className="category-tag-pill" style={{ position: 'static' }}>
              {project.category || 'Cinematic'}
            </span>

            {project.featured && (
              <span className="featured-tag-pill" style={{ position: 'static', padding: '0.25rem 0.6rem' }}>
                ★ Featured
              </span>
            )}

            {project.duration && (
              <span style={{ fontSize: '0.85rem', color: '#847C9E' }}>
                • {project.duration}
              </span>
            )}
          </div>

          <h3 className="modal-title">{project.title || 'Untitled Project'}</h3>
          <p className="modal-desc">{project.description || 'No description provided.'}</p>

          {safeTags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {safeTags.map((tag, idx) => (
                <span key={idx} className="project-tag-item">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
