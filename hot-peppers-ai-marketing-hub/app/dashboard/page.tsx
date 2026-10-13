import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ui/ModulePlaceholder";

export const metadata: Metadata = { title: "Přehled" };

export default function DashboardPage() {
  return (
    <ModulePlaceholder
      href="/dashboard"
      upcoming={[
        "Plánované a skutečné náklady, počet aktivních kampaní, leady a potvrzené rezervace.",
        "CPL a CPR pouze tam, kde jsou definované; chybějící hodnoty jako N/A, nikdy 0.",
        "Graf nákladů podle kanálu a trend nákladů v čase.",
        "Filtr DEMO / REÁLNÁ – DEMO a reálná data se v součtech nemíchají.",
      ]}
    />
  );
}
