# Elite Podiatry — Awwwards-Worthy Website

A stunning, ultra-minimalist podiatrist practice website built with React, Tailwind CSS v4, and Framer Motion. Strict black (#000000) and white (#FFFFFF) palette with Swiss/Brutalist design aesthetics.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Tech Stack

| Technology | Purpose |
|---|---|
| **Vite 7** | Build tool & dev server |
| **React 19** | Component framework |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Intersection Observer** | Scroll-triggered reveals |

## Architecture

```
src/
├── components/          # Reusable UI components
│   ├── CustomCursor.jsx    # 40px follow cursor with hover expansion
│   ├── FloatingShapes.jsx  # Animated geometric background shapes
│   ├── MagneticButton.jsx  # Cursor-pull button with hover inversion
│   ├── Navbar.jsx          # Transparent→solid nav + hamburger menu
│   ├── ScrollReveal.jsx    # Fade+slide on viewport entry wrapper
│   ├── SectionMarker.jsx   # Large outlined section numbers (01, 02...)
│   └── TextReveal.jsx      # Letter-by-letter text animation
├── sections/            # Page sections
│   ├── Hero.jsx            # 100vh hero with parallax + scroll indicator
│   ├── Services.jsx        # 6-card grid with hover inversions
│   ├── About.jsx           # Asymmetric layout + pull quote
│   ├── Booking.jsx         # Black section with pricing card
│   ├── Testimonials.jsx    # Horizontal scroll carousel
│   └── Footer.jsx          # Inverted footer with social icons
├── App.jsx              # Main layout + load animation + FAB
├── main.jsx             # Entry point
└── index.css            # Theme, keyframes, utilities
```

## Customization

### Practice Info
Edit the text content directly in each section file:
- **Practice name**: `Navbar.jsx` and `App.jsx`
- **Suburb name**: `Hero.jsx` hero text
- **Services**: `Services.jsx` services array
- **Pricing/Hours**: `Booking.jsx`
- **Testimonials**: `Testimonials.jsx` testimonials array
- **Contact info**: `Footer.jsx`

### Colors
Strictly black/white. To adjust gray gradients, edit `index.css` theme values.

## Features

- ✅ Custom cursor with hover expansion
- ✅ Magnetic buttons (cursor-pull effect)
- ✅ Letter-by-letter text reveals
- ✅ Parallax scroll effects
- ✅ Floating geometric shapes
- ✅ Service card hover inversions (black↔white)
- ✅ Horizontal testimonial carousel
- ✅ Sticky floating "Book Now" FAB
- ✅ Transparent→solid navbar on scroll
- ✅ Mobile hamburger menu with staggered animations
- ✅ Trust badges (AHPRA, Bulk Billing, DVA)
- ✅ New Patient Special diagonal stripe banner
- ✅ Responsive (mobile/tablet/desktop)
- ✅ Semantic HTML5 + ARIA labels
- ✅ Zero console errors
