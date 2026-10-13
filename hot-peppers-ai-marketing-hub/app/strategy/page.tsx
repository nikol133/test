import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ui/ModulePlaceholder";

export const metadata: Metadata = { title: "AI Strategie" };

export default function StrategyPage() {
  return (
    <ModulePlaceholder
      href="/strategy"
      upcoming={[
        "Formulář: cíl, cílová skupina, horizont (výchozí 90 dní), rozpočet, kanály, omezení.",
        "Strukturovaný plán oddělující fakta, předpoklady a doporučení.",
        "Rozpočtové varianty 70/100/130 % pouze při zadaném rozpočtu.",
        "Uložení výstupu a kopírování Markdownu. Bez API klíče je modul nedostupný.",
      ]}
    />
  );
}
