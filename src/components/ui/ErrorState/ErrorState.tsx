import { Card } from '@/components/ui/Card/Card';
export interface ErrorStateProps {
  title?: string;
  message?: string;
}
export function ErrorState({
  title = 'Something went wrong',
  message = 'Please try again.',
}: ErrorStateProps) {
  return (
    <Card role="alert">
      <h2>{title}</h2>
      <p>{message}</p>
    </Card>
  );
}
