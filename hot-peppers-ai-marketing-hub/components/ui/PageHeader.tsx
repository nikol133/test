import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  badge,
}: {
  title: string;
  description?: string;
  badge?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
        {badge}
      </div>
      {description ? <p className="max-w-3xl text-muted">{description}</p> : null}
    </header>
  );
}
