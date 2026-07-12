import type { PropsWithChildren, ReactNode } from 'react';
import styles from './Tooltip.module.css';
export interface TooltipProps {
  content: ReactNode;
}
export function Tooltip({ children, content }: PropsWithChildren<TooltipProps>) {
  return (
    <span className={styles.root} data-tooltip={typeof content === 'string' ? content : undefined}>
      {children}
    </span>
  );
}
