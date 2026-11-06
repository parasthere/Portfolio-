# 🎬 Video Editor Portfolio — Editing Guide

Welcome! Your website is built with **zero dependencies on databases, CMS, or login panels**. Everything on the website is controlled through **one single file**:

📍 **`src/data/portfolioData.js`**

Whenever you edit and save this file, your website updates automatically.

---

## 📋 Table of Contents
1. [How to Run the Website](#1-how-to-run-the-website)
2. [How to Change Your Name, Title & Bio](#2-how-to-change-your-name-title--bio)
3. [How to Replace Your Photograph](#3-how-to-replace-your-photograph)
4. [How to Add a New Video](#4-how-to-add-a-new-video)
5. [How to Delete or Edit an Existing Project](#5-how-to-delete-or-edit-an-existing-project)
6. [How to Update Social Media & WhatsApp Links](#6-how-to-update-social-media--whatsapp-links)
7. [How to Update Skills & Services](#7-how-to-update-skills--services)
8. [How to Build the Production Version](#8-how-to-build-the-production-version)

---

## 1. How to Run the Website

Open your terminal or PowerShell inside the `Portfolio` folder and run:

```bash
npm run dev
```

Your browser will open at `http://localhost:3000`. Any changes you save in the code will appear on your screen in real time!

To stop the server at any time, press `Ctrl + C` in the terminal.

---

## 2. How to Change Your Name, Title & Bio

Open `src/data/portfolioData.js` and locate the `personalInfo` section near the top:

```javascript
personalInfo: {
  // Your display name
  name: "Paras",

  // Large headline title shown in the Hero section
  title: "VIDEO EDITOR & SOFTWARE ENGINEER",

  // Short punchy intro under your title in the Hero
  heroIntro: "I transform raw footage into captivating visual narratives. Specializing in cinematic cuts, viral social content, and precision color grading.",

  // Status badge
  availabilityBadge: "Available for Freelance & Remote Projects",

  // About Me section text
  about: {
    heading: "Behind The Timeline",
    subheading: "Passion meets precision in every frame I cut.",
    paragraphs: [
      "Hey! I'm Paras, a dedicated Video Editor and Visual Storyteller...",
      "Over the years, I have crafted high-impact content across cinematic narratives...",
      "Editing isn't just about cutting clips together; it's about crafting tempo..."
    ],
    ...
  }
}
```

Simply replace any text between quotes `""`, save the file, and you're done!

---

## 3. How to Replace Your Photograph

Your profile photograph is styled to preserve your natural facial identity, features, and skin tone while featuring a clean background with subtle cinematic purple rim lighting that blends naturally into the website.

### Option A: Local File (Recommended)
1. Save your photograph or transparent cutout into:
   📁 `public/assets/images/profile.png` (or `profile.jpg`)
2. In `src/data/portfolioData.js`, confirm the path:
   ```javascript
   profileImage: "/assets/images/profile.png",
   ```

### Option B: Online URL
You can also use an image URL directly:
```javascript
profileImage: "https://your-domain.com/your-photo.png",
```

---

## 3.1 How to Replace or Adjust the Global Website Background Image

Your portfolio features a **unified cinematic purple atmospheric background system** driven by:
📁 `public/assets/images/background.jpg`

It displays the **complete, uncropped image** with zero distortion across **all sections** (Hero, About, Work, Services, Skills, Workflow, Contact, Footer).

You can control it directly inside `src/data/portfolioData.js`:
```javascript
// Global website background image settings (uses background.jpg across all sections)
globalBackgroundImage: "/assets/images/background.jpg",
globalBackgroundPosition: "center center", // e.g. "center top", "center 25%", "center center"
```

- **To replace the image**: Drop your new photo into `public/assets/images/background.jpg`.
- **To adjust framing**: Change `globalBackgroundPosition` to focus on the top, center, or bottom of your image.
- **Atmospheric effects applied**:
  1. Ambient blurred color-matched backdrop filling letterbox spaces seamlessly.
  2. Complete uncropped image with `background-size: contain` and soft edge feathering.
  3. Deep black and dark purple readability gradient overlay.
  4. Rich violet ambient lighting tint (`#8247FF`).
  5. Soft blurred purple radial glows.
  6. Subtle edge vignette. Text and cards remain 100% sharp and readable.

---

## 4. How to Add a New Video

Open `src/data/portfolioData.js` and scroll to the `projects: [...]` list.

Copy one of the templates below and paste it inside the `projects: [` array:

### Template 1: For a Local MP4 Video (e.g. 9:16 Vertical Reel or Short)
1. Place your `.mp4` video in `public/assets/videos/my-reel.mp4`.
2. Add this block to `projects`:

```javascript
{
  id: "project-new-1",
  title: "Hyper-Drive • Viral Automotive Reel",
  category: "Reels",            // "Cinematic", "Reels", "YouTube", or "Commercial"
  aspectRatio: "9:16",          // "9:16" for vertical or "16:9" for horizontal
  duration: "0:30",
  description: "Vertical high-retention reel with audio bass hits and kinetic typography.",
  thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  videoType: "direct",
  videoUrl: "/assets/videos/my-reel.mp4",
  tags: ["Reels", "Sound Design", "Speed Ramping"],
  featured: true               // Set to true to display a glowing "★ Featured" badge
},
```

### Template 2: For a YouTube Video
You can paste **any** YouTube link: regular watch link, short `youtu.be` link, or YouTube Shorts link! The player automatically handles the conversion:

```javascript
{
  id: "project-new-2",
  title: "Documentary Film Trailer",
  category: "Cinematic",
  aspectRatio: "16:9",
  duration: "2:10",
  description: "Cinematic color grading and pacing designed to build intense tension.",
  thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  videoType: "youtube",
  videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  tags: ["Cinematic", "Color Science", "Storytelling"],
  featured: false
},
```

---

## 5. How to Delete or Edit an Existing Project

In `src/data/portfolioData.js`:
- **To edit a project**: Change its `title`, `description`, `thumbnail`, or `videoUrl`.
- **To delete a project**: Select the entire `{ ... },` block of that project and delete it.
- **To mark a project as Featured**: Set `featured: true`. It will display a glowing **★ Featured** badge and appear in the "Featured" filter tab!

---

## 6. How to Update Social Media & WhatsApp Links

Locate `contactInfo` in `src/data/portfolioData.js`:

```javascript
contactInfo: {
  // Your email address (clicking opens an email draft)
  email: "paras.visuals@gmail.com",

  // Your WhatsApp number (Include your country code, digits only)
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210", // How it appears visually

  // Instagram handle and link
  instagramHandle: "@paras_edits",
  instagramUrl: "https://instagram.com/your_username",

  // Other channels
  youtubeUrl: "https://youtube.com/@your_channel",
  linkedinUrl: "https://linkedin.com/in/your_name",

  location: "Mumbai, India (Working Worldwide)",
  responseTime: "Typically replies within 2–4 hours"
}
```

> **Smart Link Protection**: The website automatically strips spaces, hyphens, and `+` from your WhatsApp number, ensuring the direct WhatsApp chat link **always works** without errors.

---

## 7. How to Update Skills & Services

- **Services**: Edit the `services` array in `portfolioData.js` to change titles, descriptions, and deliverable bullet points.
- **Software**: Edit `softwareSkills` to adjust your proficiency percentage, software names, and descriptions.
- **Interactive Color Grading Slider**: Under `colorGrading`, change `beforeImage` (flat log shot) and `afterImage` (graded shot). Set `enabled: false` if you ever want to hide it.
- **Editing Disciplines**: Add or remove items from the `editingDisciplines` list to update the skill pill tags.

---

## 8. How to Build the Production Version

When you are ready to publish your website online:

1. In your terminal, run:
   ```bash
   npm run build
   ```
2. Vite will compile your portfolio into the `dist/` folder in just a couple of seconds.
3. You can upload or deploy the contents of the `dist/` folder directly to:
   - **Vercel** (`vercel deploy`)
   - **Netlify** (drag and drop the `dist` folder into app.netlify.com/drop)
   - **GitHub Pages**
   - Any standard web hosting provider (cPanel, Hostinger, AWS S3)

---

## 💡 Summary of Assets Folders

| File Type | Where to place it | How to reference it in `portfolioData.js` |
| :--- | :--- | :--- |
| **Profile Photo** | `public/assets/images/profile.png` | `"/assets/images/profile.png"` |
| **Video Thumbnails** | `public/assets/images/thumb1.jpg` | `"/assets/images/thumb1.jpg"` |
| **Local Video MP4** | `public/assets/videos/my-cut.mp4` | `"/assets/videos/my-cut.mp4"` |
