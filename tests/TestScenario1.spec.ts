import { expect } from "@playwright/test";
import test from "../lambdatest-setup";
import { data } from '../data'


test("Test Scenario 1", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.waitForLoadState("domcontentloaded");
    await page.getByRole("link", { name: "Simple Form Demo" }).click();
    await page.getByPlaceholder("Please enter your Message").fill(data.WELCOME_MSG);
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    await expect(page.locator("#message")).toHaveText(data.WELCOME_MSG);
});