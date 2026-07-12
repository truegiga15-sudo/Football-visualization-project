import type { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}
export function Checkbox({ label, id, ...props }: CheckboxProps) {
  const controlId = id ?? label.toLowerCase().replaceAll(' ', '-');
  return (
    <label className={styles.root} htmlFor={controlId}>
      <input id={controlId} type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}
