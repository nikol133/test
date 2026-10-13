import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-xl border border-border bg-surface p-5 ${className}`}
      aria-label={title}
    >
      {title ? <h2 className="mb-3 text-base font-semibold">{title}</h2> : null}
      {children}
    </section>
  );
}
