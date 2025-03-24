# Umain Work Test

This is my application for the Senior Web Developer position at Umain.

## Overview

Based on a design provided by Umain, I was tasked with creating Munchies: a sort of uber-eats clone where users can view and filter for different restaurants.

 I have focused on clean organisation, modern best practices, performance, and attention to detail to best showcase my range of skills from UX, UI, and development.

## Features

- **Restaurant Discovery**: Browse through a curated list of restaurants
- **Filtering**: Filter restaurants by:
  - Food category (Pizza, Hamburger, Tacos, etc.)
  - Delivery time (0-10 min, 10-30 min, 30-60 min, 1 hour+)
  - Price range ($ to $$$$)
- **Real-time Updates**: Restaurant list updates instantly as filters are applied or removed
- **Responsive Design**: Optimized experience across mobile, tablet, and desktop viewports
- **Mobile-first Welcome Page**: Special onboarding for first-time mobile users

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with custom configuration
- **Component Architecture**: Atomic Design Pattern
- **Component Styling**: Class Variance Authority (CVA)
- **SVG Handling**: @svgr/webpack for importing SVGs as React components

## Architecture

The project follows a structured architecture built for maintainability and scalability:

### Atomic Design Pattern

Components are organized following the Atomic Design methodology:

- **Atoms**: Basic building blocks (Button, Chip, Icon, Image, Tag, Tile)
- **Molecules**: Combinations of atoms (Card, Group, NoResults)
- **Organisms**: Complex UI sections (Carousel, List, Sidebar)

### Data Flow

- Server components fetch data from the API
- Client components manage UI state and interactions
- URL-based filter state management for shareable filtered views

### Type Safety

Comprehensive TypeScript types ensure code reliability and developer experience.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ViktorJT/umain-work-test.git
   cd umain-work-test
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (it's just the api base url)
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
munchies/
├── app/                  # Next.js app directory 
│   ├── page.tsx          # Main page
│   ├── welcome/          # Welcome page for first-time mobile users
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/           # UI components following Atomic Design
│   ├── atoms/            # Basic components
│   ├── molecules/        # Compound components
│   └── organisms/        # Complex UI sections
├── data/                 # Data fetching and processing
├── hooks/                # Custom React hooks
├── icons/                # SVG icons
├── public/               # Static assets
│   ├── webp/             # WebP images
│   ├── blur/             # Blur placeholders
│   └── png/              # Fallback PNG images
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Key Implementation Details

- **Responsive Images**: Progressive loading with blur placeholders and WebP format
- **Filter State Management**: URL-based state for shareable filtered views
- **Server/Client Components**: Leveraging Next.js 15's hybrid rendering model
- **Mobile Welcome Page**: Custom middleware for first-time mobile users
- **CSS Optimization**: TailwindCSS with custom typography plugin

## Performance Optimization

- Next.js server components for improved initial load performance
- Image optimization with next/image and WebP format
- Efficient re-rendering with proper component structure
- Middleware for targeted user experiences

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design provided by Umain
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework
- [Class Variance Authority](https://cva.style/docs) for component styling
