import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { ComponentVariant } from '@/design-system';
import { classNames } from '@/utils/classNames';
import styles from '@/components/ui/shared.module.css';
import localStyles from './Chip.module.css';
export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ComponentVariant;
}
export function Chip({
  children,
  className,
  variant = 'minimal',
  ...props
}: PropsWithChildren<ChipProps>) {
  return (
    <span className={classNames(localStyles.root, styles[variant], className)} {...props}>
      {children}
    </span>
  );
}
