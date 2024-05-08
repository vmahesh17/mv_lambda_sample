
import { expect } from "@playwright/test";
import test from "../lambdatest-setup";
import { data } from '../data'

test("Test Scenario 3", async ({ page }) => {
    await page.goto(data.URL);
    await page.waitForLoadState("domcontentloaded");
    await page.getByRole("link", { name: "Input Form Submit" }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByPlaceholder("Name", { exact: true }).fill(data.USER_NAME);
    await page.getByPlaceholder("Email", { exact: true }).fill(data.EMAIL);
    await page.getByPlaceholder("Password").fill(data.PASSWORD);
    await page.getByPlaceholder("Company").fill(data.COMPANY);
    await page.getByPlaceholder("Website").fill(data.WEBSITE);
    await page.getByRole("combobox").selectOption(data.COUNTRY);
    await page.getByPlaceholder("City").fill(data.CITY);
    await page.getByPlaceholder("Address 1").fill(data.ADDRESS1);
    await page.getByPlaceholder("Address 2").fill(data.ADDRESS2);
    await page.getByPlaceholder("State").fill(data.STATE);
    await page.getByPlaceholder("Zip code").fill(data.ZIP);
    await page.getByRole("button", { name: "Submit" }).click();
    await page.waitForTimeout(2000);
    const successMessage = await page
        .locator('//*[contains(@class,"loginform")]//p')
        .textContent();
    expect(successMessage).toBe(data.SUCCESS_MSG);
});