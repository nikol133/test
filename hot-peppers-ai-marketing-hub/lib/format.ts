// Česká lokalizace čísel, měny a dat. Chybějící hodnota = "N/A", nikdy 0.

export const NOT_AVAILABLE = "N/A";

const czkFormatter = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("cs-CZ", {
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("cs-CZ", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  timeZone: "Europe/Prague",
});

function isMissing(value: number | null | undefined): value is null | undefined {
  return value === null || value === undefined || Number.isNaN(value);
}

export function formatCzk(value: number | null | undefined): string {
  return isMissing(value) ? NOT_AVAILABLE : czkFormatter.format(value);
}

export function formatNumber(value: number | null | undefined): string {
  return isMissing(value) ? NOT_AVAILABLE : numberFormatter.format(value);
}

export function formatPercent(value: number | null | undefined): string {
  return isMissing(value) ? NOT_AVAILABLE : `${numberFormatter.format(value)} %`;
}

export function formatDate(value: Date | string | null | undefined): string {
  if (value === null || value === undefined) return NOT_AVAILABLE;
  const date = typeof value === "string" ? new Date(value) : value;
  return Number.isNaN(date.getTime()) ? NOT_AVAILABLE : dateFormatter.format(date);
}
