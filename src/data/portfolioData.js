/**
 * ==============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION FILE (SINGLE SOURCE OF TRUTH)
 * ==============================================================================
 * Welcome to your portfolio website configuration!
 * You do NOT need any login, database, or admin dashboard.
 * You can edit all your details, text, videos, images, services, and links
 * directly in this file. Save this file, and your website will update instantly!
 * 
 * QUICK EDIT GUIDE:
 * - 1. PERSONAL INFO: Change your name, bio, titles & profile picture
 * - 2. CONTACT & SOCIALS: Change your email, WhatsApp, Instagram & social links
 * - 3. SECTION HEADINGS: Customize headings and subtitles for any section
 * - 4. PORTFOLIO VIDEOS: Add, remove, or replace video projects
 * - 5. SERVICES: Edit your service offerings and deliverables
 * - 6. SOFTWARE & SKILLS: Adjust your software proficiencies and skill tags
 * - 7. WORKFLOW: Edit the 4-step editing process
 * - 8. COLOR GRADING: Adjust before/after images and specs
 * ==============================================================================
 */

export const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION (Hero & About Sections)
  // --------------------------------------------------------------------------
  personalInfo: {
    // Your display name
    name: "Paras",
    lastName: "", // Optional, e.g. "Sharma" or leave empty if just "Paras"

    // Greeting line above your name in Hero
    heroGreeting: "Welcome to my creative realm",

    // Large professional title shown in the Hero section
    title: "VIDEO EDITOR & SOFTWARE ENGINEER",

    // Brand tagline shown under your name in the footer
    tagline: "Crafting high-retention visual experiences, cinematic pacing, and stories that move audiences.",

    // Short punchy intro used in the Hero section
    heroIntro: "I transform raw footage into captivating visual narratives. Specializing in cinematic cuts, viral social content, and precision color grading that grabs attention from the first second.",

    // Availability badge text shown in Hero
    availabilityBadge: "Available for Freelance & Remote Projects",

    // Global website background image settings (uses background.jpg across all sections)
    globalBackgroundImage: "/assets/images/background.jpg",
    globalBackgroundPosition: "center center",
    heroBackgroundImage: "/assets/images/background.jpg",
    heroBackgroundPosition: "center center",

    // Profile photograph path.
    // Preserves your natural face, facial features, and appearance without stretching or cropping.
    profileImage: "/assets/images/Purple Gimbal Creator Portrait.png",

    // Fallback image in case your local photo is missing or moved
    fallbackProfileImage: "/assets/images/profile.png",

    // Detailed text for the ABOUT ME section
    about: {
      heading: "Behind The Timeline",
      subheading: "Passion meets precision in every frame I cut.",
      paragraphs: [
        "Hey! I'm Paras, a dedicated Video Editor and Visual Storyteller driven by the rhythm of seamless transitions, atmospheric sound design, and colors that evoke raw emotion.",
        "Over the years, I have crafted high-impact content across cinematic narratives, high-octane automotive visuals, and high-retention social content. Whether it's high-velocity 9:16 vertical reels engineered for algorithmic retention, commercial films, or engaging YouTube long-forms, I focus on storytelling that hooks the audience.",
        "Editing isn't just about cutting clips together; it's about crafting tempo, emotional arcs, and unforgettable visual identity. Let's make your next video impossible to ignore."
      ],
      // 4 Key craft pillars highlighted in the About section
      pillars: [
        {
          title: "Retention Pacing",
          description: "Engineered hooks and seamless flow designed to keep viewers engaged till the final frame."
        },
        {
          title: "Cinematic Color Science",
          description: "Mood-driven color grading, custom LUT crafting, and shot matching that elevates visuals to high-end film standards."
        },
        {
          title: "Immersive Soundscapes",
          description: "Layered SFX, foley, and dynamic audio leveling that breathe realism and energy into every cut."
        },
        {
          title: "Sleek Motion Design",
          description: "Kinetic typography, 3D camera tracking, and custom transitions that reinforce strong visual identity."
        }
      ]
    },

    // Key statistics displayed in the stats bar
    stats: [
      { value: "1+", label: "Years Experience" },
      { value: "45+", label: "Videos Delivered" },
      { value: "65K+", label: "Total Views Generated" },
      { value: "4K 60fps", label: "Master Delivery" }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. CONTACT & SOCIAL CHANNELS
  // --------------------------------------------------------------------------
  contactInfo: {
    // Your professional email address
    email: "paras.visuals@gmail.com",

    // Your WhatsApp number (Include country code without '+' or spaces, e.g., '919876543210')
    whatsappNumber: "919876543210",
    whatsappDisplay: "+91 98765 43210",

    // Instagram handle and direct profile URL
    instagramHandle: "@paras_edits",
    instagramUrl: "https://instagram.com",

    // Other optional social profile links
    youtubeUrl: "https://youtube.com",
    linkedinUrl: "https://linkedin.com",
    behanceUrl: "https://behance.net",

    // Location and timezone
    location: "Ashti Dist. Wardha 442202, India (Working Worldwide)",
    responseTime: "Typically replies within 2–4 hours"
  },

  // --------------------------------------------------------------------------
  // 3. SECTION HEADINGS & SUBTITLES (Fully Customizable)
  // --------------------------------------------------------------------------
  workSection: {
    badge: "Featured Portfolio",
    title: "Crafted In The Cut",
    subtitle: "A curated showcase of high-impact visual projects, cinematic grades, and viral social edits."
  },

  servicesSection: {
    badge: "Post-Production Services",
    title: "What I Bring To The Edit Suite",
    subtitle: "Specialized solutions customized to turn views into subscribers, brand loyalty, and sales."
  },

  skillsSection: {
    badge: "Tools & Expertise",
    title: "Software & Creative Arsenal",
    subtitle: "Industry standard NLEs, color grading suites, and motion graphics software mastered to perfection."
  },

  workflowSection: {
    badge: "Editing Pipeline",
    title: "From Raw Footage To Master Cut",
    subtitle: "A battle-tested 4-step post-production workflow designed for smooth communication, fast turnaround, and zero creative friction."
  },

  contactSection: {
    badge: "Get In Touch",
    title: "Let's Make Something Legendary",
    subtitle: "Have a project in mind, need a YouTube editor, or want viral vertical content? Send a message below or connect directly on WhatsApp."
  },

  // --------------------------------------------------------------------------
  // 4. PORTFOLIO WORK / VIDEOS
  // --------------------------------------------------------------------------
  // Categories available for filtering:
  categories: ["All", "Featured", "Cinematic", "Reels", "YouTube", "Commercial"],

  /**
   * Projects list:
   * To add a new project, copy an existing item below and edit:
   * - id: Unique string (e.g. "project-9")
   * - title: Project title
   * - category: Must match one of ["Cinematic", "Reels", "YouTube", "Commercial"]
   * - aspectRatio: "16:9" (standard landscape) or "9:16" (vertical Reels/Shorts)
   * - duration: Video duration (e.g. "0:30", "1:45")
   * - description: 1-2 sentences about the edit, sound design, or pacing
   * - thumbnail: Path to image (e.g. "/assets/images/thumb.jpg") or online URL
   * - videoType: 
   *     "direct"   -> for local or online MP4 video file (e.g. "/assets/videos/Sequence 01.mp4")
   *     "youtube"  -> for YouTube URL (watch link, youtu.be, shorts, or embed)
   *     "vimeo"    -> for Vimeo URL
   * - videoUrl: Direct link to video file or YouTube/Vimeo page
   * - tags: Array of keywords (e.g. ["Cinematic", "Speed Ramping"])
   * - featured: true / false (featured projects show a special badge and appear under 'Featured')
   */
  projects: [
    {
      id: "project-1",
      title: "Night Drive • Cinematic Automotive Reel",
      category: "Cinematic",
      aspectRatio: "16:9",
      duration: "0:45",
      description: "High-octane automotive film cut featuring aggressive sound design, precision speed ramps, and mood-drenched teal & purple anamorphic grade.",
      thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      videoType: "direct",
      videoUrl: "/assets/videos/Sequence 01.mp4",
      tags: ["Cinematic", "Speed Ramping", "Color Grade", "Sound Design"],
      featured: true
    },
    {
      id: "project-2",
      title: "Urban Speed • 9:16 Viral Hyper-Cut",
      category: "Reels",
      aspectRatio: "9:16",
      duration: "0:25",
      description: "Vertical high-retention reel with synchronized bass hits, dynamic sound effects, and kinetic subtitles that achieved over 1.2M organic views.",
      thumbnail: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      videoType: "direct",
      videoUrl: "/assets/videos/lv_0_20260308104103.mp4",
      tags: ["Reels & Shorts", "Audio Sync", "Fast Pacing", "Viral Hook"],
      featured: true
    },
    {
      id: "project-3",
      title: "Neon Cyberpunk Short Film Edit",
      category: "Cinematic",
      aspectRatio: "16:9",
      duration: "2:15",
      description: "Atmospheric narrative short cut using pacing to build tension, custom neon titles, and multi-layered Foley sound effects with rich color contrast.",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      videoType: "youtube",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Cinematic", "Storytelling", "Visual FX", "4K HDR"],
      featured: true
    },
    {
      id: "project-4",
      title: "High-Engagement Tech Breakdown",
      category: "YouTube",
      aspectRatio: "16:9",
      duration: "8:30",
      description: "Fast-paced YouTube video with custom 2D motion graphics, engaging B-roll overlays, visual zooms, and subtle comedic timing.",
      thumbnail: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80",
      videoType: "youtube",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["YouTube", "Motion Graphics", "Retention Hooks", "Premiere Pro"],
      featured: false
    },
    {
      id: "project-5",
      title: "Apex Chrono • Luxury Watch Commercial",
      category: "Commercial",
      aspectRatio: "16:9",
      duration: "0:30",
      description: "Premium product launch spot with macro beauty shots, elegant gold & purple lighting treatment, and bespoke orchestral soundtrack editing.",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      videoType: "direct",
      videoUrl: "/assets/videos/Sequence 01.mp4",
      tags: ["Commercial", "Product Video", "Macro Cuts", "Luxury Look"],
      featured: true
    },
    {
      id: "project-6",
      title: "Fitness & Motivation 9:16 Viral Reel",
      category: "Reels",
      aspectRatio: "9:16",
      duration: "0:20",
      description: "Aggressive motivational cut featuring hard audio stops, glitch transitions, speed ramps, and high-contrast fitness grading.",
      thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      videoType: "direct",
      videoUrl: "/assets/videos/lv_0_20260308104103.mp4",
      tags: ["Reels", "Glitch FX", "Rhythm Sync", "CapCut / Premiere"],
      featured: false
    },
    {
      id: "project-7",
      title: "The Creator Economy • Documentary Style Edit",
      category: "YouTube",
      aspectRatio: "16:9",
      duration: "12:40",
      description: "Deep dive video essay with custom paper textures, animated archive footage, immersive ambient sound design, and clean chapter transitions.",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      videoType: "youtube",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Documentary", "Paper Textures", "After Effects", "Sound Mixing"],
      featured: false
    },
    {
      id: "project-8",
      title: "Electric Pulse • Energy Drink Commercial",
      category: "Commercial",
      aspectRatio: "16:9",
      duration: "0:35",
      description: "High-tempo commercial driven by electro soundtrack, kinetic typography, flash frames, and dynamic neon purple lighting accents.",
      thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      videoType: "direct",
      videoUrl: "/assets/videos/Sequence 01.mp4",
      tags: ["Commercial", "Dynamic Transitions", "Color Pop", "3D Camera"],
      featured: false
    }
  ],

  // --------------------------------------------------------------------------
  // 5. SERVICES OFFERED
  // --------------------------------------------------------------------------
  services: [
    {
      id: "service-1",
      icon: "Film",
      title: "Video Editing",
      description: "Full-cycle post-production for films, documentaries, and visual stories with seamless narrative pacing and rhythm.",
      deliverables: [
        "A-roll & B-roll multi-cam sync",
        "Rhythmic cuts & narrative pacing",
        "Full audio cleanup & dialogue leveling",
        "High-definition 4K master delivery"
      ]
    },
    {
      id: "service-2",
      icon: "Smartphone",
      title: "Reels & Shorts Editing",
      description: "Vertical video powerhouse edits engineered for high watch time, viral algorithm retention, and maximum engagement.",
      deliverables: [
        "Viral first 3-second hook design",
        "Kinetic animated auto-captions & emojis",
        "Trending sound design & punchy zooms",
        "Optimized for Instagram, TikTok & YouTube Shorts"
      ]
    },
    {
      id: "service-3",
      icon: "Youtube",
      title: "YouTube Editing",
      description: "Retention-optimized editing that turns casual clickers into loyal subscribers with engaging visual storytelling.",
      deliverables: [
        "Jump cuts, visual b-rolls & zooms",
        "Chapter titles, lower-thirds & cards",
        "Humor, meme pacing & sound gags",
        "Thumbnail synergy & pacing strategy"
      ]
    },
    {
      id: "service-4",
      icon: "Sliders",
      title: "Color Grading",
      description: "Professional Hollywood-grade color correction, custom LUT design, and stylized cinematic grades that elevate visual mood.",
      deliverables: [
        "Log to Rec.709 conversion & shot matching",
        "Natural skin tone isolation & enhancement",
        "Custom cinematic look (Teal/Orange, Moody, Film Look)",
        "HDR / SDR broadcast legal delivery"
      ]
    },
    {
      id: "service-5",
      icon: "Sparkles",
      title: "Motion Graphics",
      description: "Clean, modern 2D and 3D visual elements that elevate production value and reinforce strong visual aesthetics.",
      deliverables: [
        "Custom animated intros & logo reveals",
        "Sleek lower-thirds & informational graphics",
        "3D camera tracking & HUD overlays",
        "Call-to-action & kinetic typography"
      ]
    },
    {
      id: "service-6",
      icon: "Flame",
      title: "Promotional Videos",
      description: "High-impact promotional spots and ad creative designed to drive engagement, product hype, and visual authority.",
      deliverables: [
        "Commercial trailers & event promos",
        "Product feature highlights & ads",
        "Fast-turnaround social ad variations",
        "Licensed commercial music & SFX selection"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 6. SOFTWARE & SKILLS
  // --------------------------------------------------------------------------
  softwareSkills: [
    {
      name: "Adobe Premiere Pro",
      category: "NLE Video Editing",
      level: "Expert",
      percentage: 95,
      color: "#9999FF",
      badge: "Pr",
      badgeColor: "#00005B",
      badgeTextColor: "#9999FF",
      description: "My primary powerhouse for fast-turnaround assembly, multi-camera cutting, audio editing, and final master exports."
    },
    {
      name: "After Effects",
      category: "Motion Graphics & VFX",
      level: "Advanced",
      percentage: 90,
      color: "#CF9FFF",
      badge: "Ae",
      badgeColor: "#00005B",
      badgeTextColor: "#CF9FFF",
      description: "Used for kinetic typography, camera tracking, screen replacements, 2D particle dynamics, and logo animation."
    },
    {
      name: "Color Grading Suite",
      category: "Color Correction & Finishing",
      level: "Master",
      percentage: 92,
      color: "#8247FF",
      badge: "Cl",
      badgeColor: "#1A0F33",
      badgeTextColor: "#A78BFA",
      description: "Node-based color science, custom LUT crafting, shot-to-shot matching, skin tone isolation, and cinematic film print emulation."
    },
    {
      name: "Adobe Photoshop",
      category: "Graphic Design & Thumbnails",
      level: "Expert",
      percentage: 92,
      color: "#31A8FF",
      badge: "Ps",
      badgeColor: "#001E36",
      badgeTextColor: "#31A8FF",
      description: "Creating click-worthy YouTube thumbnails, graphics extraction, matte painting, and visual assets."
    },
    {
      name: "CapCut Pro",
      category: "Mobile & Viral Formats",
      level: "Master",
      percentage: 96,
      color: "#00E5FF",
      badge: "Cc",
      badgeColor: "#002B33",
      badgeTextColor: "#00E5FF",
      description: "Rapid turnaround for viral social reels, seamless audio auto-sync, trending templates, and instant mobile distribution."
    }
  ],

  // Secondary technical disciplines
  editingDisciplines: [
    "Sound Design & Audio Mixing",
    "Speed Ramping & Time Remapping",
    "Kinetic Typography",
    "Multi-Cam Editing",
    "3D Camera Tracking",
    "Masking & Rotoscoping",
    "Color Matching & LUT Creation",
    "Social Media Retention Engineering"
  ],

  // --------------------------------------------------------------------------
  // 7. WORKFLOW PROCESS (How I Work)
  // --------------------------------------------------------------------------
  workflowSteps: [
    {
      step: "01",
      title: "Footage Ingestion & Vision",
      description: "Raw files, creative brief, references, and milestones are organized, audio synced, and narrative structure analyzed."
    },
    {
      step: "02",
      title: "The Assembly & Rough Cut",
      description: "Selecting best takes, structuring pacing, cutting the storyline, and crafting the core emotional arc."
    },
    {
      step: "03",
      title: "Magic: Sound, FX & Color",
      description: "Adding immersive Foley sound effects, speed ramping, motion graphics, and rich cinematic color grading."
    },
    {
      step: "04",
      title: "Review & Precision Polish",
      description: "Timestamped review, fine-tuning adjustments, and delivering final 4K masters."
    }
  ],

  // --------------------------------------------------------------------------
  // 8. COLOR GRADING SHOWCASE (Interactive Before/After Slider)
  // --------------------------------------------------------------------------
  // Set enabled: false if you wish to hide this section
  colorGrading: {
    enabled: true,
    badge: "Professional Color Suite",
    title: "Cinematic Color Science",
    subtitle: "Drag the slider to inspect the transformation from flat LOG camera footage to high-end cinematic film grade.",
    beforeLabel: "RAW / LOG Footage",
    afterLabel: "Final Grade (Teal & Orange)",
    // Before image: flat/desaturated log profile
    beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=50&sat=-90",
    // After image: rich, graded cinematic shot
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    stats: [
      { label: "Color Science", value: "ACEScc / 32-bit Float" },
      { label: "Target Gamut", value: "Rec.709 / DCI-P3" },
      { label: "Shot Matching", value: "Multi-Cam Harmonized" }
    ]
  },

  // --------------------------------------------------------------------------
  // 9. FOOTER & COPYRIGHT
  // --------------------------------------------------------------------------
  footer: {
    copyrightText: "All rights reserved. Designed for high-impact visual storytelling.",
    backToTopText: "Back to Top"
  }
};
