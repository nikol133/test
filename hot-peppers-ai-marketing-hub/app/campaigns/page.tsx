import type { Metadata } from "next";
import { ModulePlaceholder } from "@/components/ui/ModulePlaceholder";

export const metadata: Metadata = { title: "Kampaně" };

export default function CampaignsPage() {
  return (
    <ModulePlaceholder
      href="/campaigns"
      upcoming={[
        "Seznam kampaní s vyhledáváním a filtry (kanál, stav, období, DEMO).",
        "Formulář pro vytvoření a úpravu kampaně s validací na serveru.",
        "Detail kampaně s deterministicky vypočtenými KPI a poznámkami.",
        "Smazání kampaně s potvrzením.",
      ]}
    />
  );
}
