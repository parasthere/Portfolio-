import React from 'react';
import { portfolioData } from '../data/portfolioData';

/**
 * GlobalBackground Component
 * ==============================================================================
 * Displays the COMPLETE background.jpg image across the entire website with
 * full aspect-ratio preservation, zero distortion, zero cut-off, matching dark
 * purple ambient fill for letterbox areas, and a cinematic purple atmospheric
 * lighting stack.
 * ==============================================================================
 */
export default function GlobalBackground() {
  const personalInfo = portfolioData.personalInfo || {};
  const bgImage = personalInfo.globalBackgroundImage || personalInfo.heroBackgroundImage || '/assets/images/background.jpg';
  const bgPosition = personalInfo.globalBackgroundPosition || personalInfo.heroBackgroundPosition || 'center center';

  return (
    <div className="global-bg-container" aria-hidden="true">
      {/* Layer 1: Ambient Blurred Backdrop to fill empty/letterbox spaces with exact matching colors */}
      <div
        className="global-bg-ambient-fill"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundPosition: bgPosition,
        }}
      />

      {/* Layer 2: COMPLETE, Uncropped background.jpg preserving aspect ratio (contain) */}
      <div
        className="global-bg-main-image"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundPosition: bgPosition,
        }}
      />

      {/* Layer 3: Deep Black & Dark Purple Gradient Overlay for text readability */}
      <div className="global-bg-overlay" />

      {/* Layer 4: Rich Atmospheric Purple Tint */}
      <div className="global-bg-purple-tint" />

      {/* Layer 5: Soft Blurred Purple Radial Glow Light Effects */}
      <div className="global-bg-glow global-bg-glow-1" />
      <div className="global-bg-glow global-bg-glow-2" />

      {/* Layer 6: Subtle Perimeter Vignette */}
      <div className="global-bg-vignette" />
    </div>
  );
}

