# H4xScripts - Roblox Exploit Hub

## Overview
This is a static frontend website for H4xScripts, a Roblox exploit hub. The site serves as a landing page and script distribution platform that allows users to access and copy Roblox exploit scripts. The application is built as a single-page application using vanilla HTML, CSS, and JavaScript with modern styling via Tailwind CSS.

## User Preferences
- Preferred communication style: Simple, everyday language
- Design preference: Modern, clean look with better fonts
- Color scheme: Strict black and red only (no neon, pure red with glowing effects)

## System Architecture
The application follows a simple client-side architecture:

- **Frontend**: Static HTML/CSS/JavaScript single-page application
- **Styling**: Combination of Tailwind CSS (via CDN) and custom CSS
- **Fonts**: Google Fonts integration for custom typography
- **Assets**: External CDN-hosted images and icons

The architecture prioritizes simplicity and fast loading times with minimal dependencies. All functionality is handled client-side without requiring a backend server.

## Key Components

### HTML Structure (index.html)
- Single-page layout with semantic HTML5 structure
- Navigation bar with smooth scrolling links
- Hero section with branding and call-to-action
- Responsive design using Tailwind CSS classes
- External CDN resources for fonts and styling

### Styling System
- **Tailwind CSS**: Primary utility-first CSS framework loaded via CDN
- **Custom CSS (style.css)**: Modern styling with enhanced visual effects including:
  - Enhanced glow effects for text and buttons with multiple shadow layers
  - Modern font families: JetBrains Mono, Inter, and Space Grotesk
  - Advanced hover animations with cubic-bezier transitions
  - Sophisticated background effects including radial gradients and grid patterns
  - Glassmorphism effects with backdrop-filter blur

### JavaScript Functionality (script.js)
- Clipboard API integration for script copying
- Fallback clipboard functionality for older browsers
- Visual feedback systems for user interactions
- Event handling for button clicks and notifications

## Data Flow
1. User visits the static website
2. Page loads with all assets from CDNs
3. JavaScript initializes event listeners
4. User clicks copy button to copy exploit script
5. Script uses modern Clipboard API or fallback method
6. Visual feedback confirms successful copy operation

## External Dependencies
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - Primary CSS framework
- **Google Fonts**: Custom fonts (Orbitron, Rajdhani) for branding
- **Discord CDN**: Logo and favicon hosting
- **GitHub Raw**: Script loader source (referenced in JavaScript)

All dependencies are loaded via CDN for optimal performance and minimal setup requirements.

## Deployment Strategy
The application is designed for simple static hosting:

- **Static Files**: HTML, CSS, and JavaScript files can be served by any static hosting provider
- **No Build Process**: Direct deployment without compilation or bundling
- **CDN Dependencies**: All external resources loaded from CDNs reduce hosting requirements
- **Mobile Responsive**: Tailwind CSS provides responsive design out of the box

The architecture supports deployment on platforms like GitHub Pages, Netlify, Vercel, or any static hosting service. No server-side processing or database connections are required.