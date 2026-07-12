import type { PropsWithChildren } from 'react';
import { IconButton } from '@/components/ui/IconButton/IconButton';
import styles from './Modal.module.css';
export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
export function Modal({ children, isOpen, title, onClose }: PropsWithChildren<ModalProps>) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <section className={styles.modal} role="dialog" aria-modal="true" aria-label={title}>
        <header>
          <h2>{title}</h2>
          <IconButton icon="close" label="Close dialog" onClick={onClose} />
        </header>
        {children}
      </section>
    </div>
  );
}
