// Konfigurace Prisma CLI (Prisma 7). Proměnné prostředí se načítají z .env.
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Výchozí hodnota umožní `prisma generate` i bez vytvořeného .env.
    url: process.env["DATABASE_URL"] ?? "file:./prisma/dev.db",
  },
});
