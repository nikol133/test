import "server-only";
import { describeDatabaseUrl, getAiConfigStatus } from "./env";

// Čte proměnné prostředí výhradně na serveru. `server-only` zajistí chybu
// při buildu, pokud by modul někdo importoval do klientské komponenty.
export function readAiConfigStatus() {
  return getAiConfigStatus(process.env);
}

export function readDatabaseUrl() {
  return describeDatabaseUrl(process.env);
}
