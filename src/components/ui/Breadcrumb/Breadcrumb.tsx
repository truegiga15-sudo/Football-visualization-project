import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
export interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
  label?: string;
}
export function Breadcrumb({ items, label = 'Breadcrumb' }: BreadcrumbProps) {
  return (
    <nav aria-label={label}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
