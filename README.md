# 🐕 Dog Shelter (ROTVODOM)

> A modern responsive web application for dog shelter adoption built with React, TypeScript, and Tailwind CSS

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8.svg)](https://tailwindcss.com/)

## 📋 About

Dog Shelter is a fully responsive web application designed to help visitors browse adoptable dogs, learn about the shelter, and get in touch. The platform features a modern UI with advanced filtering, photo galleries, and a fully functional contact form. Built as a portfolio project showcasing modern frontend development practices.

## ✨ Features

### Core Functionality

- 🐶 **Browse Dogs:** View available dogs for adoption with detailed profiles, photos, and stories
- 🔍 **Advanced Filtering:** Filter dogs by breed, age, gender, health status, and training level
- 🎴 **Dog Details Modal:** Interactive modal with full dog information and adoption details
- 📊 **Shelter Statistics:** Real-time display of shelter stats (total dogs, adopted, volunteers)
- 🖼️ **Photo Gallery:** Carousel showcasing shelter life and activities
- 📞 **Contact Form:** Fully validated contact form with sanitization and rate limiting

### User Experience

- 📱 **Fully Responsive Design:** Mobile-first approach with breakpoints for all screen sizes (320px–1920px+)
- ♿ **Accessibility:** ARIA labels, keyboard navigation, semantic HTML, focus management
- 🎨 **Modern UI:** Custom design system with Tailwind CSS, glass-morphism effects, decorative elements
- ⚡ **Performance Optimized:** Lazy loading, code splitting, optimized images (AVIF/WebP)
- 🎭 **Smooth Animations:** Micro-interactions, hover states, transitions

### Technical Features

- 🛡️ **Input Sanitization:** DOMPurify integration for secure form handling
- 🔒 **Form Validation:** Client-side validation with user-friendly error messages
- ⏱️ **Rate Limiting:** 30-second cooldown between form submissions
- 🧩 **Component Architecture:** Modular, reusable components with TypeScript
- 🎯 **Custom Hooks:** `useDogFilters` for filter state management
- 📐 **Responsive Layouts:** CSS Grid, Flexbox, and Tailwind utilities

## 🛠 Tech Stack

- **Frontend:** React 19.2 with TypeScript 5.9
- **Build Tool:** Vite 7.2 with hot module replacement
- **Styling:** Tailwind CSS 4.1 with custom theme and PostCSS
- **Code Quality:** ESLint, Prettier, TypeScript strict mode
- **Version Control:** Git with Husky pre-commit hooks and lint-staged
- **Additional Libraries:** DOMPurify for sanitization

## 📁 Project Structure

```
Dog-Shelter/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Button with variants (primary, secondary, outline, filter)
│   │   ├── ContactInfo.tsx  # Shelter contact information display
│   │   ├── DecorativeCircle.tsx  # Decorative background circles
│   │   ├── DogModal.tsx     # Dog detail modal
│   │   ├── Footer.tsx       # Site footer with social links
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Icon.tsx         # SVG icon wrapper
│   │   ├── LoadingSpinner.tsx    # Loading state component
│   │   ├── RuleCard.tsx     # Adoption rules card
│   │   ├── Sidebar.tsx      # Mobile navigation sidebar
│   │   ├── SocialLinks.tsx  # Social media links
│   │   └── TextInput.tsx    # Form input component
│   ├── features/            # Feature modules
│   │   ├── AboutUs.tsx      # About section
│   │   ├── AdoptionRules.tsx     # Adoption rules section
│   │   ├── ContactSection.tsx    # Contact form section
│   │   ├── DogCard.tsx      # Individual dog card
│   │   ├── DogFilters.tsx   # Dog filtering UI
│   │   ├── DogGrid.tsx      # Dog cards grid layout
│   │   ├── HowToHelp.tsx    # Ways to help section
│   │   ├── PhotoCarousel.tsx     # Image carousel
│   │   └── useDogFilters.ts      # Filter logic hook
│   ├── data/                # Static data
│   │   ├── dogs.ts          # Dog profiles and shelter stats
│   │   └── gallery.ts       # Gallery images
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Shared types (Dog, FilterState, etc.)
│   ├── utils/               # Utility functions
│   │   ├── dogHelpers.ts    # Dog filtering and sorting
│   │   ├── images.ts        # Image path helpers
│   │   └── sanitize.ts      # Form data sanitization
│   ├── constants/           # App constants
│   │   └── index.ts         # Breeds, age groups, etc.
│   ├── assets/              # Static assets
│   │   ├── dogs-images/     # Dog photos
│   │   ├── gallery/         # Gallery images
│   │   └── icons/           # Icon files (AVIF)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles and Tailwind config
├── public/                  # Public static files
├── eslint.config.js         # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── postcss.config.cjs       # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bavayra/Dog-Shelter.git
cd Dog-Shelter
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 📜 Available Scripts

- `npm run dev` — Start development server with hot reload
- `npm run build` — Build for production (TypeScript check + Vite build)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Auto-fix ESLint issues
- `npm run format` — Format code with Prettier
- `npm run format:check` — Check code formatting
- `npm run type-check` — Run TypeScript type checking
- `npm run optimize:svg` — Optimize SVG files with SVGO

## 🎨 Design System

### Breakpoints

- **xs:** 375px — Small phones
- **sm:** 425px — Large phones
- **md:** 768px — Tablets
- **lg:** 1024px — Laptops
- **xl:** 1280px — Desktops

### Color Palette

- **Primary:** Blue shades (#304470 to #f6f8fc)
- **Accent:** Pink/purple (#b36aaf, #d486c9)
- **Neutral:** Gray shades for text and borders

### Typography

- **H1:** Bold, primary-500
- **H2:** Large, bold headings
- **Body:** Neutral-700, medium weight
- **Small:** Labels and captions

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit (`git commit -m 'feat: add amazing feature'`)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit (`git commit -m 'feat: add amazing feature'`)
4. Run linters and type checks (`npm run lint && npm run type-check`)
5. Push to your branch and open a Pull Request

## 📝 License

MIT License — see [LICENSE](LICENSE) for details

## 👤 Author

**Alix Bell**

- GitHub: [@bavayra](https://github.com/bavayra)

## 🙏 Acknowledgments

- Built as a portfolio project to showcase modern React development
- Dog photos and information used with proper consent
- Inspired by real animal shelter needs

---

Made with ❤️ for shelter dogs
