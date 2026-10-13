"use client";

import { Suspense, useState } from "react";
import { Brand } from "./Brand";
import { ActiveNavList, NavList } from "./NavList";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="sticky top-0 z-20 border-b border-border bg-surface/95 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <Brand onNavigate={close} />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-fg hover:bg-surface-2"
        >
          {open ? "Zavřít" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Hlavní navigace" className="px-4 pb-4">
          <Suspense fallback={<NavList pathname="" onNavigate={close} />}>
            <ActiveNavList onNavigate={close} />
          </Suspense>
        </nav>
      ) : null}
    </div>
  );
}
