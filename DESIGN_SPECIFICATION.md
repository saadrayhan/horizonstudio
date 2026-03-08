# Horizon Studio — Complete Design Specification & Source Code

---

## 1. FONT IMPORTS

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

---

## 2. DESIGN TOKENS

### Colors (HSL → Hex)

```css
:root {
  /* Core palette */
  --background: 36 25% 97%;           /* #f7f5f2 — warm off-white page bg */
  --foreground: 0 0% 8%;              /* #141414 — near-black text */
  --card: 36 25% 97%;                 /* #f7f5f2 — same as bg */
  --card-foreground: 0 0% 8%;         /* #141414 */
  --popover: 0 0% 100%;              /* #ffffff */
  --popover-foreground: 0 0% 8%;     /* #141414 */

  /* Primary (dark on light) */
  --primary: 0 0% 8%;                /* #141414 — buttons, active nav */
  --primary-foreground: 36 25% 97%;  /* #f7f5f2 — text on primary */

  /* Secondary */
  --secondary: 36 18% 94%;           /* #f2efe9 — subtle background tint */
  --secondary-foreground: 0 0% 8%;   /* #141414 */

  /* Muted */
  --muted: 36 18% 94%;              /* #f2efe9 */
  --muted-foreground: 0 0% 46%;     /* #757575 — secondary text */

  /* Accent */
  --accent: 36 14% 91%;             /* #ece8e1 */
  --accent-foreground: 0 0% 8%;     /* #141414 */

  /* Destructive */
  --destructive: 0 63% 51%;         /* #d42f2f */
  --destructive-foreground: 0 0% 98%; /* #fafafa */

  /* Borders & inputs */
  --border: 0 0% 87%;               /* #dedede */
  --input: 0 0% 87%;                /* #dedede */
  --ring: 0 0% 46%;                 /* #757575 */

  /* Radius */
  --radius: 0.5rem;                  /* 8px */

  /* Footer / dark sections */
  /* bg: hsl(0 0% 8%) = #141414 */
  /* text: hsl(36 25% 96%) = #f5f3ef */
  /* border: white/10 = rgba(255,255,255,0.1) */
}
```

### Hex Reference Table

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| background | 36 25% 97% | #f7f5f2 | Page background |
| foreground | 0 0% 8% | #141414 | Primary text, buttons |
| primary | 0 0% 8% | #141414 | CTA buttons, active nav pills |
| primary-foreground | 36 25% 97% | #f7f5f2 | Text on primary buttons |
| secondary | 36 18% 94% | #f2efe9 | Card hover, subtle bg |
| muted-foreground | 0 0% 46% | #757575 | Secondary/caption text |
| border | 0 0% 87% | #dedede | All borders, dividers |
| accent | 36 14% 91% | #ece8e1 | Hover backgrounds |
| destructive | 0 63% 51% | #d42f2f | Error states |

### Font Families

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-serif: 'Instrument Serif', Georgia, serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

### Spacing System (used throughout)

| Value | Usage |
|-------|-------|
| 0.5px | Hairline borders |
| 4px (py-1) | Tight inner padding |
| 6px (py-1.5) | Nav pill padding |
| 8px (py-2) | Small button padding |
| 10px (py-2.5) | Medium button padding |
| 12px (py-3) | Large button, form input padding |
| 16px (px-4) | Form input horizontal, nav link horizontal |
| 20px (py-5) | List row vertical |
| 24px (px-6) | Section horizontal padding (mobile) |
| 32px (py-8) | Card internal padding |
| 40px (px-10) | Section horizontal padding (desktop) |
| 48px (py-12) | Section vertical small |
| 64px (py-16) | Section vertical medium |
| 72px (pt-[72px]) | Navbar height offset |
| 80px (py-20) | Section vertical large |
| 112px (py-28) | Hero vertical padding |

### Border Radius

| Token | Value |
|-------|-------|
| --radius | 0.5rem (8px) |
| rounded-full | 9999px (pills, buttons, avatars) |
| rounded-md | 6px |
| rounded-sm | 4px |

### Shadows

No box-shadows are used. The design relies entirely on borders for separation.

### Breakpoints

| Name | Min-width | Usage |
|------|-----------|-------|
| sm | 640px | Show/hide secondary text |
| md | 768px | Switch to multi-column layouts |
| lg | 1024px | Increase horizontal padding |
| max-width | 1240px | Content container |

---

## 3. TYPOGRAPHY SPEC

### Headings

