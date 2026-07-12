import type { InputHTMLAttributes } from 'react';
import styles from './Switch.module.css';
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}
export function Switch({ label, id, ...props }: SwitchProps) {
  const controlId = id ?? label.toLowerCase().replaceAll(' ', '-');
  return (
    <label className={styles.root} htmlFor={controlId}>
      <input id={controlId} type="checkbox" role="switch" {...props} />
      <span>{label}</span>
    </label>
  );
}
