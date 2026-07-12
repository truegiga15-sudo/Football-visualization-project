import type { InputHTMLAttributes } from 'react';
import styles from './Radio.module.css';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}
export function Radio({ label, id, ...props }: RadioProps) {
  const controlId = id ?? label.toLowerCase().replaceAll(' ', '-');
  return (
    <label className={styles.root} htmlFor={controlId}>
      <input id={controlId} type="radio" {...props} />
      <span>{label}</span>
    </label>
  );
}
