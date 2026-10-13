import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ui/ModulePlaceholder";

export const metadata: Metadata = { title: "Reporty" };

export default function ReportsPage() {
  return (
    <ModulePlaceholder
      href="/reports"
      upcoming={[
        "CSV export kampaní a manažerského reportu (UTF-8 s BOM pro český Excel).",
        "Přehled uložených AI výstupů s datem a použitým modelem.",
        "Viditelné rozlišení DEMO a reálných dat i v exportu.",
      ]}
    />
  );
}
