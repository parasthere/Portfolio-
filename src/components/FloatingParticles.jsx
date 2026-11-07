import React, { useMemo } from 'react';

/**
 * FloatingParticles Component
 * ==============================================================================
 * High-performance, lightweight floating purple particles built with hardware-
 * accelerated CSS keyframes. Zero canvas overhead, 100% compatible with Chrome
 * extensions (such as Swarm Rebuild) without triggering full-screen canvas
 * screen-captures or interfering with DOM tree analysis.
 * ==============================================================================
 */
export default function FloatingParticles() {
  // Generate a deterministic set of ambient floating particles
  const particles = useMemo(() => {
    const colors = [
      'rgba(130, 71, 255, 0.45)',
      'rgba(155, 107, 255, 0.4)',
      'rgba(214, 199, 255, 0.3)',
      'rgba(88, 30, 199, 0.35)',
    ];

    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 4.17 + (i % 3) * 2.5) % 96 + 2}%`,
      top: `${(i * 7.83 + (i % 5) * 4.2) % 94 + 3}%`,
      size: `${2 + (i % 4) * 1.2}px`,
      color: colors[i % colors.length],
      duration: `${14 + (i % 7) * 2.5}s`,
      delay: `${-(i % 8) * 1.8}s`,
      driftX: `${(i % 2 === 0 ? 1 : -1) * (18 + (i % 5) * 8)}px`,
      driftY: `${-30 - (i % 6) * 12}px`,
    }));
  }, []);

  return (
    <div
      className="floating-particles-wrap"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot"
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            pointerEvents: 'none',
            animation: `ambientParticleDrift ${p.duration} ease-in-out infinite alternate ${p.delay}`,
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform, opacity',
            '--drift-x': p.driftX,
            '--drift-y': p.driftY,
          }}
        />
      ))}
    </div>
  );
}
