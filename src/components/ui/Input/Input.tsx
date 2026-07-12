import type { InputHTMLAttributes } from 'react';
import styles from '@/components/ui/shared.module.css';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replaceAll(' ', '-');
  const input = <input id={inputId} className={styles.field} {...props} />;
  return label ? (
    <label className={styles.label} htmlFor={inputId}>
      {label}
      {input}
    </label>
  ) : (
    input
  );
}
