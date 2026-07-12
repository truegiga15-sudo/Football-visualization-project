export const componentVariants = [
  'primary',
  'secondary',
  'ghost',
  'outline',
  'danger',
  'success',
  'minimal',
  'glass',
  'analytics',
] as const;

export type ComponentVariant = (typeof componentVariants)[number];

export const componentSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type ComponentSize = (typeof componentSizes)[number];

export const breakpoints = {
  mobile: '30rem',
  tablet: '48rem',
  laptop: '64rem',
  desktop: '80rem',
  ultraWide: '96rem',
} as const;

export type BreakpointName = keyof typeof breakpoints;
