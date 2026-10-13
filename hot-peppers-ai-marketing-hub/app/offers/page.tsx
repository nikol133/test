import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ui/ModulePlaceholder";

export const metadata: Metadata = { title: "Nabídky" };

export default function OffersPage() {
  return (
    <ModulePlaceholder
      href="/offers"
      upcoming={[
        "Evidence nabídek dodavatelů (cena, období, kanál, podmínky, plán měření).",
        "Šest kritérií 0–5 s volbou „nelze hodnotit“ a odůvodněním.",
        "Vážené skóre s vždy zobrazeným pokrytím (coverage); bez finálního verdiktu při neúplnosti.",
        "AI analýza nabídky – pouze při nastaveném API klíči (blok 6).",
      ]}
    />
  );
}
