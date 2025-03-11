import { getUsername } from "./storage";
import { describe, it, expect, beforeEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // return true if the name from the user is stored in the local storage
  it("should return name if the name from the user is stored in the local storage", () => {
    const user = {
      name: "John Doe",
      email: "j@j.com",
      password: "123456",
      accessToken: "123456789",
    };
    localStorage.setItem("user", JSON.stringify(user));
    const result = getUsername();
    expect(result).toBe(user.name);
  });

  // return null when no user exists in storage
  it("should return null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