| Element | Font | Weight | Size (mobile) | Size (desktop) | Line Height | Letter Spacing | Color |
|---------|------|--------|---------------|----------------|-------------|----------------|-------|
| Hero h1 | Instrument Serif | 400 | 42px | 52-60px | 1.06 | normal | foreground (#141414) |
| Section h2 | Instrument Serif | 400 | 28px | 36-40px | 1.1-1.12 | normal | foreground |
| Subsection h2 | Instrument Serif | 400 | 22px | 22px | 1.1 | normal | foreground |
| Blog hero | Instrument Serif | 400 | 48px | 64px | 1.06 | normal | foreground |
| Blog article h1 | Instrument Serif | 400 | 36px | 44px | 1.1 | normal | foreground |
| Card h3 | Inter | 600 | 15-16px | 15-16px | snug (1.375) | normal | foreground |

### Body Text

| Element | Font | Weight | Size | Line Height | Color |
|---------|------|--------|------|-------------|-------|
| Hero paragraph | Inter | 400 | 15px | relaxed (1.625) | muted-foreground (#757575) |
| Body paragraph | Inter | 400 | 14px | relaxed (1.625) | foreground/80 |
| Blog body | Inter | 400 | 16px | 1.85 | foreground/80 |
| Card description | Inter | 400 | 13px | relaxed (1.625) | muted-foreground |

### Labels & Meta

| Element | Font | Weight | Size | Line Height | Letter Spacing | Transform | Color |
|---------|------|--------|------|-------------|----------------|-----------|-------|
| Mono label | JetBrains Mono | 400 | 11px | normal | wider (0.05em) | uppercase | muted-foreground |
| Nav link | Inter | 400/500 | 13px | normal | normal | none | muted-foreground / foreground |
| Button text | Inter | 600 | 12px | normal | wider (0.05em) | uppercase | primary-foreground |
| Year/date | JetBrains Mono | 400 | 12px | normal | normal | none | muted-foreground |
| Stat number | JetBrains Mono | 600 | 28-32px | normal | normal | none | foreground |
| Stat serif | Instrument Serif | 400 | 28px | normal | normal | none | foreground |
| Tag/badge | JetBrains Mono | 400 | 10-11px | normal | normal | none | muted-foreground |
| Footer heading | Inter | 400 | 13px | normal | normal | none | white/50 |
| Footer label | JetBrains Mono | 400 | 12px | normal | wider | uppercase | white/30 |

### Italic Usage

Instrument Serif italic is used for emphasis words within headlines: "decisions", "projects", "product studio", "great", etc.

---

## 4. LAYOUT STRUCTURE

### Global Container
- max-width: 1240px
- margin: 0 auto
- padding: 0 24px (mobile), 0 40px (desktop lg+)

### Navbar (fixed, z-50)
- Height: 72px
- Background: always `bg-background` (#f7f5f2), never transparent
- Border-bottom: 1px solid var(--border)
- Inner max-width: 1240px
- Layout: flex, justify-between, align-center
- Logo: 32px circle (bg-foreground) + 15px semibold text
- Nav pills: border container with rounded-full, 1px border
  - Each link: 13px, px-4, py-1.5, rounded-full
  - Active: bg-foreground, text-primary-foreground
  - Inactive: text-muted-foreground
- Right: "Log in" text link + "Talk to us" pill button
- Mobile: hamburger icon → full-screen overlay with 28px serif links

### Hero Sections (all pages)
- padding-top: 72px (navbar offset)
- border-bottom: 1px solid var(--border)
- Grid: 1 col mobile, 2 col desktop (1fr 1fr or 1.2fr 1fr)
- Left: text content with vertical padding 80-112px
- Right: illustration/image with border-left, centered at bottom
- Mobile: right column hidden (md:flex)

### Stats Strip (Index, About)
- Grid: 2 cols mobile, 4 cols desktop
- Each cell: px-6/10, py-6/8, border-right
- Labels: 11px mono uppercase
- Values: 28-32px mono semibold or serif

### Content Sections
- Always border-bottom on each section
- Padding: py-16 (64px) or py-20 (80px)
- Grid structures: 1 col → 2 col at md, or 1 col → 3 col at md
- Internal borders: border-right between columns, border-top between rows

### List Rows (projects, services, jobs, blog posts)
- flex, justify-between, align-center
- py-5 (20px)
- border-top: 1px solid var(--border)
- Hover: background-color transitions to secondary
- Arrow: "→" with translate-x on hover

### Footer (section-dark)
- Background: hsl(0 0% 8%) = #141414
- All text: white with varying opacity (30%, 40%, 50%, 60%)
- CTA band: serif heading + white pill button
- Links grid: 5 cols on desktop, 2 cols mobile
- Bottom bar: logo + copyright + social icons
- Social icons: 16x16 SVGs, white/30 → white on hover

### Mobile Collapse Behavior
- All 2-3 column grids → single column on mobile
- Right illustration columns: hidden on mobile
- Border-right → border-bottom on mobile
- Stats: 2 columns maintained on mobile
- Padding reduces from px-10 to px-6

---

## 5. ANIMATION & MOTION SPEC

### Spring Presets

```javascript
gentle: { type: "spring", stiffness: 120, damping: 20, mass: 1 }
snappy: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
bouncy: { type: "spring", stiffness: 400, damping: 25, mass: 0.6 }
slow:   { type: "spring", stiffness: 80,  damping: 20, mass: 1.2 }
```

### Page Transitions (AnimatePresence)
- **Trigger**: Route change
- **Enter**: opacity 0→1, y 8→0, spring(260, 30, 0.8)
- **Exit**: opacity 1→0, y 0→-6, spring(260, 30, 0.8)
- **Mode**: "wait" (exit completes before enter)

### Hero Entrance Animations
- **H1**: opacity 0→1, y 20→0, blur 8px→0px, spring(100, 20), delay 0.1s
- **Paragraph**: opacity 0→1, y 16→0, spring(100, 20), delay 0.25s
- **CTA buttons**: opacity 0→1, y 12→0, spring(100, 20), delay 0.4s
- **Illustration**: opacity 0→1, scale 0.95→1, spring(80, 20), delay 0.3s

### Scroll Reveal (Reveal component)
- **Trigger**: Element enters viewport (IntersectionObserver, threshold 0.15)
- **Start**: opacity 0, y 24px, blur 4px
- **End**: opacity 1, y 0, blur 0
- **Transition**: spring(120, 20, 1) — "gentle" preset
- **Once**: true (only triggers once)

### Stagger Container
- **Trigger**: Container enters viewport (threshold 0.1)
- **Children delay**: staggerChildren 0.08s, delayChildren 0.1s
- **Each child start**: opacity 0, y 20, blur 3px
- **Each child end**: opacity 1, y 0, blur 0
- **Transition per child**: spring(120, 20, 1)

### Hover Interactions
- **HoverLift (cards)**: y → -2px on hover, spring(300, 30, 0.8)
- **MagneticButton**: scale → 1.03 on hover, spring(300, 30, 0.8); scale → 0.97 on tap
- **List row arrows**: translate-x → 4px on hover, spring(300, 20)
- **Image zoom**: scale → 1.03-1.08 on hover, spring(200, 20)
- **List row background**: background-color transition 0.2s ease to secondary

### Count-Up Animation
- **Trigger**: Element enters viewport (threshold 0.3)
- **Duration**: 1200-1600ms
- **Easing**: Exponential ease-out: `1 - Math.pow(2, -10 * progress)`
- **Values**: 0 → target number (e.g., 12, 5)

### CSS Keyframe Animations
```css
/* Blur-in (used in detail pages) */
@keyframes blur-in {
  from { opacity: 0; filter: blur(6px); transform: translateY(4px); }
  to   { opacity: 1; filter: blur(0);   transform: translateY(0); }
}
/* Duration: 0.7s, easing: cubic-bezier(0.16, 1, 0.3, 1) */
/* Stagger via style={{ animationDelay: "150ms" }} */

/* Slide-in (mobile menu) */
@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* Duration: 0.45s, easing: cubic-bezier(0.16, 1, 0.3, 1) */
/* Stagger: 50ms per item */
```

---

## 6. COMPONENT BREAKDOWN

### Navbar
- **HTML**: `<nav>` fixed, contains inner div with logo, pill nav, right actions
- **Logo**: 32px circle div + 15px span
- **Nav pills**: Container div with `border rounded-full px-1 py-0.5`, each Link inside with `rounded-full px-4 py-1.5`
- **Active state**: `bg-foreground text-primary-foreground font-medium`
- **Hover state**: `text-muted-foreground → text-foreground`
- **Mobile menu**: Full-screen fixed overlay, 28px serif links with slide-in animation
- **Scroll behavior**: Always opaque white, no transparency change

### Footer
- **Background**: `hsl(0 0% 8%)` dark
- **CTA section**: 2-col grid, left has heading + button, right has "Est. 2026"
- **Links section**: 5-col grid with "Back to top", Studio links, Services links, Connect links, Talk to us
- **Social icons**: Facebook, LinkedIn, Behance, Dribbble as 16x16 SVG inline icons
- **Link hover**: `text-white/50 → text-white`, `underline underline-offset-4`

### Buttons
- **Primary pill**: `bg-foreground text-primary-foreground px-6 py-2.5-3 rounded-full`
- **Text**: 12px, semibold, uppercase, tracking-wider
- **Hover**: `bg-foreground/90`
- **Wrapped in MagneticButton** for scale animation

### List Rows
- **Structure**: flex row, justify-between, py-5, border-top
- **Left**: year (mono 12px) + title (15-16px semibold)
- **Right**: category (12px muted) + arrow
- **Hover**: background → secondary, title → muted-foreground, arrow translates right
- **Transition**: background 0.2s ease, color via transition-colors

### Cards (3-col grid items)
- **Container**: px-6/10, py-8, border-right, border-bottom on mobile
- **Title**: 16px semibold
- **Description**: 13px muted-foreground
- **Wrapped in HoverLift** for -2px y translation

### Form Inputs (Contact page)
- **Label**: 13px font-medium, mb-2
- **Input**: full width, px-4, py-3, 1px border, bg-background, 14px text
- **Placeholder**: muted-foreground/50
- **Focus**: ring-2 ring-foreground/10
- **No border-radius** (sharp corners)

### Team Members
- **Name**: Instrument Serif 18-22px italic
- **Photo container**: aspect-[3/4], bg-muted, overflow-hidden
- **Image**: grayscale, scale 1.04 on hover

---

## 7. COMPLETE SOURCE CODE (Single HTML File)

Below is the entire homepage rendered as a self-contained HTML file. For brevity and browser compatibility (no build tools), this covers the Index page with all components inline. Other pages follow identical patterns.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Horizon Studio — Design-first Product Studio</title>
  <meta name="description" content="We design and build products worth shipping. A design-first product studio for startups and growing companies.">
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <style>
    /* ═══════ RESET ═══════ */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #f7f5f2;
      color: #141414;
    }
    a { text-decoration: none; color: inherit; }
    button { cursor: pointer; border: none; background: none; font: inherit; }
    img { display: block; max-width: 100%; }
    ul { list-style: none; }
    ::selection { background: rgba(20,20,20,0.12); color: #141414; }

    /* ═══════ DESIGN TOKENS ═══════ */
    :root {
      --bg: #f7f5f2;
      --fg: #141414;
      --muted: #757575;
      --border: #dedede;
      --secondary: #f2efe9;
      --accent: #ece8e1;
      --radius: 8px;
    }

    /* ═══════ SCROLLBAR ═══════ */
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--secondary); }
    ::-webkit-scrollbar-thumb { background: #c7c7c7; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #999; }

    /* ═══════ UTILITY ═══════ */
    .font-serif { font-family: 'Instrument Serif', Georgia, serif; }
    .font-mono { font-family: 'JetBrains Mono', 'SF Mono', monospace; }
    .container { max-width: 1240px; margin: 0 auto; }
    .border-b { border-bottom: 1px solid var(--border); }
    .border-t { border-top: 1px solid var(--border); }
    .border-r { border-right: 1px solid var(--border); }
    .border-l { border-left: 1px solid var(--border); }

    /* ═══════ NAVBAR ═══════ */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 50;
      background: var(--bg);
      border-bottom: 1px solid var(--border);
      height: 72px;
    }
    .navbar-inner {
      max-width: 1240px; margin: 0 auto;
      padding: 0 24px; height: 72px;
      display: flex; align-items: center; justify-content: space-between;
    }
    @media (min-width: 1024px) { .navbar-inner { padding: 0 40px; } }

    .logo { display: flex; align-items: center; gap: 10px; }
    .logo-circle {
      width: 32px; height: 32px; border-radius: 50%;
      background: var(--fg); display: flex; align-items: center; justify-content: center;
    }
    .logo-circle span { font-size: 11px; font-weight: 700; color: var(--bg); }
    .logo-text { font-size: 15px; font-weight: 600; color: var(--fg); letter-spacing: -0.02em; }

    .nav-pills {
      display: none; align-items: center; gap: 2px;
      border: 1px solid var(--border); border-radius: 9999px; padding: 2px 4px;
    }
    @media (min-width: 768px) { .nav-pills { display: flex; } }
    .nav-pill {
      font-size: 13px; padding: 6px 16px; border-radius: 9999px;
      transition: all 0.2s; color: var(--muted);
    }
    .nav-pill:hover { color: var(--fg); }
    .nav-pill.active { background: var(--fg); color: var(--bg); font-weight: 500; }

    .nav-right { display: none; align-items: center; gap: 16px; }
    @media (min-width: 768px) { .nav-right { display: flex; } }
    .nav-login { font-size: 13px; color: var(--muted); transition: color 0.2s; }
    .nav-login:hover { color: var(--fg); }
    .nav-cta {
      font-size: 12px; font-weight: 600; background: var(--fg); color: var(--bg);
      padding: 8px 20px; border-radius: 9999px; transition: background 0.2s;
    }
    .nav-cta:hover { background: rgba(20,20,20,0.9); }

    .hamburger { display: block; padding: 8px; color: var(--fg); }
    @media (min-width: 768px) { .hamburger { display: none; } }

    /* ═══════ MOBILE MENU ═══════ */
    .mobile-menu {
      position: fixed; inset: 0; z-index: 100; background: var(--bg);
      opacity: 0; pointer-events: none; transition: opacity 0.3s;
    }
    .mobile-menu.open { opacity: 1; pointer-events: auto; }
    .mobile-menu-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 24px; height: 72px; border-bottom: 1px solid var(--border);
    }
    .mobile-menu-links { display: flex; flex-direction: column; padding: 32px 24px; }
    .mobile-menu-link {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 28px; color: var(--fg); padding: 16px 0;
      border-bottom: 1px solid var(--border); transition: color 0.2s;
      animation: slide-in-right 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .mobile-menu-link:hover { color: var(--muted); }

    /* ═══════ HERO ═══════ */
    .hero { padding-top: 72px; border-bottom: 1px solid var(--border); }
    .hero-inner {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr; min-height: calc(100vh - 72px);
    }
    @media (min-width: 768px) { .hero-inner { grid-template-columns: 1fr 1fr; } }

    .hero-text {
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 64px 24px 64px;
    }
    @media (min-width: 1024px) { .hero-text { padding: 80px 40px 80px; } }

    .hero-h1 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 42px; line-height: 1.06; color: var(--fg);
      animation: blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
    }
    @media (min-width: 768px) { .hero-h1 { font-size: 52px; } }
    @media (min-width: 1024px) { .hero-h1 { font-size: 60px; } }

    .hero-p {
      font-size: 15px; color: var(--muted); margin-top: 24px; max-width: 400px;
      line-height: 1.625;
      animation: blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
    }
    .hero-actions {
      display: flex; align-items: center; gap: 16px; margin-top: 32px;
      animation: blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
    }
    .btn-primary {
      font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
      background: var(--fg); color: var(--bg);
      padding: 12px 24px; border-radius: 9999px;
      display: inline-flex; align-items: center;
      transition: background 0.2s, transform 0.1s;
    }
    .btn-primary:hover { background: rgba(20,20,20,0.9); transform: scale(1.03); }
    .btn-primary:active { transform: scale(0.97); }

    .btn-text {
      font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
      color: var(--muted); display: flex; align-items: center; gap: 6px;
      transition: color 0.2s;
    }
    .btn-text:hover { color: var(--fg); }

    .hero-illustration {
      display: none; align-items: flex-end; justify-content: center;
      border-left: 1px solid var(--border); padding: 0 40px;
      animation: blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
    }
    @media (min-width: 768px) { .hero-illustration { display: flex; } }
    .hero-illustration img { width: 100%; max-width: 480px; height: auto; object-fit: contain; }

    /* ═══════ STATS STRIP ═══════ */
    .stats-strip { border-bottom: 1px solid var(--border); }
    .stats-grid {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
    .stat-cell { padding: 24px; border-right: 1px solid var(--border); }
    @media (min-width: 1024px) { .stat-cell { padding: 24px 40px; } }
    .stat-cell:last-child { border-right: none; }
    .stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;
      color: var(--muted);
    }
    .stat-value { font-size: 28px; color: var(--fg); margin-top: 4px; }
    .stat-value.mono { font-family: 'JetBrains Mono', monospace; font-weight: 600; }
    .stat-value.serif { font-family: 'Instrument Serif', serif; }

    /* ═══════ SECTION HEADERS ═══════ */
    .section { border-bottom: 1px solid var(--border); }
    .section-inner { max-width: 1240px; margin: 0 auto; padding: 64px 24px; }
    @media (min-width: 1024px) { .section-inner { padding: 80px 40px; } }
    .section-header { padding: 48px 24px; }
    @media (min-width: 1024px) { .section-header { padding: 48px 40px; } }

    .section-h2 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 28px; line-height: 1.1; color: var(--fg);
    }
    @media (min-width: 768px) { .section-h2 { font-size: 36px; } }
    .section-h2.lg { font-size: 32px; }
    @media (min-width: 768px) { .section-h2.lg { font-size: 40px; } }

    /* ═══════ THREE-COL CARDS ═══════ */
    .cards-grid {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr;
      border-top: 1px solid var(--border);
    }
    @media (min-width: 768px) { .cards-grid { grid-template-columns: repeat(3, 1fr); } }
    .card-item {
      padding: 32px 24px; border-bottom: 1px solid var(--border);
      transition: background 0.2s, transform 0.3s;
    }
    @media (min-width: 768px) {
      .card-item { border-bottom: none; border-right: 1px solid var(--border); }
      .card-item:last-child { border-right: none; }
    }
    @media (min-width: 1024px) { .card-item { padding: 32px 40px; } }
    .card-item:hover { transform: translateY(-2px); }
    .card-title { font-size: 16px; font-weight: 600; color: var(--fg); margin-bottom: 12px; line-height: 1.375; }
    .card-desc { font-size: 13px; color: var(--muted); line-height: 1.625; }

    /* ═══════ PROCESS STEPS ═══════ */
    .steps { margin-top: 40px; }
    .step-row {
      display: grid; grid-template-columns: 32px 1fr; gap: 16px;
      padding: 24px 0; border-top: 1px solid var(--border);
    }
    @media (min-width: 768px) { .step-row { grid-template-columns: 48px 200px 1fr; gap: 24px; } }
    .step-num { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--muted); margin-top: 2px; }
    .step-title { font-size: 16px; font-weight: 600; color: var(--fg); }
    .step-desc { font-size: 13px; color: var(--muted); line-height: 1.625; grid-column: 2; }
    @media (min-width: 768px) { .step-desc { grid-column: 3; } }

    /* ═══════ BENTO (2-col image+text) ═══════ */
    .bento {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr;
    }
    @media (min-width: 768px) { .bento { grid-template-columns: 1fr 1fr; } }
    .bento-text {
      padding: 64px 24px; display: flex; flex-direction: column; justify-content: center;
    }
    @media (min-width: 768px) { .bento-text { border-right: 1px solid var(--border); } }
    @media (min-width: 1024px) { .bento-text { padding: 80px 40px; } }
    .bento-image img { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3; }

    /* ═══════ LIST ROWS (projects, services, jobs) ═══════ */
    .list-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 0; border-top: 1px solid var(--border);
      transition: background-color 0.2s;
    }
    .list-row:hover { background-color: var(--secondary); }
    .list-row-left { display: flex; align-items: center; gap: 24px; }
    .list-row-year { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--muted); width: 64px; }
    .list-row-title { font-size: 16px; font-weight: 600; color: var(--fg); transition: color 0.2s; }
    .list-row:hover .list-row-title { color: var(--muted); }
    .list-row-right { display: flex; align-items: center; gap: 16px; }
    .list-row-category { font-size: 12px; color: var(--muted); display: none; }
    @media (min-width: 640px) { .list-row-category { display: block; } }
    .list-row-arrow { color: var(--fg); transition: transform 0.2s; }
    .list-row:hover .list-row-arrow { transform: translateX(4px); }

    /* ═══════ TEAM GRID ═══════ */
    .team-grid {
      display: grid; grid-template-columns: repeat(2, 1fr);
      border-top: 1px solid var(--border);
    }
    @media (min-width: 640px) { .team-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (min-width: 768px) { .team-grid { grid-template-columns: repeat(5, 1fr); } }
    .team-member { padding: 16px 20px 24px; border-right: 1px solid var(--border); transition: transform 0.3s; }
    .team-member:last-child { border-right: none; }
    .team-member:hover { transform: translateY(-2px); }
    .team-name {
      font-family: 'Instrument Serif', serif; font-size: 18px; font-style: italic;
      color: var(--fg); margin-bottom: 8px;
    }
    .team-name-last { color: rgba(20,20,20,0.6); }
    .team-photo {
      aspect-ratio: 3/4; background: var(--secondary); overflow: hidden; margin-bottom: 12px;
    }
    .team-photo img {
      width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .team-member:hover .team-photo img { transform: scale(1.04); }

    /* ═══════ CASE STUDY ═══════ */
    .case-study {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr;
    }
    @media (min-width: 768px) { .case-study { grid-template-columns: 1fr 1fr; } }
    .case-text { padding: 64px 24px; border-right: 1px solid var(--border); }
    @media (min-width: 1024px) { .case-text { padding: 80px 40px; } }
    .case-label {
      font-family: 'JetBrains Mono', monospace; font-size: 11px;
      text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); margin-bottom: 16px;
    }
    .case-quote { font-size: 14px; color: var(--muted); line-height: 1.625; margin-top: 16px; max-width: 400px; }
    .case-author { display: flex; align-items: center; gap: 12px; margin-top: 24px; }
    .case-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--secondary); }
    .case-author-name { font-size: 13px; font-weight: 600; color: var(--fg); }
    .case-author-role { font-size: 12px; color: var(--muted); }
    .case-stats {
      display: grid; grid-template-columns: 1fr 1fr; margin-top: 40px;
      border-top: 1px solid var(--border);
    }
    .case-stat { padding: 16px 0; }
    .case-stat:first-child { padding-right: 24px; border-right: 1px solid var(--border); }
    .case-stat:last-child { padding-left: 24px; }
    .case-image img { width: 100%; height: 100%; object-fit: cover; }

    /* ═══════ FOOTER ═══════ */
    .footer { background: #141414; color: #f5f3ef; }
    .footer-cta {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    @media (min-width: 768px) { .footer-cta { grid-template-columns: 1fr 1fr; } }
    .footer-cta-text { padding: 64px 24px 80px; }
    @media (min-width: 1024px) { .footer-cta-text { padding: 80px 40px; } }
    .footer-cta h2 {
      font-family: 'Instrument Serif', serif; font-size: 32px; line-height: 1.1; color: white;
    }
    @media (min-width: 768px) { .footer-cta h2 { font-size: 40px; } }
    .footer-cta-btn {
      display: inline-flex; margin-top: 24px;
      font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
      background: white; color: var(--fg);
      padding: 10px 24px; border-radius: 9999px; transition: background 0.2s;
    }
    .footer-cta-btn:hover { background: rgba(255,255,255,0.9); }
    .footer-cta-right {
      display: none; border-left: 1px solid rgba(255,255,255,0.1);
      align-items: flex-end; justify-content: flex-end; padding: 40px;
    }
    @media (min-width: 768px) { .footer-cta-right { display: flex; } }
    .footer-est-label {
      font-family: 'JetBrains Mono', monospace; font-size: 11px;
      text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.3);
    }
    .footer-est-year {
      font-family: 'Instrument Serif', serif; font-size: 48px;
      font-style: italic; color: rgba(255,255,255,0.2);
    }

    .footer-links {
      max-width: 1240px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;
      padding: 48px 24px; border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    @media (min-width: 768px) { .footer-links { grid-template-columns: repeat(5, 1fr); padding: 48px 40px; } }
    .footer-col-label {
      font-family: 'JetBrains Mono', monospace; font-size: 12px;
      text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.3);
      margin-bottom: 16px;
    }
    .footer-col a {
      display: block; font-size: 13px; color: rgba(255,255,255,0.5);
      margin-bottom: 10px; transition: color 0.2s;
    }
    .footer-col a:hover { color: white; text-decoration: underline; text-underline-offset: 4px; }
    .back-to-top {
      font-family: 'JetBrains Mono', monospace; font-size: 12px;
      text-transform: uppercase; letter-spacing: 0.05em;
      color: rgba(255,255,255,0.4); transition: color 0.2s;
    }
    .back-to-top:hover { color: white; }

    .footer-bottom {
      max-width: 1240px; margin: 0 auto; padding: 24px;
      display: flex; flex-direction: column; gap: 16px;
      align-items: flex-start;
    }
    @media (min-width: 768px) {
      .footer-bottom { flex-direction: row; align-items: center; justify-content: space-between; padding: 24px 40px; }
    }
    .footer-brand { display: flex; align-items: center; gap: 8px; }
    .footer-logo {
      width: 28px; height: 28px; border-radius: 50%;
      background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;
    }
    .footer-logo span { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.6); }
    .footer-brand-name { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6); }
    .footer-copyright { font-size: 11px; color: rgba(255,255,255,0.3); }
    .footer-social { display: flex; gap: 20px; }
    .footer-social a { color: rgba(255,255,255,0.3); transition: color 0.2s; }
    .footer-social a:hover { color: white; }

    /* ═══════ SCROLL REVEAL ═══════ */
    .scroll-fade {
      opacity: 0; transform: translateY(20px);
      transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
    }
    .scroll-fade.visible { opacity: 1; transform: translateY(0); }

    /* ═══════ KEYFRAMES ═══════ */
    @keyframes blur-in {
      from { opacity: 0; filter: blur(6px); transform: translateY(4px); }
      to { opacity: 1; filter: blur(0); transform: translateY(0); }
    }
    @keyframes slide-in-right {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

  <!-- ═══════ NAVBAR ═══════ -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="/" class="logo">
        <div class="logo-circle"><span>H</span></div>
        <span class="logo-text">Horizon Studio</span>
      </a>
      <div class="nav-pills">
        <a href="/work" class="nav-pill">Work</a>
        <a href="/about" class="nav-pill">About</a>
        <a href="/blog" class="nav-pill">Blog</a>
        <a href="/careers" class="nav-pill">Careers</a>
      </div>
      <div class="nav-right">
        <a href="/contact" class="nav-login">Log in</a>
        <a href="/contact" class="nav-cta">Talk to us</a>
      </div>
      <button class="hamburger" onclick="document.getElementById('mobile-menu').classList.add('open')">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="15" x2="19" y2="15"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- ═══════ MOBILE MENU ═══════ -->
  <div id="mobile-menu" class="mobile-menu">
    <div class="mobile-menu-header">
      <a href="/" class="logo"><div class="logo-circle"><span>H</span></div></a>
      <button onclick="document.getElementById('mobile-menu').classList.remove('open')" style="padding:8px;color:var(--fg)">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="5" y1="5" x2="17" y2="17"/><line x1="17" y1="5" x2="5" y2="17"/>
        </svg>
      </button>
    </div>
    <div class="mobile-menu-links">
      <a href="/work" class="mobile-menu-link" style="animation-delay:0ms">Work</a>
      <a href="/about" class="mobile-menu-link" style="animation-delay:50ms">About</a>
      <a href="/blog" class="mobile-menu-link" style="animation-delay:100ms">Blog</a>
      <a href="/careers" class="mobile-menu-link" style="animation-delay:150ms">Careers</a>
      <a href="/contact" class="mobile-menu-link" style="animation-delay:200ms">Contact</a>
    </div>
  </div>

  <!-- ═══════ HERO ═══════ -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <h1 class="hero-h1">The product studio for high-stakes <em>decisions</em></h1>
        <p class="hero-p">We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.</p>
        <div class="hero-actions">
          <a href="/contact" class="btn-primary">Get started →</a>
          <a href="/work" class="btn-text">
            See why
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="hero-illustration">
        <div style="width:100%;max-width:480px;aspect-ratio:1;background:var(--secondary);display:flex;align-items:center;justify-content:center">
          <span style="font-family:'Instrument Serif';font-size:120px;color:var(--border);font-style:italic">H</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════ STATS STRIP ═══════ -->
  <section class="stats-strip">
    <div class="stats-grid">
      <div class="stat-cell">
        <p class="stat-label">Avg. Delivery</p>
        <p class="stat-value serif">8 weeks</p>
      </div>
      <div class="stat-cell">
        <p class="stat-label">Projects</p>
        <p class="stat-value mono" id="stat-projects">0+</p>
      </div>
      <div class="stat-cell">
        <p class="stat-label">Team</p>
        <p class="stat-value mono" id="stat-team">0</p>
      </div>
      <div class="stat-cell" style="border-right:none">
        <p class="stat-label">Fee</p>
        <p class="stat-value mono">$0</p>
      </div>
    </div>
  </section>

  <!-- ═══════ MATTERS MOST ═══════ -->
  <section class="section">
    <div class="container">
      <div class="section-header scroll-fade">
        <h2 class="section-h2 lg">Horizon Studio matters most for high-stakes <em>decisions</em></h2>
      </div>
      <div class="cards-grid">
        <div class="card-item scroll-fade">
          <h3 class="card-title">You're building your first product →</h3>
          <p class="card-desc">First-time founders need a partner who can translate vision into a shippable product — without burning through runway.</p>
        </div>
        <div class="card-item scroll-fade">
          <h3 class="card-title">Your product needs a redesign →</h3>
          <p class="card-desc">Existing products that have outgrown their original design need a strategic rethink, not just a reskin.</p>
        </div>
        <div class="card-item scroll-fade">
          <h3 class="card-title">You need to ship faster →</h3>
          <p class="card-desc">Scaling teams need design and engineering support that integrates seamlessly with their existing workflows.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════ HOW WE ADD VALUE ═══════ -->
  <section class="section">
    <div class="section-inner">
      <h2 class="section-h2 lg scroll-fade">How we add value</h2>
      <div class="steps">
        <div class="step-row scroll-fade">
          <span class="step-num font-mono">1</span>
          <h3 class="step-title">See what's at stake</h3>
          <p class="step-desc">We map your product landscape, users, and constraints before proposing anything.</p>
        </div>
        <div class="step-row scroll-fade">
          <span class="step-num font-mono">1</span>
          <h3 class="step-title">Work from first principles</h3>
          <p class="step-desc">We prototype and test ideas with real users before committing to code.</p>
        </div>
        <div class="step-row scroll-fade">
          <span class="step-num font-mono">3</span>
          <h3 class="step-title">Move with conviction</h3>
          <p class="step-desc">We ship production-grade code incrementally — with full visibility every week.</p>
        </div>
      </div>
      <div class="scroll-fade" style="margin-top:24px;padding-top:24px;border-top:1px solid var(--border)">
        <a href="/about" class="btn-primary">Learn more →</a>
      </div>
    </div>
  </section>

  <!-- ═══════ BENTO ═══════ -->
  <section class="section">
    <div class="bento">
      <div class="bento-text scroll-fade">
        <h2 class="section-h2">Let us <em>show you</em> our best work</h2>
        <p style="font-size:14px;color:var(--muted);margin-top:16px;max-width:380px;line-height:1.625">Every project gets our full attention. We don't scale — we focus.</p>
      </div>
      <div class="bento-image scroll-fade">
        <div style="width:100%;aspect-ratio:4/3;background:var(--secondary)"></div>
      </div>
    </div>
  </section>

  <!-- ═══════ SELECTED PROJECTS ═══════ -->
  <section class="section">
    <div class="section-inner">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:8px" class="scroll-fade">
        <h2 class="section-h2">Selected <em>projects</em></h2>
        <a href="/work" class="font-mono" style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:0.05em;transition:color 0.2s">View all →</a>
      </div>
      <a href="/work/branch-management" class="list-row scroll-fade">
        <div class="list-row-left">
          <span class="list-row-year">2025</span>
          <h3 class="list-row-title">Branch Management System</h3>
        </div>
        <div class="list-row-right">
          <span class="list-row-category">Product Design</span>
          <span class="list-row-arrow">→</span>
        </div>
      </a>
      <a href="/work/evwork" class="list-row scroll-fade">
        <div class="list-row-left">
          <span class="list-row-year">2025</span>
          <h3 class="list-row-title">EVwork Platform</h3>
        </div>
        <div class="list-row-right">
          <span class="list-row-category">UI/UX Design</span>
          <span class="list-row-arrow">→</span>
        </div>
      </a>
      <a href="/work/ecommerce-app" class="list-row scroll-fade">
        <div class="list-row-left">
          <span class="list-row-year">2024</span>
          <h3 class="list-row-title">E-Commerce Mobile App</h3>
        </div>
        <div class="list-row-right">
          <span class="list-row-category">Design + Dev</span>
          <span class="list-row-arrow">→</span>
        </div>
      </a>
    </div>
  </section>

  <!-- ═══════ TEAM ═══════ -->
  <section class="section">
    <div class="container">
      <div class="section-header scroll-fade">
        <h2 class="section-h2">Meet the <em>advisors</em> you'll work with</h2>
      </div>
      <div class="team-grid">
        <div class="team-member scroll-fade">
          <p class="team-name">Saad<br><span class="team-name-last">R.</span></p>
          <div class="team-photo"><div style="width:100%;height:100%;background:var(--accent)"></div></div>
        </div>
        <div class="team-member scroll-fade">
          <p class="team-name">Joy<br><span class="team-name-last">S.</span></p>
          <div class="team-photo"><div style="width:100%;height:100%;background:var(--accent)"></div></div>
        </div>
        <div class="team-member scroll-fade">
          <p class="team-name">Maqibul<br><span class="team-name-last">T.</span></p>
          <div class="team-photo"><div style="width:100%;height:100%;background:var(--accent)"></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════ CASE STUDY ═══════ -->
  <section class="section">
    <div class="case-study scroll-fade">
      <div class="case-text">
        <p class="case-label">Client Spotlight</p>
        <h2 class="section-h2">How we redesigned a fashion brand's <em>mobile experience</em></h2>
        <p class="case-quote">"They understood our product from day one. The team was responsive, opinionated in the best way, and delivered something we're genuinely proud of."</p>
        <div class="case-author">
          <div class="case-avatar"></div>
          <div>
            <p class="case-author-name">Sarah K.</p>
            <p class="case-author-role">Founder, Fashion Startup</p>
          </div>
        </div>
        <div class="case-stats">
          <div class="case-stat">
            <p class="stat-label">Conversion</p>
            <p class="stat-value mono">+40%</p>
          </div>
          <div class="case-stat">
            <p class="stat-label">Timeline</p>
            <p class="stat-value mono">8 wks</p>
          </div>
        </div>
        <div style="margin-top:24px">
          <a href="/work/ecommerce-app" class="btn-primary">Read case study →</a>
        </div>
      </div>
      <div class="case-image">
        <div style="width:100%;height:100%;background:var(--accent);min-height:400px"></div>
      </div>
    </div>
  </section>

  <!-- ═══════ FOOTER ═══════ -->
  <footer class="footer">
    <div class="footer-cta">
      <div class="footer-cta-text">
        <h2>Ready to build something <em>great?</em></h2>
        <a href="/contact" class="footer-cta-btn">Talk to us →</a>
      </div>
      <div class="footer-cta-right">
        <div style="text-align:right">
          <p class="footer-est-label">Est.</p>
          <p class="footer-est-year">2026</p>
        </div>
      </div>
    </div>

    <div class="footer-links">
      <div>
        <button class="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">Back to top ↑</button>
      </div>
      <div class="footer-col">
        <p class="footer-col-label">Studio</p>
        <a href="/">Homepage</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </div>
      <div class="footer-col">
        <p class="footer-col-label">Services</p>
        <a href="/work">Product Design</a>
        <a href="/work">Development</a>
        <a href="/work">Strategy</a>
      </div>
      <div class="footer-col">
        <p class="footer-col-label">Connect</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </div>
      <div style="text-align:right">
        <a href="/contact" class="font-mono" style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:rgba(255,255,255,0.5);transition:color 0.2s">Talk to us →</a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-brand">
        <div class="footer-logo"><span>H</span></div>
        <span class="footer-brand-name">Horizon Studio</span>
      </div>
      <p class="footer-copyright">© 2026 Horizon Studio. All rights reserved.</p>
      <div class="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.95.25H0v-14.76h6.938zm-.71 5.87c.55 0 1.01-.15 1.36-.45.348-.3.517-.733.517-1.28 0-.32-.06-.58-.18-.79-.12-.21-.27-.38-.47-.5-.2-.12-.42-.2-.67-.24-.25-.04-.5-.06-.77-.06H3.41v3.32h2.817zm.19 6.12c.28 0 .56-.03.83-.08.27-.05.51-.14.72-.27.21-.13.38-.31.51-.55.13-.24.19-.55.19-.93 0-.74-.21-1.27-.62-1.58-.41-.31-.96-.47-1.63-.47H3.41v3.89h2.997zm8.89-2.08c.37.42.92.63 1.65.63.52 0 .97-.13 1.36-.4.38-.27.62-.56.71-.87h2.35c-.37 1.15-.93 1.98-1.66 2.49-.74.51-1.63.77-2.7.77-.73 0-1.39-.12-1.98-.37-.59-.25-1.09-.6-1.51-1.05-.42-.45-.74-1-.97-1.63-.23-.63-.35-1.33-.35-2.09 0-.73.12-1.41.35-2.04.24-.63.57-1.17 1-1.62.43-.45.94-.81 1.53-1.07.59-.26 1.24-.39 1.95-.39.82 0 1.53.17 2.12.5.59.34 1.08.79 1.46 1.36.38.57.65 1.22.82 1.96.17.74.22 1.52.14 2.33h-7.02c.04.87.34 1.56.71 1.98zm2.89-4.38c-.3-.37-.77-.56-1.4-.56-.41 0-.75.07-1.02.22-.27.14-.49.33-.64.55-.15.22-.26.46-.32.72-.06.26-.1.5-.12.73h4.18c-.11-.75-.38-1.29-.68-1.66zM19.25 4.52h-5.75v1.52h5.75V4.52z"/></svg>
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.8 0-1.59.1-2.4.285v.146zM19.74 5.28c-.218.29-1.905 2.478-5.69 4.012.228.47.448.948.65 1.43.07.17.14.34.2.51 3.39-.425 6.75.26 7.09.338-.02-2.39-.88-4.59-2.25-6.29z"/></svg>
        </a>
      </div>
    </div>
  </footer>

  <script>
    /* ═══════ SCROLL REVEAL ═══════ */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));

    /* ═══════ COUNT-UP ═══════ */
    function countUp(elementId, target, duration) {
      const el = document.getElementById(elementId);
      if (!el) return;
      const suffix = elementId === 'stat-projects' ? '+' : '';
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          obs.unobserve(entry.target);
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      }, { threshold: 0.3 });
      obs.observe(el);
    }

    countUp('stat-projects', 12, 1400);
    countUp('stat-team', 5, 1200);

    /* ═══════ ACTIVE NAV ═══════ */
    const path = window.location.pathname;
    document.querySelectorAll('.nav-pill').forEach(pill => {
      if (path.startsWith(pill.getAttribute('href'))) {
        pill.classList.add('active');
      }
    });
  </script>

