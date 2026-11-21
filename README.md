# Abdullah Tariq - Premium Developer Portfolio Website

A modern, high-performance, dark futuristic Full-Stack Developer portfolio website engineered with React, Vite, Tailwind CSS, and Lucide Icons. Designed with glassmorphism, neon cyan accents, glowing ambient effects, and interactive features.

---

## 🚀 Live Features & Architectural Overview

### 1. Design & Theme
- **Color Palette:**
  - Main Background: `#020817` (Deep Dark Navy)
  - Secondary Background: `#071426`
  - Glass Card Background: `#0A1930` / `rgba(10, 25, 48, 0.72)`
  - Neon Cyan Accent: `#00E5FF`
  - Neon Turquoise Accent: `#00F5D4`
  - Text Primary: `#F8FAFC`
  - Text Secondary: `#94A3B8`
  - Border: `rgba(0, 229, 255, 0.18)`
- **Atmospheric Cyber Aesthetics:** Custom cybernetic grid background, radial cyan illumination, glowing animated progress bars, glowing node timelines, and glassmorphic elevation.

### 2. Navbar
- Sticky header with backdrop blur and cyan border.
- Monogram logo: `AT` with `Abdullah Tariq` brand text.
- Navigation links (`Home`, `About`, `Skills`, `Projects`, `Process`, `Testimonials`, `Contact`) with smooth scrolling and active section spy.
- **Download CV** action opening an interactive CV preview modal with markdown export and print support.
- **Theme/Glow Toggle** controlling cyber ambient luminescence.
- Mobile responsive drawer menu with backdrop blur.

### 3. Hero Section
- Glowing status badge: `Software Developer`.
- Main headline: *"I build digital **experiences** that matter."* with gradient text glow.
- Quick CTAs: **View My Work** (scrolls to Projects) and **Let's Talk** (scrolls to Contact).
- Interactive social profiles (GitHub, LinkedIn, Twitter/X, Email).
- Right column: Developer portrait framed within cybernetic HUD concentric rings, particle aura, and 3 floating statistic cards:
  - `4+ Years of Experience`
  - `20+ Projects Completed`
  - `99% Client Satisfaction`
- Floating glassmorphism badge: `Clean Code`, `Scalable Solutions`, `Pixel Perfect`.

### 4. About Me & My Expertise
- **About Me Card:** Full-stack summary, 2x2 profile grid (Name, Location, Email, Open to Work status with glowing green indicator), and a "More About Me" button triggering a detailed philosophy modal.
- **My Expertise Card:** Horizontal animated progress bars for JavaScript / TypeScript (95%), React / Next.js (90%), Node.js / Express (85%), Python / Django (75%), SQL / MongoDB (80%), and HTML / CSS / Tailwind (95%). Animated via IntersectionObserver when entering the viewport.

### 5. Selected Work / Projects
- Responsive 3-column project showcase:
  - **FinTrack Dashboard** (Full Stack) — React, TypeScript, Tailwind CSS, Chart.js
  - **ShopVista E-commerce** (Full Stack) — React, Node.js, MongoDB, Stripe
  - **Taskify AI** (Web App) — React, OpenAI API, Firebase, Tailwind CSS
- Each card includes category tags, image zoom on hover, tech stack badges, GitHub and Live Demo links, and an inspection trigger.
- **"View All Projects" Modal** with category filter tabs (`All`, `Full Stack`, `Web App`, `AI / Full Stack`, `DevOps / Tooling`) and project spotlight view.

### 6. My Work Process
- 6-step roadmap: **Discover (01)** &rarr; **Plan (02)** &rarr; **Design (03)** &rarr; **Develop (04)** &rarr; **Test (05)** &rarr; **Deploy (06)**.
- Desktop horizontal glowing timeline line connecting neon circular icons.
- Mobile vertical timeline with glowing connector.

### 7. Testimonials & Statistics
- **What Clients Say:** Interactive slider with client portrait (Hamza Ali, CEO at TechSolutions), 5-star ratings, testimonial text, and slider navigation controls.
- **By The Numbers:** 4 stat cards with neon gradient numbers (`20+ Happy Clients`, `20+ Projects Completed`, `4+ Years Experience`, `99% Satisfaction Rate`).

### 8. Contact Section
- Unified glass container featuring:
  - Pitch & direct email CTA with cybernetic wireframe illustration.
  - Interactive contact cards with 1-click clipboard copy for email and phone.
  - Full contact form with live validation, email format checking, loading state, confetti celebration, and success feedback.

### 9. Footer
- Brand initials logo, copyright attribution, quick navigation links, and a back-to-top circular button with smooth scrolling.

---

## 🛠 Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS + Custom CSS Variables & Animations
- **Icons:** Lucide React + Custom SVG Brand Icons
- **Animation / Effects:** Canvas Confetti, IntersectionObserver, CSS Keyframes

---

## 💻 Getting Started

### Development
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000/`.

### Production Build
```bash
npm run build
npm run preview
```
