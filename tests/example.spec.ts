import { test, expect } from "@playwright/test"

test("has title", async ({ page }) => {
  await page.goto("https://julielaursen.github.io/")

  await expect(page).toHaveTitle(/My Portfolio/)
  await expect(
    page.getByRole("heading", { name: "Julie Coleman" })
  ).toBeVisible()
})