</body>
</html>
```

---

## 8. PAGE-BY-PAGE CONTENT DATA

### Work Page
**Services offered:** Product Design, UI/UX Design, Full-Stack Development, Branding & Identity, Product Strategy
**Process steps:** Discovery & Research, Prototyping & Testing, Incremental Delivery, Launch & Iteration
**Projects:** Branch Management System (2025, Product Design), EVwork Platform (2025, UI/UX Design), E-Commerce Mobile App (2024, Design + Development), Project Alpha (2026, Design + Development), Project Beta (2026, Development)

### About Page
**Team (full):**
1. Saad Rayhan — Creative Director & CEO
2. Joy Sorkar — CTO & Backend Developer
3. Maqibul Hossain Tamim — Product Designer & Sales Manager
4. Ishrat Jahan Rintu — Full Stack Developer & Business Development
5. Mahfuz — Full-Stack Developer & Sales Representative

**Values:** Design before code, Understand before execute, Communicate like partners, Say no when we should
**Stats:** 12+ projects, 5 team, Founded 2026, Based in Dhaka

### Blog Page
**Posts:** Design Systems at Scale (6 min), Why We Don't Use Sprints (5 min), Building for Early-Stage Startups (7 min), Typography Matters More Than You Think (4 min), Full-Stack With a Small Team (5 min), Saying No to Clients (4 min)

### Careers Page
**Design jobs:** Senior Product Designer (Remote/Dhaka, Full-time), Design Intern (Dhaka, Internship)
**Engineering jobs:** Frontend Engineer (Remote, Full-time), Full-Stack Developer (Remote/Dhaka, Full-time)

### Contact Page
**Email:** hello@horizonstudio.dev
**Location:** Dhaka, Bangladesh
**Availability:** Projects worldwide
**Form fields:** Name, Email, Company (optional), Project description (textarea)

---

## 9. COMPLETE REACT SOURCE REFERENCE

All React component files are listed above in the conversation context. The project uses:
- **React 18** + **React Router v6** (BrowserRouter, Routes, Route)
- **Framer Motion** for animations (motion, AnimatePresence, useInView)
- **Tailwind CSS** for styling (with semantic tokens from index.css)
- **Vite** as build tool
- **TypeScript**

### File Structure
```
src/
├── App.tsx                    # Router setup with PageTransition wrapper
├── main.tsx                   # React root render
├── index.css                  # Design tokens, keyframes, utilities
├── assets/                    # Images (illustration-hero.png, process-image.jpg, etc.)
├── components/
│   ├── Navbar.tsx             # Fixed nav with pill links, mobile overlay
│   ├── Footer.tsx             # Dark footer with CTA, links, social icons
│   ├── PageTransition.tsx     # AnimatePresence route transitions
│   ├── motion.tsx             # Reveal, StaggerContainer, StaggerItem, HoverLift, MagneticButton
│   └── ui/                    # shadcn/ui components
├── hooks/
│   └── useReveal.ts           # useReveal, useCountUp, useStaggerReveal
├── pages/
│   ├── Index.tsx              # Homepage
│   ├── Work.tsx               # All projects + services
│   ├── About.tsx              # Team, values, principles
│   ├── Blog.tsx               # Blog listing
│   ├── BlogDetail.tsx         # Single blog post
│   ├── Careers.tsx            # Job listings
│   ├── Contact.tsx            # Contact form
│   ├── ProjectDetail.tsx      # Single project case study
│   ├── JobDetail.tsx          # Single job posting
│   └── NotFound.tsx           # 404 page
```

---

*End of specification. This document contains everything needed to recreate the Horizon Studio website identically on any platform.*
