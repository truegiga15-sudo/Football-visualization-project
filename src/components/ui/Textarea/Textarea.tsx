import type { TextareaHTMLAttributes } from 'react';
import styles from '@/components/ui/shared.module.css';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
export function Textarea({ label, id, ...props }: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replaceAll(' ', '-');
  const textarea = <textarea id={textareaId} className={styles.field} {...props} />;
  return label ? (
    <label className={styles.label} htmlFor={textareaId}>
      {label}
      {textarea}
    </label>
  ) : (
    textarea
  );
}
