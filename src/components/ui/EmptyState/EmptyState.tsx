import { Card } from '@/components/ui/Card/Card';
export interface EmptyStateProps {
  title: string;
  description?: string;
}
export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Card aria-live="polite">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Card>
  );
}
