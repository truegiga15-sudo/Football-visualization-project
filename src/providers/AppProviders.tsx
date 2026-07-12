import type { PropsWithChildren } from 'react';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@/contexts/theme';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary>
      <ThemeProvider>{children}</ThemeProvider>
    </ErrorBoundary>
  );
}
