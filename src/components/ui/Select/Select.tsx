import type { SelectHTMLAttributes } from 'react';
import type { DropdownOption } from '@/components/ui/Dropdown/Dropdown';
import styles from '@/components/ui/shared.module.css';
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: readonly DropdownOption[];
}
export function Select({ label, options, id, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replaceAll(' ', '-');
  const select = (
    <select id={selectId} className={styles.field} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return label ? (
    <label className={styles.label} htmlFor={selectId}>
      {label}
      {select}
    </label>
  ) : (
    select
  );
}
