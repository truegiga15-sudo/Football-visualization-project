import type { ReactNode } from 'react';
import styles from './Tabs.module.css';
export interface TabItem {
  id: string;
  label: string;
  panel: ReactNode;
}
export interface TabsProps {
  items: readonly TabItem[];
  activeId: string;
  onChange: (id: string) => void;
}
export function Tabs({ items, activeId, onChange }: TabsProps) {
  const active = items.find((item) => item.id === activeId);
  return (
    <div className={styles.root}>
      <div className={styles.list} role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        {active?.panel}
      </div>
    </div>
  );
}
