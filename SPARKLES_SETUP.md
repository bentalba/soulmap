# Soulmap - Installation & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - Enjoy the celestial sparkles! ✨

---

## ✨ Sparkles Theme Features

### What's Included
The sparkles theme is now integrated across **all pages** of the Soulmap website:

- ✅ **Home** - Full cosmic experience with hero section
- ✅ **Services** - Journey through the stars
- ✅ **About** - Meet Yusra page
- ✅ **Book** - Celestial booking form
- ✅ **404 (NotFound)** - Lost in the cosmos page

### Technical Implementation

#### Dual-Layer Particle System
1. **SparklesCore Layer** (tsparticles)
   - 120 interactive golden particles
   - Click-to-spawn functionality
   - Smooth fade-in animations
   - FPS-optimized at 120fps

2. **Canvas Layer** (legacy particles)
   - 100 traditional stardust particles
   - Continuous floating motion
   - Complementary to SparklesCore

#### Theme-Aware Contrast Settings

**Dark Mode:**
- Particle Color: `#D4AF37` (Bright Gold)
- Canvas Opacity: `0.3`
- Optimal visibility on dark backgrounds

**Light Mode:**
- Particle Color: `#8A6423` (Darker Gold)
- Canvas Opacity: `0.2`
- Enhanced contrast on light backgrounds

### Performance Optimizations

- **Particle Density**: 120 (balanced for performance)
- **Particle Size**: 0.6px - 2px (subtle yet visible)
- **Movement Speed**: 0.05 - 0.5 (gentle, elegant motion)
- **Opacity Range**: 0.2 - 0.8 (prevents overwhelming effect)
- **Animation Speed**: 0.8 (smooth transitions)

### Z-Index Hierarchy
```
z-50:  Navbar (always on top)
z-10:  Page content (Hero, sections, etc.)
z-0:   CosmicBackground (sparkles + canvas)
```

---

## 🎨 Color System

### Cosmic Theme Colors
- **Space Navy**: `hsl(234, 75%, 11%)` - Background
- **Starlight Gold**: `hsl(43, 64%, 52%)` - Primary/Particles
- **Nebula Purple**: `hsl(271, 61%, 40%)` - Secondary
- **Cosmic Silver**: `hsl(0, 0%, 69%)` - Muted text

### Theme Toggle
- Users can switch between Light, Dark, and System themes
- Particles automatically adjust color for optimal contrast
- Theme preference persists via localStorage

---

## 📦 Key Dependencies

```json
{
  "@tsparticles/engine": "^3.8.0",
  "@tsparticles/react": "^3.0.0",
  "@tsparticles/slim": "^3.8.0",
  "framer-motion": "^11.15.0",
  "next-themes": "^0.3.0"
}
```

---

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🌟 Customization

To adjust sparkles settings, edit `/src/components/CosmicBackground.tsx`:

```tsx
<SparklesCore
  id="cosmic-sparkles"
  background="transparent"
  minSize={0.6}              // Min particle size
  maxSize={2}                // Max particle size
  particleDensity={120}      // Number of particles
  particleColor={...}        // Theme-based color
  speed={0.8}                // Animation speed
/>
```

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Performance Tips

1. **Reduce particle density** for lower-end devices
2. **Disable sparkles** on mobile if needed (add media query)
3. **Use hardware acceleration** (already enabled via CSS transforms)

---

## 🐛 Troubleshooting

### Issue: Particles not showing
- Ensure dependencies are installed: `npm install`
- Check browser console for errors
- Verify tsparticles is loaded correctly

### Issue: Poor performance
- Reduce `particleDensity` to 80-100
- Lower `maxSize` to 1.5
- Check for other heavy animations on page

### Issue: Colors not matching theme
- Verify `ThemeProvider` is wrapping the app
- Check `useTheme` hook in `CosmicBackground.tsx`

---

## 📄 License

This project is proprietary to Soulmap.

---

## 💫 Credits

Built with:
- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- tsparticles + Framer Motion
- next-themes

---

**Happy Stargazing! 🌌✨**
