import type { SelectHTMLAttributes } from 'react';
export interface DropdownOption {
  value: string;
  label: string;
}
export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly DropdownOption[];
}
export function Dropdown({ label, options, id, ...props }: DropdownProps) {
  const selectId = id ?? label.toLowerCase().replaceAll(' ', '-');
  return (
    <label htmlFor={selectId}>
      {label}
      <select id={selectId} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
