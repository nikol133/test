// Informační architektura dle PROJECT_SPEC.md, kap. 3.

export type NavItem = {
  href: string;
  label: string;
  description: string;
  /** Blok harmonogramu, ve kterém se modul implementuje. */
  plannedBlock: number;
};

export const NAV_ITEMS: readonly NavItem[] = [
  {
    href: "/dashboard",
    label: "Přehled",
    description: "Manažerský dashboard nákladů, KPI a aktivních kampaní.",
    plannedBlock: 4,
  },
  {
    href: "/campaigns",
    label: "Kampaně",
    description: "Evidence marketingových kampaní, rozpočtů, cílů a výsledků.",
    plannedBlock: 3,
  },
  {
    href: "/offers",
    label: "Nabídky",
    description: "Hodnocení nabídek mediálních a reklamních dodavatelů váženým skóre.",
    plannedBlock: 5,
  },
  {
    href: "/strategy",
    label: "AI Strategie",
    description: "Strukturovaný návrh marketingové strategie s pomocí AI.",
    plannedBlock: 7,
  },
  {
    href: "/creative",
    label: "Kreativní studio",
    description: "Koncepty kampaní a kreativní briefy pro grafika s pomocí AI.",
    plannedBlock: 8,
  },
  {
    href: "/reports",
    label: "Reporty",
    description: "Export kampaní a manažerských reportů do CSV.",
    plannedBlock: 9,
  },
  {
    href: "/settings",
    label: "Nastavení",
    description: "Stav konfigurace, DEMO data a profil značky.",
    plannedBlock: 2,
  },
] as const;

export function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function getNavItem(href: string): NavItem {
  const item = NAV_ITEMS.find((i) => i.href === href);
  if (!item) throw new Error(`Neznámá položka navigace: ${href}`);
  return item;
}
