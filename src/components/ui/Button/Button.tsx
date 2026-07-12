import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
export function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
