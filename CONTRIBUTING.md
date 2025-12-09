# Contributing to Dog Shelter

Thank you for your interest in contributing to Dog Shelter! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/dog-shelter.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`

## Development Workflow

### Running the Project

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality

Before committing, ensure your code passes all checks:

```bash
npm run lint         # Check for linting errors
npm run lint:fix     # Fix linting errors automatically
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

**Note:** Husky will automatically run lint-staged before each commit to ensure code quality.

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Follow strict type checking
- Avoid using `any` type - use proper types or `unknown`
- Define interfaces for all data structures

### React

- Use functional components with hooks
- Follow React best practices and hooks rules
- Keep components small and focused
- Use meaningful component and variable names

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

### File Organization

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific code
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── constants/      # App constants
```

## Commit Messages

Follow the conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add dog filtering by breed`

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass and code is properly formatted
3. Update the README.md if you add new features
4. Submit a pull request with a clear description of changes
5. Wait for code review and address any feedback

## Questions?

Feel free to open an issue if you have any questions or need help!
