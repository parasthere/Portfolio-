import React, { useEffect } from 'react';

/**
 * GlobalBackground Component
 * ==============================================================================
 * Manages the clean, premium CSS-based cinematic purple background system.
 * Pure CSS radial gradients & soft ambient purple glow.
 * Zero external background photograph, zero zooming, zero layout shifts.
 * 100% compatible with Swarm Rebuilt and responsive across all viewports.
 * ==============================================================================
 */
export default function GlobalBackground() {
  // Clear any legacy inline background image styling from document.body
  // so the pure CSS background defined in index.css renders cleanly and stably.
  useEffect(() => {
    const body = document.body;
    if (body) {
      body.style.backgroundImage = '';
      body.style.backgroundSize = '';
      body.style.backgroundPosition = '';
      body.style.backgroundRepeat = '';
      body.style.backgroundAttachment = '';
    }
  }, []);

  return (
    <div className="global-bg-container" aria-hidden="true">
      {/* Soft Blurred Ambient Purple Glow Orbs */}
      <div className="global-bg-glow global-bg-glow-1" />
      <div className="global-bg-glow global-bg-glow-2" />
    </div>
  );
}
