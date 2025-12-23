# 🐕 Dog Shelter

> A modern web application for dog shelter management built with React, TypeScript, and Tailwind CSS

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8.svg)](https://tailwindcss.com/)

## 📋 About

Dog Shelter is a web application designed to help animal shelters manage their dogs and facilitate the adoption process. The platform allows visitors to browse available dogs, learn about their stories, and submit adoption applications. Built as a portfolio project featuring real shelter dogs with proper consent.

## ✨ Features

- 🐶 Browse available dogs for adoption with real photos
- 🔍 Advanced filtering system (breed, age, gender, health status)
- 📊 Real-time shelter statistics
- 🖼️ Photo gallery with carousel of shelter life
- 📱 Fully responsive design (mobile-first approach)
- ♿ Accessible and user-friendly interface (ARIA labels, keyboard navigation)
- 🎨 Modern UI with Tailwind CSS and custom design system
- ⚡ **Optimized Performance:**
  - Lighthouse Score: **99/100** Performance
  - WebP image format with aggressive compression
  - Lazy loading for images and components
  - Code splitting and tree shaking
  - Gzip/Brotli compression
  - SVG optimization
- 🔍 **SEO Optimized:**
  - Semantic HTML structure
  - Meta tags and Open Graph ready
  - Proper heading hierarchy
  - Descriptive alt texts

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2 with TypeScript
- **Build Tool:** Vite 7.2 with custom optimizations
- **Styling:** Tailwind CSS 4.1 with custom color palette
- **Performance Optimization:**
  - vite-plugin-compression (Gzip/Brotli)
  - React.lazy for code splitting
  - WebP image format
  - SVG optimization with SVGR
- **Code Quality:**
  - ESLint with React hooks plugin
  - Prettier for code formatting
  - Husky for Git hooks
  - lint-staged for pre-commit checks
- **Type Safety:** Strict TypeScript configuration

## 📁 Project Structure

│ │ ├── Button.tsx
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Icon.tsx # SVG icon wrapper with size variants
│ │ ├── SocialLinks.tsx # Social media links component
│ │ └── ...
│ ├── features/ # Feature-specific modules
│ │ ├── DogCard.tsx # Individual dog card component
│ │ ├── DogFilters.tsx # Filter UI component
│ │ ├── DogGrid.tsx # Dog listing grid container
│ │ ├── useDogFilters.ts # Custom hook for filtering logic
│ │ ├── PhotoCarousel.tsx # Gallery carousel
│ │ ├── AboutUs.tsx # About section (lazy loaded)
│ │ ├── HowToHelp.tsx # How to help section (lazy loaded)
│ │ └── ContactSection.tsx # Contact form (lazy loaded)
│ ├── hooks/ # Custom React hooks
│ ├── types/ # TypeScript type definitions
│ │ └── index.ts # Dog, DogFilters, and other types
│ ├── data/ # Data and content
│ │ ├── dogs.ts # Dog profiles and shelter stats
│ │ └── gallery.ts # Gallery images metadata
│ ├── utils/ # Utility functions
│ │ └── images.ts # Image loading and resolution helpers
│ ├── constants/ # App constants
│ │ └── index.ts # Filter options, contact info, socials
│ ├── assets/ # Static assets
│ │ ├── dogs-images/ # Dog photos (WebP format)
│ │ ├── gallery/ # Gallery photos (WebP format)
│ │ └── icons/ # SVG icons
│ ├── styles/ # Global styles
│ ├── App.tsx # Main App component with lazy loading
│ ├── main.tsx # Application entry point
│ └── index.css # Global CSS with Tailwind
├── public/ # Public assets served as-is
├── dist/ # Production build output
│ └── main.tsx # Application entry point
├── public/
│ └── images/dogs/ # Processed dog images (JPEG, WebP, multiple sizes)
├── scripts/ # Build and utility scripts
│ └── process-images.js # Image optimization pipeline
└── ...config files

````

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
gi 🎯 Performance Optimizations

This project achieves **Lighthouse Score 99/100** through:

### Image Optimization
- All images converted to **WebP format** (50-70% smaller than JPEG)
- Lazy loading with Intersection Observer API
- Optimized compression quality (65-70 for gallery, 80 for dog cards)
- Vite's automatic image hashing for cache busting

### Code Splitting
- React.lazy for route-level splitting
- Separate vendor and app bundles
- Dynamic imports for below-the-fold sections (AboutUs, HowToHelp, ContactSection)

### Build Optimization
- Gzip and Brotli compression (75% size reduction)
- Tree shaking and dead code elimination
- Minification with Terser
- CSS purging and minification

### Runtime Performance
- SVG components imported via SVGR for better tree shaking
- Memoized filtering logic
- Minimal re-renders with proper React patterns

### SEO & Accessibility
- Semantic HTML with proper ARIA labels
- Meta tags and Open Graph data
- Preload for critical resources
- Keyboard navigation supportwith optimizations    |
| `npm run preview`        | Preview production build locally           |
| `npm run lint`           | Run ESLint                                 |
| `npm run lint:fix`       | Fix ESLint errors                          |
| `npm run format`         | Format code with Prettier                  |
| `npm run format:check`   | Check code formatting                      |
| `npm run type-check`     | Run TypeScript type checking

```bash
npm run process-images
````

This will generate optimized images in `public/images/dogs/` with:

- Multiple sizes (400w, 800w, 1200w)
- WebP and JPEG formats
- Consistent 4:3 aspect ratio
- Optimized quality for web

## 📜 Available Scripts

| Script                   | Description                                |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Start development server                   |
| `npm run build`          | Build for production                       |
| `npm run preview`        | Preview production build                   |
| `npm run lint`           | Run ESLint                                 |
| `npm run lint:fix`       | Fix ESLint errors                          |
| `npm run format`         | Format code with Prettier                  |
| `npm run format:check`   | Check code formatting                      |
| `npm run type-check`     | Run TypeScript type checking               |
| `npm run process-images` | Process and optimize dog images (optional) |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style

This project uses ESLint and Prettier to maintain code quality. The pre-commit hook automatically checks and formats your code before each commit.

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Alix Bell**

- GitHub: [@bavayra](https://github.com/bavayra)

## 🙏 Acknowledgments

- Dog photos provided with consent from real animal shelter
- Icons from Lucide React
- Inspiration from real animal shelter websites
- Built with love for animals 🐾
  Converted to WebP format for optimal web performance
- Compressed with quality 65-80 depending on use case
- Include proper alt text for accessibility
- Use lazy loading for below-the-fold content
- Processed through Vite's asset pipeline for caching

### Image Optimization Tips

To further optimize images:

1. Use online tools like [Squoosh.app](https://squoosh.app) for WebP conversion
2. Target quality 60-70 for gallery images, 75-85 for feature images
3. Ensure images are no larger than necessary for display size
4. Use Vite's `import.meta.glob` for automatic optimization All images:

- Are used with proper consent from the shelter
- Should be preprocessed for consistent presentation
- Support responsive delivery (srcset, WebP)
- Include proper alt text for accessibility
- Respect privacy and are stripped of EXIF metadata

---

⭐ If you like this project, please give it a star on GitHub!
