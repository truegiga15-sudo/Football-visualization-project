import styles from './Divider.module.css';
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}
export function Divider({ orientation = 'horizontal' }: DividerProps) {
  return <span className={styles[orientation]} role="separator" aria-orientation={orientation} />;
}
