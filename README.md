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

  # Dog Shelter

  A small React + TypeScript web app demonstrating a dog shelter listing and adoption UI.

  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg) ![React](https://img.shields.io/badge/React-19.2-61dafb.svg) ![Vite](https://img.shields.io/badge/Vite-7.2-646cff.svg)

  ## Overview

  This repository contains a frontend project built with React, TypeScript and Tailwind CSS. It showcases:
  - A responsive dog listing grid
  - Filtering and search for dogs (breed, age, gender, status)
  - Image gallery and modal details for each dog
  - Accessibility and basic SEO-friendly markup

  ## Features
  - Browse adoptable dogs with photos and details
  - Client-side filters and search
  - Lazy-loaded sections and components for performance
  - Image optimization pipeline (optional script)

  ## Tech Stack
  - React + TypeScript
  - Vite
  - Tailwind CSS
  - ESLint + Prettier

  ## Project Structure (important files)
  - `src/App.tsx` — main app container
  - `src/main.tsx` — app entry
  - `src/components/` — shared components (Header, Footer, Button...)
  - `src/features/` — feature modules (DogCard, DogGrid, filters, carousel)
  - `src/data/` — sample data (dogs, gallery)
  - `src/utils/` — helpers (images, sanitizers)
  - `public/` — static assets

  ## Getting started

  Prerequisites:
  - Node.js 18+ and npm (or yarn)

  Install and run locally:

  ```bash
  npm install
  npm run dev
  ```

  Build for production:

  ```bash
  npm run build
  npm run preview
  ```

  Optional image processing (if you maintain the `scripts/process-images.js`):

  ```bash
  npm run process-images
  ```

  ## Available scripts

  Common npm scripts available in this project:
  - `npm run dev` — start development server
  - `npm run build` — build for production
  - `npm run preview` — preview production build
  - `npm run lint` / `npm run lint:fix` — linting
  - `npm run format` / `npm run format:check` — formatting
  - `npm run type-check` — TypeScript checks
  - `npm run process-images` — optional image optimization pipeline

  ## Contributing

  Contributions are welcome. Please open issues or pull requests. Basic workflow:
  1. Fork the repo
  2. Create a feature branch
  3. Make changes and run linters/tests
  4. Open a PR

  ## License

  MIT

  ## Author

  Alix Bell — https://github.com/bavayra

  ***
