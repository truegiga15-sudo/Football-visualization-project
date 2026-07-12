import type { ReactNode } from 'react';
import { Input } from '@/components/ui/Input/Input';
import styles from './CommandPalette.module.css';
export interface CommandPaletteItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onSelect: () => void;
}
export interface CommandPaletteProps {
  isOpen: boolean;
  label?: string;
  items: readonly CommandPaletteItem[];
  query: string;
  onQueryChange: (value: string) => void;
}
export function CommandPalette({
  isOpen,
  label = 'Command palette',
  items,
  query,
  onQueryChange,
}: CommandPaletteProps) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={label}>
      <div className={styles.panel}>
        <Input
          aria-label="Search commands"
          value={query}
          onChange={(event) => onQueryChange(event.currentTarget.value)}
          placeholder="Search commands"
        />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={item.onSelect}>
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
