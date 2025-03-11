import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("user can navigate to the home page and click a venue", async ({
    page,
  }) => {
    // go to home page
    await page.goto("/");

    // wait for venue list to load
    await page.waitForSelector("#venue-container");

    // click a venue
    await page.locator("#venue-container a").first().click();

    // wait for venue details to load
    await page.waitForSelector("#venue-container");

    // venue details is in the header
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
