

## Plan: Make Portfolio More Lively (Apple-Inspired)

Drawing inspiration from Apple's iPhone 17 Pro page -- which uses scroll-triggered animations, large typography reveals, sticky sections, parallax effects, and cinematic transitions -- here's the plan to elevate your portfolio:

### 1. Add Scroll-Triggered Text Reveal Animations (All Sections)
- Use Framer Motion's `useScroll` + `useTransform` for parallax and opacity fades tied to scroll position
- Section headings will **fade in and scale up** as they enter the viewport (Apple-style large text reveals)
- Stagger child elements so content cascades in smoothly

### 2. Hero Section Enhancements
- Add a **smooth parallax** effect on the background image (moves slower than content on scroll)
- Add a **text typing/reveal** animation on the title using staggered letter/word animation
- Add a **gradient line sweep** animation across the heading on load
- Make the scroll indicator **pulse with a glow** effect

### 3. Horizontal Scroll Gallery for Services
- Convert the 2x2 services grid into a **horizontal scrolling card strip** on desktop (Apple-style)
- Cards scale up slightly and gain a glow when centered in view
- On mobile, keep vertical stack

### 4. Sticky Section Headers with Parallax
- Section labels ("01 -- Get to know me", etc.) become **sticky** briefly as you scroll through their section
- Background subtle **gradient shifts** between sections for visual separation

### 5. Animated Skill Bars / Tags
- Skills tags **pop in sequentially** with a spring animation
- Add a subtle **shimmer/sweep** effect on hover (like Apple's material finish highlights)

### 6. Certifications -- Card Hover 3D Tilt
- Add a **3D tilt effect** on certification cards (perspective transform on mouse move)
- Cards lift and cast a **glowing shadow** on hover

### 7. Projects Section -- Cinematic Reveal
- Project cards **slide in from alternating sides** (left/right) as you scroll
- Metrics numbers **count up** when they enter the viewport

### 8. Smooth Section Transitions
- Add **gradient dividers** between sections with animated opacity
- Floating particles throughout the page (not just hero) with subtle movement

### 9. Global Enhancements
- Add a **custom cursor glow** that follows the mouse (subtle radial gradient)
- Add a **progress bar** at the top of the page showing scroll progress (thin primary-colored line)
- Navbar gains a **blur backdrop** effect more aggressively on scroll

### Files to Modify
- **`src/components/HeroSection.tsx`** -- parallax bg, text reveal animation, glowing scroll indicator
- **`src/components/AboutSection.tsx`** -- sticky labels, spring skill tags, staggered reveals
- **`src/components/ServicesSection.tsx`** -- horizontal scroll gallery with scale effects
- **`src/components/ProjectsSection.tsx`** -- alternating slide-in, counting metrics
- **`src/components/CertificationsSection.tsx`** -- 3D tilt cards
- **`src/components/ContactSection.tsx`** -- enhanced entrance animations
- **`src/components/Navbar.tsx`** -- scroll progress bar, enhanced blur
- **`src/components/Footer.tsx`** -- fade-in on scroll
- **`src/index.css`** -- cursor glow, gradient dividers, shimmer utility
- **`src/pages/Index.tsx`** -- floating particles layer, section gradient backgrounds

