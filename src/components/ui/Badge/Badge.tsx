import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { ComponentVariant } from '@/design-system';
import { classNames } from '@/utils/classNames';
import styles from '@/components/ui/shared.module.css';
import localStyles from './Badge.module.css';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ComponentVariant;
}
export function Badge({
  children,
  className,
  variant = 'minimal',
  ...props
}: PropsWithChildren<BadgeProps>) {
  return (
    <span className={classNames(localStyles.root, styles[variant], className)} {...props}>
      {children}
    </span>
  );
}
