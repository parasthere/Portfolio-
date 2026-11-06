# 🎬 Video Editor & Software Engineer Portfolio

A modern, high-performance personal portfolio website built specifically for **Video Editors, Colorists, and Software Engineers**. Designed with a **premium dark purple (`#8247FF`) and black (`#0D0A14`) aesthetic**, smooth 60fps canvas particles, subtle glowing gradients, and an interactive video preview gallery.

---

## ⚡ Key Highlights

- **Zero CMS / Zero Admin Dashboard / Zero Database**: Fully editable directly from source files! No login or authentication required.
- **Single Central Configuration File**: Change your name, bio, photo, videos, services, skills, email, and WhatsApp all in `src/data/portfolioData.js`.
- **Interactive Video Modal Player**: Supports **direct MP4 video files** (offline local or CDN) as well as **YouTube** and **Vimeo** embeds with high-definition playback.
- **Modern Dark Purple Theme**: Primary Purple `#8247FF`, Deep Obsidian `#0D0A14`, and Lavender accents `#D6C7FF`.
- **Motion Graphics & Animations**: Ambient floating glowing orbs, interactive floating purple particles canvas, hover tilts, pulsing play buttons, and smooth responsive layout.
- **100% Responsive**: Tailored for mobile smartphones (with dedicated vertical 9:16 layout for Reels/Shorts), tablets, laptops, and ultra-wide desktop monitors.

---

## 🚀 How to Run Locally

### 1. Start Development Server
Open PowerShell or your terminal in this project folder and run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL printed in terminal).

### 2. Build for Production
To generate the optimized production files (in the `dist/` folder):
```bash
npm run build
```
You can deploy the contents of the `dist/` folder directly to **Vercel**, **Netlify**, **GitHub Pages**, or any web host.

---

## ✏️ How to Customize Your Portfolio

You do **not** need to touch complex React code. Everything is managed inside:
📁 `src/data/portfolioData.js`

### 1. Edit Your Name, Title & Bio
Open `src/data/portfolioData.js` and locate `personalInfo`:
```javascript
personalInfo: {
  name: "Paras",
  title: "VIDEO EDITOR & SOFTWARE ENGINEER",
  heroIntro: "I transform raw footage into captivating visual narratives...",
  ...
}
```

### 2. Replace Your Profile Photo
You have two easy options:
1. **Local File**: Put your photo inside `public/assets/images/profile.png` (or `profile.jpg`).
2. **Online URL**: In `src/data/portfolioData.js`, set:
```javascript
profileImage: "https://your-domain.com/your-photo.png",
```

### 3. Change Contact Info & WhatsApp Link
In `contactInfo`:
```javascript
contactInfo: {
  email: "your.email@example.com",
  // Enter your number with country code, no '+' or spaces:
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  instagramHandle: "@your_handle",
  instagramUrl: "https://instagram.com/your_handle",
  location: "Mumbai, India (Working Worldwide)",
}
```

### 4. Adding, Editing, or Replacing Videos in the Portfolio
Locate `projects` in `src/data/portfolioData.js`. Each project has the following structure:

#### Example A: Local or Direct MP4 Video (e.g. Reels, Automotive Cuts)
Put your `.mp4` file in `public/assets/videos/my-clip.mp4` and add:
```javascript
{
  id: "project-1",
  title: "Night Drive • Cinematic Automotive Reel",
  category: "Cinematic",       // "Cinematic", "Reels", "YouTube", or "Commercial"
  aspectRatio: "16:9",         // "16:9" for landscape or "9:16" for vertical Reels
  duration: "0:45",
  description: "Description of your edit, sound design, and color grading.",
  thumbnail: "https://images.unsplash.com/...", // or "/assets/images/thumb.jpg"
  videoType: "direct",
  videoUrl: "/assets/videos/my-clip.mp4",
  tags: ["Cinematic", "Speed Ramping", "Color Grade"],
  featured: true
}
```

#### Example B: YouTube Video
```javascript
{
  id: "project-3",
  title: "Neon Cyberpunk Short Film Edit",
  category: "Cinematic",
  aspectRatio: "16:9",
  duration: "2:15",
  description: "Pacing to build tension with multi-layered Foley sound effects.",
  thumbnail: "https://images.unsplash.com/...",
  videoType: "youtube",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  tags: ["Cinematic", "Storytelling", "4K HDR"],
  featured: true
}
```

#### Example C: Vertical 9:16 Reel / Short / TikTok
```javascript
{
  id: "project-2",
  title: "Urban Speed • 9:16 Viral Hyper-Cut",
  category: "Reels",
  aspectRatio: "9:16",         // Automatically formats card and modal to 9:16!
  duration: "0:25",
  description: "Vertical high-retention reel with synchronized bass hits and dynamic subtitles.",
  thumbnail: "https://images.unsplash.com/...",
  videoType: "direct",
  videoUrl: "/assets/videos/lv_0_20260308104103.mp4",
  tags: ["Reels & Shorts", "Audio Sync", "Viral Hook"],
  featured: true
}
```

---

## 🛠️ Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── images/        # Profile and project images
│       │   └── profile.png
│       └── videos/        # Your video clips (.mp4)
│           ├── Sequence 01.mp4
│           └── lv_0_20260308104103.mp4
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Fixed header with mobile drawer
│   │   ├── FloatingParticles.jsx    # Canvas floating purple particles
│   │   ├── Hero.jsx                 # Hero with large typography, badges & portrait
│   │   ├── StatsBar.jsx             # Experience, views, delivery counter strip
│   │   ├── About.jsx                # Bio, craft philosophy & pillars
│   │   ├── WorkGallery.jsx          # Category tabs, hover preview & video grid
│   │   ├── VideoModal.jsx           # Fullscreen video player modal
│   │   ├── ColorGradingShowcase.jsx # Interactive before/after comparison slider
│   │   ├── Services.jsx             # 6 core post-production services
│   │   ├── SoftwareSkills.jsx       # Premiere, AE, Color Suite, Photoshop, CapCut
│   │   ├── Workflow.jsx             # 4-step post-production timeline
│   │   ├── Contact.jsx              # Email, WhatsApp, Instagram & contact form
│   │   └── Footer.jsx               # Copyright, social icons, back-to-top button
│   ├── data/
│   │   └── portfolioData.js         # ⭐ CENTRAL CONFIGURATION FILE ⭐
│   ├── styles/
│   │   ├── index.css                # Theme variables, glows & base styles
│   │   └── components.css           # Responsive layouts & animations
│   ├── App.jsx                      # Application root
│   └── main.jsx                     # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Color Palette Reference

| Name | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary Purple** | `#8247FF` | Main brand color, buttons, glowing borders, badges |
| **Dark Background** | `#0D0A14` | Primary deep obsidian background |
| **Surface Card** | `#130E1F` | Glassmorphic card surfaces |
| **Card Hover** | `#1E1632` | Elevated interactive hover states |
| **Lavender Accent** | `#D6C7FF` | Headings, subheadings, subtle taglines |
| **Muted Lavender** | `#A78BFA` | Icons, secondary text highlights |
| **Text Primary** | `#FFFFFF` | Crisp headings and body text |

---

## 📝 License
Built for personal portfolio use. Feel free to modify, expand, and personalize!
