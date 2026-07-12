import { createContext, useMemo, type PropsWithChildren } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  mode: ThemeMode;
  availableThemes: readonly ThemeMode[];
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const value = useMemo<ThemeContextValue>(
    () => ({ mode: 'system', availableThemes: ['light', 'dark', 'system'] }),
    [],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
