# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern website showcasing the Japanese railway transportation research practice (日本轨道交通实践) by the Electronics Department research team. The site features three main sections: Timeline, Topic Discussions, and Team Members.

## Project Structure

- `index.html` - Main HTML file with responsive design
- `style.css` - Modern CSS with CSS variables, responsive design, and animations
- `script.js` - Interactive JavaScript with tab navigation and animations
- `images/` - Project assets including logo.png and example.jpg
- `材料汇总.txt` - Research materials and links

## Technical Architecture

**Frontend Stack**: Vanilla HTML, CSS, JavaScript (no frameworks)
**Design Features**:
- Modern CSS with CSS custom properties (variables)
- Responsive design for mobile and desktop
- CSS Grid and Flexbox layouts
- Smooth animations and transitions
- Interactive tab navigation
- Intersection Observer for scroll animations

**Key Components**:
1. **Header**: Gradient background with logo and title
2. **Navigation**: Sticky tab navigation with icons
3. **Timeline Section**: Chronological research activities with date badges
4. **Topics Section**: Grid of research topic cards with WeChat article links
5. **Members Section**: Team member profiles with avatars

## Content Structure

**Timeline**: Daily research activities with images and descriptions
**Topics**: Research focus areas with summaries and external links:
- Railway privatization models
- Station design research
- Railway education and culture
- Station functionality optimization
- Station location principles

**Team Members**: Individual profiles with roles and introductions

## Development Commands

This is a static website - simply open `index.html` in a browser.

For development:
- Use a local server: `python -m http.server 8000` or `npx serve`
- No build process required
- All assets are referenced relatively

## Styling Notes

- Uses Inter and Noto Sans SC fonts from Google Fonts
- Font Awesome icons for navigation and links
- CSS custom properties for consistent theming
- Responsive breakpoints: 640px, 768px, 1024px
- Color scheme: Blue primary with orange accents

## JavaScript Features

- Tab switching with smooth transitions
- Scroll-based animations using Intersection Observer
- Mobile-optimized navigation (auto-hide on scroll)
- Keyboard navigation support (arrow keys)
- Error handling and fallback functionality
- Performance monitoring

## Assets and Content

- All images currently use `images/example.jpg` as placeholder
- WeChat article links point to actual research publications
- Content is in Chinese with focus on Japan railway research
- Logo and branding reflect academic research team identity