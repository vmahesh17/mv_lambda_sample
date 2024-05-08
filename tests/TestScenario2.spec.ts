import { expect } from '@playwright/test';
import test from "../lambdatest-setup";
import { data } from '../data'


test("Test Scenario 2", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.waitForLoadState("domcontentloaded");
    await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();
    await page.waitForSelector("#slider3");
    let defaultValTxt = await page.locator("#rangeSuccess").innerText();
    expect(defaultValTxt).toBe("15");
    await page.locator("#slider3").getByRole("slider").fill("95");
    let afterValTxt = await page.locator("#rangeSuccess").innerText();
    expect(afterValTxt).toBe("95");
});