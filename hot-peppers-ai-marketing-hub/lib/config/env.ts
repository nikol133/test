// Čistá logika čtení konfigurace – bez přístupu k process.env, aby šla testovat.
// Serverový vstupní bod je lib/config/server.ts.

export type AiConfigStatus =
  | { configured: true; model: string }
  | { configured: false; reason: "missing-key" | "missing-model" };

type EnvLike = Record<string, string | undefined>;

function clean(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

/**
 * Zjistí, zda je AI nakonfigurována. Vrací pouze stav a název modelu,
 * NIKDY samotný API klíč – výsledek je bezpečné předat do UI.
 */
export function getAiConfigStatus(env: EnvLike): AiConfigStatus {
  if (!clean(env.ANTHROPIC_API_KEY)) {
    return { configured: false, reason: "missing-key" };
  }
  const model = clean(env.ANTHROPIC_MODEL);
  if (!model) {
    return { configured: false, reason: "missing-model" };
  }
  return { configured: true, model };
}

export function describeDatabaseUrl(env: EnvLike): string {
  return clean(env.DATABASE_URL) ?? "file:./prisma/dev.db (výchozí)";
}
