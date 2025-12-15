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
- 🖼️ Optimized image delivery (WebP, responsive srcset, lazy loading)
- 📱 Fully responsive design
- ♿ Accessible and user-friendly interface (ARIA labels, keyboard navigation)
- 🎨 Modern UI with Tailwind CSS variant grouping
- ⚡ Fast performance with memoized filtering

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2 with TypeScript
- **Build Tool:** Vite 7.2
- **Styling:** Tailwind CSS 4.1
- **Code Quality:**
  - ESLint for linting
  - Prettier for code formatting
  - Husky for Git hooks
  - lint-staged for pre-commit checks
- **Type Safety:** Strict TypeScript configuration

## 📁 Project Structure

```
dog-shelter/
├── src/
│   ├── components/     # Reusable UI components (Button, Header, Footer, Sidebar, Icon, DogCard)
│   ├── features/       # Feature-specific modules
│   │   ├── useDogFilters.ts  # Custom hook for filtering logic
│   │   ├── DogFilters.tsx    # Filter UI component
│   │   └── DogGrid.tsx       # Dog listing grid container
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions (Dog, DogFilters)
│   ├── data/           # Mock data and shelter statistics
│   ├── utils/          # Utility functions
│   ├── constants/      # App constants and configs
│   ├── assets/         # Static assets (icons, raw images)
│   │   └── dogs-images/ # Raw dog photos before processing
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── public/
│   └── images/dogs/    # Processed dog images (JPEG, WebP, multiple sizes)
├── scripts/            # Build and utility scripts
│   └── process-images.js # Image optimization pipeline
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dog-shelter.git
cd dog-shelter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Image Setup (Optional)

To use optimized images with multiple sizes and WebP format:

1. Install sharp for image processing:

```bash
npm install --save-dev sharp
```

2. Place raw dog photos in `src/assets/dogs-images/raw/`

3. Run the image processing script:

```bash
npm run process-images
```

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

## 🖼️ Image Guidelines

This project uses real photographs of shelter dogs. All images:

- Are used with proper consent from the shelter
- Should be preprocessed for consistent presentation
- Support responsive delivery (srcset, WebP)
- Include proper alt text for accessibility
- Respect privacy and are stripped of EXIF metadata

---

⭐ If you like this project, please give it a star on GitHub!
