import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ui/ModulePlaceholder";

export const metadata: Metadata = { title: "Kreativní studio" };

export default function CreativePage() {
  return (
    <ModulePlaceholder
      href="/creative"
      upcoming={[
        "Formulář: účel, cílová skupina, jazyk CZ/EN, kanál, formát, tón, schválená fakta a zakázaná tvrzení.",
        "Tři koncepty kampaně se sloganem, podpůrným textem, CTA a vizuálním briefem.",
        "Rizika schválení na reklamních platformách; nutné lidské schválení.",
        "Žádná automatická publikace. Bez API klíče je modul nedostupný.",
      ]}
    />
  );
}
