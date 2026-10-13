import { describe, expect, it } from "vitest";
// @ts-ignore - plain JS module
import { isPhone, isEmail } from "@/site/validation.js";
// @ts-ignore - plain JS module
import { checkCredentials } from "@/site/store.js";

describe("site rules", () => {
  it("accepts the demo admin credentials", () => {
    expect(checkCredentials("admin@shreesiddhivinayak.com", "Admin@123")).toBe(true);
  });
  it("rejects a wrong password", () => {
    expect(checkCredentials("admin@shreesiddhivinayak.com", "admin123")).toBe(false);
  });
  it("accepts Indian and international phone formats", () => {
    expect(isPhone("3254315445")).toBe(true);
    expect(isPhone("+91 98200 12345")).toBe(true);
    expect(isPhone("+44 20 7946 0958")).toBe(true);
    expect(isPhone("12ab")).toBe(false);
  });
  it("validates email", () => {
    expect(isEmail("shreesiddhivinayak@clearing.com")).toBe(true);
    expect(isEmail("bad@")).toBe(false);
  });
});
