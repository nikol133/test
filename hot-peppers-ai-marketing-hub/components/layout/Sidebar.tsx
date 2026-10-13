import { Suspense } from "react";
import { Brand } from "./Brand";
import { ActiveNavList, NavList } from "./NavList";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-surface px-4 py-6 lg:flex">
      <div className="mb-8 px-3">
        <Brand />
      </div>
      <nav aria-label="Hlavní navigace" className="flex-1">
        <Suspense fallback={<NavList pathname="" />}>
          <ActiveNavList />
        </Suspense>
      </nav>
      <p className="px-3 text-xs text-muted">
        Interní lokální MVP · AI doporučuje, člověk schvaluje.
      </p>
    </aside>
  );
}
