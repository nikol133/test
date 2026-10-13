import { describe, expect, it } from "vitest";
import { getAiConfigStatus } from "@/lib/config/env";

describe("getAiConfigStatus", () => {
  it("bez klíče hlásí ne-AI režim", () => {
    expect(getAiConfigStatus({})).toEqual({ configured: false, reason: "missing-key" });
    expect(getAiConfigStatus({ ANTHROPIC_API_KEY: "   " })).toEqual({
      configured: false,
      reason: "missing-key",
    });
  });
  it("vyžaduje explicitně nastavený model (žádné vymyšlené výchozí ID)", () => {
    expect(getAiConfigStatus({ ANTHROPIC_API_KEY: "test-key" })).toEqual({
      configured: false,
      reason: "missing-model",
    });
  });
  it("nikdy nevrací samotný klíč", () => {
    const status = getAiConfigStatus({ ANTHROPIC_API_KEY: "secret-123", ANTHROPIC_MODEL: "m" });
    expect(status).toEqual({ configured: true, model: "m" });
    expect(JSON.stringify(status)).not.toContain("secret-123");
  });
});
