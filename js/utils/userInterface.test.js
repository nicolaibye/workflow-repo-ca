import { isActivePath } from "./userInterface";
import { expect, describe, it } from "vitest";

describe("isActivePath", () => {
  // return true when current path matches href exactly
  it("should return true when current path matches href exactly", () => {
    const currentPath = "/venue";
    const href = "/venue";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // return true for root path when the path is "/" or "/index.html"
  it("should return true for root path when the path is '/' or '/index.html'", () => {
    const currentPath = "/index.html";
    const href = "/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // return true when the current path includes the href
  it("should return true when the current path includes the href", () => {
    const currentPath = "/venues";
    const href = "/venue";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // return false when paths don't match
  it("should return false when paths don't match", () => {
    const currentPath = "/venue";
    const href = "/venues";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });
});
