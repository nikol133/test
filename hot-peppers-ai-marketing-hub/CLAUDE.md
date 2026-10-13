# Claude Code – pracovní pravidla

Před prací si přečti `PROJECT_SPEC.md`. Tento dokument je zdrojem požadavků.

- Postupuj po tříhodinových blocích a čekej na potvrzení před dalším blokem.
- Priorita: funkční MVP před rozšiřováním rozsahu.
- Všechna obchodní čísla v seed datech jsou DEMO, nikoli skutečné údaje klubu.
- Neprováděj externí publikování, zasílání ani produkční nasazení bez souhlasu.
- Nevystavuj `ANTHROPIC_API_KEY` v klientovi ani v repozitáři.
- Při AI výstupech odděluj fakta, předpoklady a doporučení.
- Každou změnu ověř dostupnými testy a zdokumentuj omezení.
- Pokud chybí API klíč, použij transparentní ne-AI režim; nikdy nevymýšlej AI výstupy.

## Zahájení

Nejprve vytvoř `IMPLEMENTATION_PLAN.md`, pak implementuj pouze blok 1 (hodiny 1–3) podle `PROJECT_SPEC.md`.

## Poznámky k prostředí

- Next.js 16.4 má oproti starším verzím odlišné konvence (Cache Components, Partial Prefetching, `retry` v `error.tsx`). Před psaním kódu čti dokumentaci v `node_modules/next/dist/docs/` – viz `AGENTS.md`.
- Prisma 7: připojovací URL je v `prisma.config.ts`, klient se generuje do `lib/db/generated/` a používá adaptér `@prisma/adapter-better-sqlite3`.
- Plán a stav bloků: `IMPLEMENTATION_PLAN.md`.

@AGENTS.md
