import styles from './Spinner.module.css';
export interface SpinnerProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}
export function Spinner({ label = 'Loading', size = 'md' }: SpinnerProps) {
  return (
    <span className={styles.root} role="status" aria-label={label}>
      <span className={styles[size]} aria-hidden="true" />
    </span>
  );
}
