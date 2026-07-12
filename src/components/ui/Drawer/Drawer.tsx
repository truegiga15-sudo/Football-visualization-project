import type { PropsWithChildren } from 'react';
import styles from './Drawer.module.css';
export interface DrawerProps {
  isOpen: boolean;
  title: string;
  side?: 'left' | 'right';
  onClose: () => void;
}
export function Drawer({
  children,
  isOpen,
  title,
  side = 'right',
  onClose,
}: PropsWithChildren<DrawerProps>) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} role="presentation">
      <aside className={styles[side]} role="dialog" aria-modal="true" aria-label={title}>
        <button type="button" onClick={onClose} aria-label="Close drawer">
          ×
        </button>
        {children}
      </aside>
    </div>
  );
}
