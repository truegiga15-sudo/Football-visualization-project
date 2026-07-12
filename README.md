# Football Visualization Project

A production-grade, open-source football analytics application foundation for future StatsBomb Event and StatsBomb 360 visualizations.

## Goals

- Provide a scalable React, Vite, and TypeScript architecture.
- Prepare clean boundaries for parsing, analytics, visualization, services, routing, and UI composition.
- Support accessibility, performance, theming, and future expansion from the first commit.

## Technology Stack

- React
- Vite
- TypeScript
- React Router
- ESLint
- Prettier
- CSS Modules and global design tokens
- npm

## Folder Structure

```text
src/app            Application root
src/components     Reusable UI foundations
src/features       Feature-oriented modules
src/hooks          Shared React hooks
src/layouts        Route layout shells
src/pages          Route-level pages
src/services       Infrastructure services
src/analytics      Future analytics domain logic
src/visualizations Future rendering modules
src/parsers        Future StatsBomb parsers
src/types          Shared TypeScript interfaces
src/utils          Reusable utility modules
src/styles         Global styles and design tokens
src/constants      Application constants
src/contexts       React contexts
src/providers      Provider composition
src/routes         Routing configuration
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts the Vite dev server.
- `npm run build` type-checks and builds for production.
- `npm run lint` runs ESLint with zero warnings allowed.
- `npm run format:check` checks Prettier formatting.
- `npm run preview` previews the production build.

## Future Roadmap

- StatsBomb Event and 360 parsing modules.
- Upload and validation workflows.
- Match dashboards and tactical visualizations.
- Canvas, WebGL, and Web Worker rendering paths.
- Theme switching and custom theme authoring.

## Contributing

Contributions should preserve modular boundaries, strong typing, accessibility, and production-quality review standards. Add tests and documentation alongside functional changes.

## License

License placeholder. A final open-source license will be selected before public release.
