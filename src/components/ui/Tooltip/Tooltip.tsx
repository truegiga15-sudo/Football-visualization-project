import type { PropsWithChildren, ReactNode } from 'react';
export interface TooltipProps {
  content: ReactNode;
}
export function Tooltip({ children, content }: PropsWithChildren<TooltipProps>) {
  return <span title={typeof content === 'string' ? content : undefined}>{children}</span>;
}
