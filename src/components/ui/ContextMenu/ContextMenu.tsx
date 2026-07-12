import type { ReactNode } from 'react';
import styles from './ContextMenu.module.css';
export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onSelect: () => void;
  disabled?: boolean;
}
export interface ContextMenuProps {
  items: readonly ContextMenuItem[];
  label?: string;
}
export function ContextMenu({ items, label = 'Context menu' }: ContextMenuProps) {
  return (
    <menu className={styles.menu} aria-label={label}>
      {items.map((item) => (
        <li key={item.id}>
          <button type="button" onClick={item.onSelect} disabled={item.disabled}>
            {item.icon}
            {item.label}
          </button>
        </li>
      ))}
    </menu>
  );
}
