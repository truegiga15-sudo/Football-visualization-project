import styles from './Skeleton.module.css';
export interface SkeletonProps {
  width?: string;
  height?: string;
  label?: string;
}
export function Skeleton({
  width = '100%',
  height = '1rem',
  label = 'Loading content',
}: SkeletonProps) {
  return <span className={styles.skeleton} style={{ width, height }} aria-label={label} />;
}
