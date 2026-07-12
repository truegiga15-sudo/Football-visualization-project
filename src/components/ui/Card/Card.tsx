import type { HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './Card.module.css';
export interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'analytics';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  ...props
}: PropsWithChildren<CardProps>) {
  return (
    <section
      className={classNames(styles.card, styles[variant], styles[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
