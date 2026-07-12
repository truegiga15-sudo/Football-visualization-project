export function formatPercent(value: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 1 }).format(
    value,
  );
}
