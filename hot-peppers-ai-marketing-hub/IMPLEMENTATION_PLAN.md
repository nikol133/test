# IMPLEMENTATION_PLAN – HOT PEPPERS AI MARKETING HUB

Plán 30hodinového MVP podle `PROJECT_SPEC.md` (kap. 14): 10 bloků po 3 hodinách.
Po každém bloku: `npm run check` + `npm run build`, shrnutí (změněné soubory, co funguje,
co chybí, další krok) a **čekání na potvrzení** před dalším blokem.

**Priorita při skluzu:** kampaně + dashboard + nabídky + jedna AI analýza (bloky 1–6).
Strategie (7) a kreativní studio (8) mohou přejít do druhé etapy.

Legenda: ✅ hotovo · ⬜ čeká

---

## Blok 1 (h 1–3) – Inicializace, layout, navigace, konfigurace ✅

1. Ověřit prostředí (Node 22, npm) a aktuální stabilní verze balíčků.
2. Next.js 16.4 (App Router) + TypeScript + Tailwind CSS 4 + ESLint.
3. Design tokeny tmavého režimu (antracit, tlumená fialová/růžová), AA kontrast, viditelný fokus.
4. Layout: levý sidebar (desktop), rozbalovací menu (mobil), odkaz „Přeskočit na obsah“.
5. Navigace 7 modulů dle kap. 3 se zvýrazněním aktivní stránky (`aria-current`).
6. Poctivé placeholder stránky modulů (bez dat a bez falešných tlačítek), `not-found`, `error`, `loading`.
7. Prisma 7 + SQLite: `schema.prisma` (jen generator/datasource), `prisma.config.ts`, DB klient s adaptérem.
8. `.env.example`, serverové čtení konfigurace (`server-only`), stránka Nastavení se stavem AI/DB (klíč se nikdy nezobrazuje).
9. Vitest + první testy (formátování Kč/dat, N/A vs. 0, stav AI konfigurace, navigace).
10. README se spuštěním a známými omezeními.

**Výstup:** spustitelná kostra.

## Blok 2 (h 4–6) – Datový model, migrace, seed ⬜

1. Enumy a modely `Campaign`, `Offer`, `OfferCriterionScore`, `AiArtifact`, `BrandProfile`, `Settings` (kap. 4).
2. Peníze jako celé Kč (`Int`), nullable metriky, `isDemo`, `createdAt/updatedAt`, UUID.
3. První migrace (`prisma migrate dev`), skripty `db:migrate`, `db:seed`, `db:reset`.
4. Seed: 6 fiktivních kampaní (různé kanály) + 3 fiktivní nabídky, vše `isDemo=true` a označené „DEMO“.
5. Zod schémata pro Campaign/Offer (endDate ≥ startDate, hodnoty ≥ 0, celá čísla).
6. Nastavení: akce „Smazat DEMO data“ s potvrzením (server action).
7. Testy validací.

**Výstup:** funkční databáze s DEMO daty.

## Blok 3 (h 7–9) – CRUD kampaní ⬜

1. Datová vrstva `lib/db/campaigns.ts` (list/get/create/update/delete).
2. Seznam kampaní (tabulka na desktopu / karty na mobilu), štítek DEMO, stavy empty/loading/error.
3. Formulář vytvoření/úpravy (server actions + Zod, zachování dat při chybě, přístupné popisky).
4. Detail kampaně s poznámkami; smazání s potvrzením.
5. Vyhledávání a filtry: kanál, stav, období, DEMO/REÁLNÁ (searchParams).

**Výstup:** evidence kampaní.

## Blok 4 (h 10–12) – KPI, dashboard, grafy, CSV kampaní ⬜

1. `lib/calculations/kpi.ts`: odchylka, využití rozpočtu, CTR, CPL, CPR, ROAS (atributovaný, ne kauzální) – `null` místo dělení nulou.
2. Unit testy výpočtů včetně rozlišení NULL/0.
3. KPI v detailu kampaně s tooltipem (definice + zdroj).
4. Dashboard: součty, aktivní kampaně, leady, rezervace, CPL/CPR; filtr DEMO/REÁLNÁ, data se nemíchají.
5. Recharts: náklady podle kanálu, trend nákladů v čase.
6. CSV export filtrovaného seznamu kampaní (UTF-8 BOM) + test.

**Výstup:** dashboard; splněn akceptační test modulu A (kap. 6).

