import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { ComponentVariant } from '@/design-system';
import { classNames } from '@/utils/classNames';
import styles from '@/components/ui/shared.module.css';
import localStyles from './Tag.module.css';
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ComponentVariant;
}
export function Tag({
  children,
  className,
  variant = 'minimal',
  ...props
}: PropsWithChildren<TagProps>) {
  return (
    <span className={classNames(localStyles.root, styles[variant], className)} {...props}>
      {children}
    </span>
  );
}
