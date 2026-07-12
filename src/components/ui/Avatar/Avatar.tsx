import styles from './Avatar.module.css';
export interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}
export function Avatar({ name, src, size = 'md' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return src ? (
    <img className={styles[size]} src={src} alt={name} />
  ) : (
    <span className={styles[size]} aria-label={name}>
      {initials}
    </span>
  );
}
