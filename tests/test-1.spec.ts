import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator("li").filter({ hasText: "入力フォーム" }).click();
  await page.getByRole("link", { name: "入力フォーム" }).click();
  await page.getByRole("link", { name: "ホーム" }).click();
  await page.getByRole("link", { name: "入力フォーム" }).click();
  await expect(
    page.locator("li").filter({ hasText: "入力フォーム" })
  ).toBeVisible();
  await expect(page.getByRole("heading")).toContainText("入力フォーム");
});
