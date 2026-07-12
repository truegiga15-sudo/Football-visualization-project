import type { ButtonHTMLAttributes } from 'react';
import type { ComponentSize, ComponentVariant, IconName } from '@/design-system';
import { Icon } from '@/components/ui/Icon/Icon';
import { classNames } from '@/utils/classNames';
import styles from '@/components/ui/shared.module.css';
import localStyles from './IconButton.module.css';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  label: string;
  variant?: ComponentVariant;
  size?: ComponentSize;
}
export function IconButton({
  icon,
  label,
  className,
  variant = 'ghost',
  size = 'md',
  type = 'button',
  ...props
}: IconButtonProps) {
  return (
    <button
      className={classNames(
        styles.control,
        styles[variant],
        styles[size],
        localStyles.iconButton,
        className,
      )}
      type={type}
      aria-label={label}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
}
