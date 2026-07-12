import type { HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './CardHeader.module.css';
export function CardHeader({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={classNames(styles.header, className)} {...props}>
      {children}
    </div>
  );
}
