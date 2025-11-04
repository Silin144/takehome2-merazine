# Penny's Portfolio - Take Home Assessment

A clean, minimal portfolio page implementation based on the provided design mockup.

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📐 Implementation Details

### Features Implemented:
- ✅ **Sidebar Navigation**: Interactive navigation with sections and subsections
- ✅ **Active State Highlighting**: Purple/blue background color updates as you click into each page
- ✅ **Live Date & Time**: Real-time display in the header (updates every second)
- ✅ **Page Counter**: Shows current page position (e.g., "0/4")
- ✅ **macOS-Style Window**: Traffic light buttons and clean window chrome
- ✅ **Photo Galleries**: Image grids for profile and evolution sections
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **Empty Pages**: Some navigation items lead to empty pages as per requirements

### Design Decisions:
1. **React + Vite**: Fast development with instant HMR
2. **Clean State Management**: Simple `useState` for page navigation
3. **Exact Design Match**: Faithful recreation of the provided mockup
4. **Real-time Clock**: `setInterval` updates time every second
5. **Smooth Interactions**: Hover effects and transitions for better UX

### Structure:
```
src/
  ├── App.jsx          # Main component with navigation and content
  ├── App.css          # All styling (clean, organized CSS)
  └── index.css        # Global reset styles

public/
  └── Assets/          # All images (evolution & gallery photos)
```

### Navigation Structure:
- intro
- about me (default page with content)
- section 1 (parts 2, 3, 4)
- deep dive
- section 2 (parts 1-6)

Most pages are empty except "about me", which displays:
- Profile photo gallery
- Bio text with facts
- Evolution timeline images

## 🎨 Design Notes

- Selection color: `#e8e4f3` (light purple/blue)
- Font: System font stack (SF Pro on macOS, Segoe UI on Windows)
- Window: Clean white with subtle shadows
- Sidebar: Light gray (`#fafafa`) with smooth hover states
- All images are properly sized and styled per the mockup

## 📦 Built With

- React 18
- Vite
- CSS3

No external UI libraries - pure HTML, CSS, and React for maximum control and performance.
