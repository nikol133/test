import { describe, expect, it } from "vitest";
import { formatCzk, formatDate, formatNumber, formatPercent, NOT_AVAILABLE } from "@/lib/format";

// Intl v cs-CZ používá jako oddělovač tisíců nezlomitelnou mezeru (U+00A0).
const normalize = (s: string) => s.replace(/ | /g, " ");

describe("formatCzk", () => {
  it("formátuje celé Kč česky", () => {
    expect(normalize(formatCzk(125000))).toBe("125 000 Kč");
  });
  it("rozlišuje 0 a chybějící hodnotu", () => {
    expect(normalize(formatCzk(0))).toBe("0 Kč");
    expect(formatCzk(null)).toBe(NOT_AVAILABLE);
    expect(formatCzk(undefined)).toBe(NOT_AVAILABLE);
    expect(formatCzk(Number.NaN)).toBe(NOT_AVAILABLE);
  });
});

describe("formatNumber / formatPercent", () => {
  it("používá desetinnou čárku", () => {
    expect(formatNumber(1.5)).toBe("1,5");
    expect(formatPercent(12.345)).toBe("12,35 %");
  });
  it("vrací N/A pro null", () => {
    expect(formatNumber(null)).toBe(NOT_AVAILABLE);
    expect(formatPercent(null)).toBe(NOT_AVAILABLE);
  });
});

describe("formatDate", () => {
  it("formátuje české datum", () => {
    expect(normalize(formatDate(new Date("2026-10-13T12:00:00Z")))).toBe("13. 10. 2026");
  });
  it("vrací N/A pro chybějící nebo neplatné datum", () => {
    expect(formatDate(null)).toBe(NOT_AVAILABLE);
    expect(formatDate("není datum")).toBe(NOT_AVAILABLE);
  });
});
