"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isActivePath } from "@/lib/navigation";

type NavListProps = {
  /** Aktuální cesta; prázdný řetězec = bez zvýraznění (fallback při prerenderu). */
  pathname: string;
  onNavigate?: () => void;
};

export function NavList({ pathname, onNavigate }: NavListProps) {
  return (
    <ul className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => {
        const active = pathname !== "" && isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-accent/15 text-fg shadow-[inset_3px_0_0_var(--color-accent)]"
                  : "text-muted hover:bg-surface-2 hover:text-fg"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Varianta se zvýrazněním aktivní položky podle URL. Obalit do <Suspense>. */
export function ActiveNavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return <NavList pathname={pathname} onNavigate={onNavigate} />;
}