## Blok 5 (h 13–15) – Nabídky a vážené bodování ⬜

1. CRUD nabídek (vložení textu nabídky, bez PDF importu).
2. Formulář 6 kritérií 0–5 / „nelze hodnotit“ + odůvodnění.
3. `lib/calculations/offerScore.ts`: váhy 25/20/20/15/10/10, coverage, normalizedScore; testy.
4. Zobrazení skóre + coverage, silné/slabé stránky; při coverage < 100 pouze „předběžné, neúplné“.
5. Upozornění, že ani plné skóre není důkaz ROI.

**Výstup:** Offer Evaluator bez AI.

## Blok 6 (h 16–18) – Anthropic API, AI analýza nabídky ⬜

1. Ověřit aktuální `@anthropic-ai/sdk` a platná model ID v dokumentaci (žádné vymyšlené ID).
2. `lib/ai/`: `generateStructuredAnalysis(kind, input, brandProfile)`, šablona systémových instrukcí pro každý režim.
3. Pouze server-side; timeout, limity délky, validace vstupu i výstupu, srozumitelné chyby.
4. Text nabídky jako nedůvěryhodný vstup (oddělený od instrukcí).
5. Tlačítko „AI analýza“ jen při konfiguraci; jinak informace o konfiguraci (žádná simulace).
6. Uložení `AiArtifact` (datum, model), varování „AI výstup vyžaduje kontrolu“.
7. Testy: ne-AI režim, validace, mock SDK (jen v testech, nikdy v UI).

**Výstup:** první AI funkce.

## Blok 7 (h 19–21) – AI strategie ⬜

Formulář (cíl, cílová skupina, horizont 90 dní, rozpočet, kanály, omezení, kontext), strukturovaný
výstup s oddělením fakt / předpokladů / doporučení, varianty 70/100/130 % jen se zadaným rozpočtem,
uložení jako `AiArtifact` a kopírování Markdownu.

**Výstup:** generátor strategie.

## Blok 8 (h 22–24) – Kreativní studio ⬜

Formulář (účel, cílová skupina, CZ/EN, kanál, formát, tón, schválená fakta, zakázaná tvrzení),
3 koncepty, slogan/text/CTA, vizuální brief, rizika platforem (adult nightlife), doporučený koncept,
povinné lidské schválení. Editace profilu značky (`BrandProfile`) v Nastavení.

**Výstup:** generátor kreativních briefů.

## Blok 9 (h 25–27) – Reporty, export, testy, ošetření chyb ⬜

Stránka Reporty (CSV reportu, přehled AI artefaktů), revize stavů error/empty/loading,
Playwright test hlavního toku (pokud se vejde), kontrola, že klíč není v klientském bundle.

**Výstup:** stabilní MVP.

## Blok 10 (h 28–30) – Dokumentace, demonstrace, opravy ⬜

README (instalace, proměnné, limity, známé nedostatky), průchod scénářem
kampaň → dashboard → nabídka → AI analýza → export, opravy nalezených chyb,
kontrola akceptačních kritérií (kap. 15).

**Výstup:** předání projektu.

---

## Rozhodnutí a předpoklady (blok 1)

- **Umístění:** aplikace je v podsložce `hot-peppers-ai-marketing-hub/`; existující `index.html` v kořeni repozitáře (kalkulačka akce) zůstal beze změny.
- **Verze:** Next.js 16.4.0, React 19.3, Tailwind CSS 4.3, TypeScript 5.9 (výchozí volba `create-next-app`), Prisma 7.10.0 (8.x je zatím jen RC), Vitest 5.
- **Prisma 7** vyžaduje driver adaptér → `@prisma/adapter-better-sqlite3`; URL je v `prisma.config.ts`, klient se generuje do `lib/db/generated/` (není v Gitu, vzniká při `npm install`).
- **Fonty:** systémové písmo (bez `next/font/google`), aby build nevyžadoval síť.
- **shadcn/ui** zatím nepoužito – vlastní malé komponenty stačí; lze doplnit později, pokud bude přínosné.
- **AI model:** v kódu není žádné výchozí model ID; AI je „nakonfigurována“ jen při nastaveném `ANTHROPIC_API_KEY` i `ANTHROPIC_MODEL`.
- **Next.js 16 specifika:** zapnuté `cacheComponents` a `partialPrefetching` (výchozí šablona); stránky čtoucí konfiguraci za běhu používají `connection()` uvnitř `<Suspense>`.
