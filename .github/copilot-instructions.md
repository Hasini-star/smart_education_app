# Copilot Instructions for smart_education_app

## Project Overview

A React 19 educational application bootstrapped with Create React App. The app is in early development stage with minimal feature implementation. Focus on establishing clean architectural patterns before adding features.

## Architecture & Structure

### Core Stack
- **React 19** with hooks - use functional components exclusively
- **React DOM 19** for rendering
- **Create React App** for build tooling and configuration
- **Testing Library** (@testing-library/react) for component testing
- No additional state management libraries yet

### File Organization
```
src/
  ├── App.js              # Root component (currently empty except boilerplate)
  ├── App.css             # Component-level styles
  ├── index.js            # Entry point with React 19 root API
  ├── index.css           # Global styles
  ├── App.test.js         # Component tests
  ├── reportWebVitals.js  # Performance monitoring
  └── setupTests.js       # Test configuration
```

## Development Workflow

### Essential Commands
- **Start dev server**: `npm start` - opens http://localhost:3000 with hot reload
- **Run tests**: `npm test` - launches interactive test runner in watch mode
- **Build production**: `npm run build` - optimized minified bundle in `/build`
- **Eject config** (irreversible): `npm run eject` - exposes webpack/Babel configs

### Testing Pattern
- Use `@testing-library/react` (React Testing Library)
- Write tests in `*.test.js` files adjacent to components
- Tests are configured in [setupTests.js](src/setupTests.js) with `@testing-library/jest-dom`
- Prefer user-centric assertions over implementation details

### ESLint Configuration
- Uses `react-app` and `react-app/jest` presets (no custom rules yet)
- Automatically enforces React best practices from Create React App defaults

## Key Patterns & Conventions

### Component Development
- Use functional components with React 19 features (hooks are available)
- Import stylesheets alongside components: `import './ComponentName.css'`
- Keep components in `src/` at the root level until the project scales
- Export default for main components: `export default App`

### React 19 Specific
- React 19 includes built-in support for forms and improvements to hooks
- Ref handling and Promise support in components is available
- Use React.StrictMode in development (configured in [index.js](src/index.js)) for detecting issues

### Styling
- CSS files are co-located with components (`App.css` with `App.js`)
- Global styles in [index.css](src/index.css)
- No CSS-in-JS or preprocessor configured yet
- Import stylesheets: `import './App.css'`

## Common Tasks

### Adding a New Component
1. Create `src/ComponentName.js` as a functional component
2. Create `src/ComponentName.css` for styles
3. Create `src/ComponentName.test.js` with tests using React Testing Library
4. Import and use in parent component

### Running & Debugging
- Dev server provides browser DevTools access
- Check console for lint errors and React StrictMode warnings
- Use `debugger;` statement in code, then open browser DevTools

## Dependencies & Integration Points

### No External State Management
- Redux, Zustand, or Context not yet added
- Use `useState` and `useContext` for local/shared state
- Consider adding state management library if prop drilling becomes problematic

### Testing Dependencies
- `@testing-library/jest-dom` ^6.9.1 - custom matchers for DOM assertions
- `@testing-library/react` ^16.3.1 - React component testing
- `@testing-library/user-event` ^13.5.0 - user interaction simulation
- `@testing-library/dom` ^10.4.1 - DOM testing utilities

### Performance
- `web-vitals` ^2.1.4 is configured in [reportWebVitals.js](src/reportWebVitals.js)
- Currently no special performance optimizations needed - address only if metrics degrade

## Important Notes

- Project is in very early stage - architectural decisions should be intentional and scalable
- No custom configuration overrides exist - app uses Create React App defaults
- To customize webpack/Babel: `npm run eject` (cannot be undone)
- Modern browsers supported (see `browserslist` in package.json)
