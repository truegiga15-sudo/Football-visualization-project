import type { ReactNode } from 'react';
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
    <div>
      <div role="tablist">
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
      <div role="tabpanel">{active?.panel}</div>
    </div>
  );
}
