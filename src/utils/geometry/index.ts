import type { Coordinate } from '@/types';
export function distanceBetween(a: Coordinate, b: Coordinate): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}
