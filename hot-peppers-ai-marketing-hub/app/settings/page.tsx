import type { Metadata } from "next";
import { connection } from "next/server";
import { Suspense } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { readAiConfigStatus, readDatabaseUrl } from "@/lib/config/server";
import { getNavItem } from "@/lib/navigation";

export const metadata: Metadata = { title: "Nastavení" };

async function ConfigStatus() {
  // Konfigurace se čte při každém požadavku, ne při buildu.
  await connection();
  const ai = readAiConfigStatus();
  const databaseUrl = readDatabaseUrl();

  return (
    <dl className="grid gap-4 text-sm sm:grid-cols-[12rem_1fr]">
      <dt className="font-medium text-muted">AI (Anthropic API)</dt>
      <dd className="flex flex-col gap-1">
        {ai.configured ? (
          <>
            <span>
              <Badge variant="success">Nakonfigurováno</Badge>
            </span>
            <span className="text-muted">
              Model: <code className="font-mono text-fg">{ai.model}</code>. AI funkce se
              zpřístupní v bloku 6.
            </span>
          </>
        ) : (
          <>
            <span>
              <Badge variant="neutral">Ne-AI režim</Badge>
            </span>
            <span className="text-muted">
              {ai.reason === "missing-key"
                ? "ANTHROPIC_API_KEY není nastaven."
                : "ANTHROPIC_MODEL není nastaven."}{" "}
              Evidence, dashboard a ruční hodnocení budou fungovat; AI akce budou zřetelně
              nedostupné. Nastavení viz README.
            </span>
          </>
        )}
      </dd>
      <dt className="font-medium text-muted">Databáze</dt>
      <dd>
        <code className="font-mono">{databaseUrl}</code>
        <span className="block text-muted">
          SQLite pro lokální prototyp. Datový model se doplní v bloku 2.
        </span>
      </dd>
    </dl>
  );
}

export default function SettingsPage() {
  const item = getNavItem("/settings");
  return (
    <>
      <PageHeader title={item.label} description={item.description} />
      <div className="grid gap-6">
        <Card title="Stav konfigurace">
          <Suspense fallback={<p className="text-muted">Načítám konfiguraci…</p>}>
            <ConfigStatus />
          </Suspense>
          <p className="mt-4 text-xs text-muted">
            API klíč se čte pouze na serveru a v rozhraní se nikdy nezobrazuje.
          </p>
        </Card>
        <Card title="Připravuje se">
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            <li>Přepínač DEMO režimu a akce „Smazat DEMO data“ s potvrzením (blok 2).</li>
            <li>Profil značky: positioning, cílové skupiny, tón, schválená a zakázaná tvrzení.</li>
          </ul>
        </Card>
      </div>
    </>
  );
}
