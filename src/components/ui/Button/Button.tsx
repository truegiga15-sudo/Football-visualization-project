import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import type { ComponentSize, ComponentVariant, IconName } from '@/design-system';
import { classNames } from '@/utils/classNames';
import { Icon } from '@/components/ui/Icon/Icon';
import styles from '@/components/ui/shared.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ComponentVariant;
  size?: ComponentSize;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  leadingIcon,
  trailingIcon,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={classNames(styles.control, styles[variant], styles[size], className)}
      type={type}
      {...props}
    >
      {leadingIcon ? <Icon name={leadingIcon} /> : null}
      {children}
      {trailingIcon ? <Icon name={trailingIcon} /> : null}
    </button>
  );
}
