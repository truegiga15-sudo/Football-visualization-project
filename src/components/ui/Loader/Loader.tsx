import { Spinner } from '@/components/ui/Spinner/Spinner';
import styles from './Loader.module.css';
export interface LoaderProps {
  label?: string;
}
export function Loader({ label = 'Loading' }: LoaderProps) {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <Spinner label={label} />
      {label}
    </div>
  );
}
