import type { PropsWithChildren } from 'react';
export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
export function Modal({ children, isOpen, title, onClose }: PropsWithChildren<ModalProps>) {
  if (!isOpen) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" onClick={onClose} aria-label="Close dialog">
        ×
      </button>
      {children}
    </div>
  );
}
