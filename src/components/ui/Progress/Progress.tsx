import styles from './Progress.module.css';
export interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
}
export function Progress({ value, max = 100, label = 'Progress' }: ProgressProps) {
  return <progress className={styles.progress} value={value} max={max} aria-label={label} />;
}
