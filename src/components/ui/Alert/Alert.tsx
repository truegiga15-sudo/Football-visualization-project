import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { ComponentVariant, IconName } from '@/design-system';
import { Icon } from '@/components/ui/Icon/Icon';
import { classNames } from '@/utils/classNames';
import shared from '@/components/ui/shared.module.css';
import styles from './Alert.module.css';
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ComponentVariant;
  icon?: IconName;
  title?: string;
}
export function Alert({
  children,
  className,
  variant = 'minimal',
  icon = 'info',
  title,
  ...props
}: PropsWithChildren<AlertProps>) {
  return (
    <div className={classNames(styles.alert, shared[variant], className)} role="status" {...props}>
      <Icon name={icon} />
      <div>
        {title ? <strong>{title}</strong> : null}
        {children}
      </div>
    </div>
  );
}
