import type { ReactNode } from "react";

type BadgeVariant = "neutral" | "accent" | "demo" | "success" | "danger";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface-2 text-muted",
  accent: "border-accent/40 bg-accent/10 text-accent",
  demo: "border-demo/50 bg-demo/10 text-demo",
  success: "border-success/40 bg-success/10 text-success",
  danger: "border-danger/40 bg-danger/10 text-danger",
};

export function Badge({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold tracking-wide ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </span>
  );
}

/** Jednotný štítek pro fiktivní ukázková data (PROJECT_SPEC.md, kap. 11). */
export function DemoBadge() {
  return (
    <span title="Fiktivní ukázková data – nejde o skutečné údaje Hot Peppers.">
      <Badge variant="demo">DEMO</Badge>
    </span>
  );
}
