import type { ReactNode } from 'react';
import styles from './Accordion.module.css';
export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}
export interface AccordionProps {
  items: readonly AccordionItem[];
}
export function Accordion({ items }: AccordionProps) {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <details key={item.id} className={styles.item}>
          <summary>{item.title}</summary>
          <div>{item.content}</div>
        </details>
      ))}
    </div>
  );
}
