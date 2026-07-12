export interface ErrorMetadata {
  componentStack?: string;
  source?: string;
}
export function reportError(error: Error, metadata: ErrorMetadata = {}): void {
  if (import.meta.env.DEV) {
    console.error(error, metadata);
  }
}
