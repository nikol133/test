import { describe, expect, it } from "vitest";
import { NAV_ITEMS, getNavItem, isActivePath } from "@/lib/navigation";

describe("navigace", () => {
  it("obsahuje všech 7 modulů ze specifikace ve správném pořadí", () => {
    expect(NAV_ITEMS.map((i) => i.href)).toEqual([
      "/dashboard",
      "/campaigns",
      "/offers",
      "/strategy",
      "/creative",
      "/reports",
      "/settings",
    ]);
  });
  it("zvýrazní i vnořené stránky, ale ne prefixové shody", () => {
    expect(isActivePath("/campaigns", "/campaigns")).toBe(true);
    expect(isActivePath("/campaigns/abc", "/campaigns")).toBe(true);
    expect(isActivePath("/campaignsx", "/campaigns")).toBe(false);
  });
  it("getNavItem selže pro neznámou cestu", () => {
    expect(() => getNavItem("/neexistuje")).toThrow();
  });
});
