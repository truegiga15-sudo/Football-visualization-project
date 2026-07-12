import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react';
import { ErrorState } from '@/components/ui/ErrorState/ErrorState';
import { reportError } from '@/services/logging/reportError';
interface State {
  hasError: boolean;
}
export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    reportError(error, { componentStack: errorInfo.componentStack ?? undefined });
  }
  render(): ReactNode {
    return this.state.hasError ? <ErrorState /> : this.props.children;
  }
}
