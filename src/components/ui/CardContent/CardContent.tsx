import type { HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/utils/classNames';
import styles from './CardContent.module.css';
export function CardContent({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={classNames(styles.content, className)} {...props}>
      {children}
    </div>
  );
}
