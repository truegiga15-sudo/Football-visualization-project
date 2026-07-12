import { Card } from '@/components/ui/Card/Card';
import { Loader } from '@/components/ui/Loader/Loader';
export interface LoadingStateProps {
  title?: string;
}
export function LoadingState({ title = 'Loading workspace' }: LoadingStateProps) {
  return (
    <Card aria-busy="true">
      <Loader label={title} />
    </Card>
  );
}
