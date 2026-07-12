import {
  AlertCircle,
  Check,
  ChevronDown,
  ChevronRight,
  Command,
  Info,
  LoaderCircle,
  Menu,
  Search,
  Settings,
  X,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';

export const icons = {
  alert: AlertCircle,
  check: Check,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  command: Command,
  info: Info,
  loader: LoaderCircle,
  menu: Menu,
  search: Search,
  settings: Settings,
  close: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
export type IconProps = LucideProps & { name: IconName };
