import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sliders, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ColorGradingShowcase() {
  const { colorGrading } = portfolioData;
  if (!colorGrading || colorGrading.enabled === false) return null;

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="section color-grading-section" id="color-grading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>{colorGrading.badge || 'Professional Color Suite'}</span>
          </div>
          <h2 className="section-title">
            {colorGrading.title ? (
              colorGrading.title.includes(' ') ? (
                <>
                  {colorGrading.title.substring(0, colorGrading.title.lastIndexOf(' '))} <span className="gradient-text">{colorGrading.title.substring(colorGrading.title.lastIndexOf(' ') + 1)}</span>
                </>
              ) : (
                colorGrading.title
              )
            ) : (
              <>Color Science & <span className="gradient-text">Mood Crafting</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {colorGrading.subtitle || 'Drag the interactive slider below to inspect the transformation from flat LOG footage to high-end cinematic grade.'}
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="comparison-slider-wrapper">
          <div
            className="comparison-slider-container"
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After (Graded) Image Base Layer */}
            <img
              src={colorGrading.afterImage}
              alt="Final Color Graded Shot"
              className="comparison-img graded-img"
              draggable="false"
              decoding="async"
              crossOrigin="anonymous"
            />
            <span className="comparison-label label-after">
              {colorGrading.afterLabel || 'Final Grade'}
            </span>

            {/* Before (LOG) Image Clipped Layer */}
            <div
              className="comparison-clip-layer"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={colorGrading.beforeImage}
                alt="Raw LOG Camera Shot"
                className="comparison-img log-img"
                draggable="false"
                decoding="async"
                crossOrigin="anonymous"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                }}
              />
              <span className="comparison-label label-before">
                {colorGrading.beforeLabel || 'RAW / LOG'}
              </span>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="comparison-handle"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="handle-line" />
              <div className="handle-knob">
                <Sliders size={18} />
              </div>
              <div className="handle-line" />
            </div>
          </div>

          {/* Color Science Specs Bar */}
          {colorGrading.stats && (
            <div className="color-grading-specs">
              {colorGrading.stats.map((item, idx) => (
                <div key={idx} className="spec-item">
                  <span className="spec-label">{item.label}</span>
                  <span className="spec-value">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

