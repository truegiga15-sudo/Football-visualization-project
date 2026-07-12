import { icons, type IconProps } from '@/design-system/icons';

export function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
  const IconComponent = icons[name];
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden ?? true}
      {...props}
    />
  );
}
