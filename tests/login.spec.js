import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("user can login to the website", async ({ page }) => {
    // go to login screen
    await page.goto("/login/");

    // fill in email and password
    await page.locator('input[name="email"]').fill(process.env.TEST_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_PASSWORD);

    // click login
    await page.getByRole("button", { name: "Login" }).click();

    // check if user is logged in by checking for logout button
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong credetials show error message", async ({ page }) => {
    // go to login screen
    await page.goto("/login/");

    // fill in email and wrong password
    await page.locator('input[name="email"]').fill(process.env.TEST_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    // click login
    await page.getByRole("button", { name: "Login" }).click();

    // check for error message
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
