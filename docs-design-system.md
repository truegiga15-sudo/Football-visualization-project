# Design System Foundation

This project uses semantic CSS custom properties as the source of truth for visual decisions. Components must consume tokens instead of hardcoded colors, spacing, radius, shadows, or motion values.

## Tokens

- Colors: semantic roles cover brand, feedback, surfaces, text, interaction states, overlays, tooltips, modals, and reserved visualization palettes for charts, pitch rendering, heatmaps, pressure maps, passing, and timelines.
- Typography: scale covers display, headings, title, subtitle, body, caption, overline, code, button, label, tooltip, and numeric usage.
- Spacing: values progress from `--space-0-5` through `--space-32` and should be used for layout rhythm.
- Radius: use `--radius-xs` through `--radius-2xl`, plus `--radius-pill` and `--radius-circle`.
- Elevation: use `--shadow-level-*` and component-specific shadows for focus, glass, floating panels, tooltips, and modals.
- Motion: use duration and easing tokens, and preserve the global reduced-motion override.
- Z-index: use the centralized z-index tokens for layered UI.

## Components

UI primitives live in `src/components/ui`. New components should be typed, accessible, theme-aware, and built from shared variants in `src/design-system/tokens.ts`.

## Icons

Icons are centralized through `src/design-system/icons.tsx` and rendered via `Icon`. Do not import icon components directly in feature code.

## Best Practices

- Prefer composition over one-off component branching.
- Keep feature styling separate from primitive styling.
- Do not hardcode colors in components.
- Add ARIA labels when controls do not have visible text.
- Respect keyboard navigation and focus-visible styles.
