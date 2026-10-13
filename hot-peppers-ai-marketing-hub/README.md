# HOT PEPPERS AI MARKETING HUB

Interní lokální webová aplikace pro evidenci marketingových kampaní, hodnocení nabídek
reklamních dodavatelů a AI podporu marketingu. Vzniká jako MVP v rámci 30hodinového AI školení.
Požadavky: [`PROJECT_SPEC.md`](PROJECT_SPEC.md) · Plán a stav: [`IMPLEMENTATION_PLAN.md`](IMPLEMENTATION_PLAN.md).

> **Stav: blok 1 z 10 (kostra aplikace).** Funguje layout, navigace a stránka Nastavení
> se stavem konfigurace. Moduly Přehled, Kampaně, Nabídky, AI Strategie, Kreativní studio
> a Reporty jsou zatím jen označené placeholdery bez dat a bez akcí.

## Požadavky

- Node.js ≥ 20.19 (ověřeno na 22.22), npm ≥ 10

## Spuštění lokálně

```bash
cd hot-peppers-ai-marketing-hub
npm install            # nainstaluje závislosti a vygeneruje Prisma klienta
cp .env.example .env   # lokální konfigurace (není v Gitu)
npm run dev            # http://localhost:3000
```

Produkční build: `npm run build && npm run start`.

## Proměnné prostředí

| Proměnná | Povinná | Popis |
|---|---|---|
| `DATABASE_URL` | ne | SQLite soubor, výchozí `file:./prisma/dev.db` |
| `ANTHROPIC_API_KEY` | ne | Klíč pro AI funkce (od bloku 6). Čte se **pouze na serveru**, nikdy nepoužívejte prefix `NEXT_PUBLIC_`. |
| `ANTHROPIC_MODEL` | ne | ID modelu; ověřte ho v dokumentaci Anthropic. Bez něj zůstává AI vypnutá. |

Bez API klíče běží aplikace v **ne-AI režimu**: AI akce budou zřetelně nedostupné
a aplikace nikdy nesimuluje AI odpovědi. Stav je vidět na stránce **Nastavení**.

## Skripty

| Příkaz | Účel |
|---|---|
| `npm run dev` | vývojový server |
| `npm run build` | produkční build |
| `npm run lint` | ESLint |
| `npm run typecheck` | generování typů rout + `tsc --noEmit` |
| `npm test` | Vitest (unit testy) |
| `npm run check` | lint + typecheck + testy |
| `npm run db:generate` | vygeneruje Prisma klienta |
| `npm run db:validate` | ověří Prisma schéma |

## Struktura

```text
app/                 stránky (App Router) – dashboard, campaigns, offers, strategy, creative, reports, settings
components/layout/   AppShell, Sidebar, MobileNav, navigace
components/ui/       Card, Badge/DemoBadge, PageHeader, ModulePlaceholder
lib/config/          čtení konfigurace (čistá logika + server-only vstup)
lib/db/              Prisma klient (generovaný klient v lib/db/generated, mimo Git)
lib/format.ts        české formátování Kč, čísel a dat; chybějící hodnota = N/A
lib/navigation.ts    informační architektura
prisma/              schema.prisma (modely od bloku 2)
tests/               Vitest testy
```

## Data a bezpečnost

- Ukázková data (od bloku 2) budou **fiktivní** a označená štítkem **DEMO** – nejde o skutečné údaje Hot Peppers.
- Nepoužívejte osobní údaje hostů a zaměstnanců, důvěrné smlouvy ani interní finanční podklady bez schválení.
- Aplikace nic nepublikuje ani neodesílá externě. Není určena pro produkční nasazení
  (chybí autentizace, autorizace, zálohy a audit).

## Známá omezení (blok 1)

- Datový model, seed, CRUD, KPI, grafy, export a AI integrace zatím nejsou implementované.
- Prisma schéma obsahuje jen konfiguraci; databáze se vytvoří až migrací v bloku 2.
- Neschválené logo a fotografie se nepoužívají – značka je textový placeholder „HOT PEPPERS“.
- Pouze tmavý režim; světlý motiv není v rozsahu MVP.
