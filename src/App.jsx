import React, { useEffect } from 'react';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import FloatingParticles from './components/FloatingParticles';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import WorkGallery from './components/WorkGallery';
import ColorGradingShowcase from './components/ColorGradingShowcase';
import Services from './components/Services';
import SoftwareSkills from './components/SoftwareSkills';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  // Keep browser tab title automatically synchronized with portfolioData
  useEffect(() => {
    const name = portfolioData.personalInfo?.name || 'Paras';
    const title = portfolioData.personalInfo?.title || 'Video Editor & Software Engineer';
    document.title = `${name} | ${title}`;
  }, []);
  return (
    <div className="portfolio-app">
      {/* Global Cinematic Purple Background System (Displays complete background.jpg across all sections) */}
      <GlobalBackground />

      {/* Subtle Interactive Floating Purple Particles */}
      <FloatingParticles />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Home */}
        <Hero />

        {/* 2. Key Stats Counter Strip */}
        <StatsBar />

        {/* 3. About Me */}
        <About />

        {/* 4. My Work / Video Gallery (With Live Hover Preview & Video Modal) */}
        <WorkGallery />

        {/* 5. Interactive Color Grading Before / After Comparison Slider */}
        <ColorGradingShowcase />

        {/* 6. My Services */}
        <Services />

        {/* 7. Software & Skills */}
        <SoftwareSkills />

        {/* 8. 4-Step Post-Production Workflow Timeline */}
        <Workflow />

        {/* 9. Contact Section with Direct WhatsApp, Email & Inquiry Form */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
