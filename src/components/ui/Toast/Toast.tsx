import type { HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './Toast.module.css';
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}
export function Toast({ children, className, title, ...props }: PropsWithChildren<ToastProps>) {
  return (
    <div
      className={classNames(styles.toast, className)}
      role="status"
      aria-live="polite"
      {...props}
    >
      {title ? <strong>{title}</strong> : null}
      {children}
    </div>
  );
}
