import { expect } from "@playwright/test";
import test from "../lambdatest-setup";
// import test from '@playwright/test'
const data = {
  URL: "https://www.lambdatest.com/selenium-playground/",
};

test.describe("PlayWright Assignment Test Scenarios", async () => {
  test.beforeEach(async ({ page }) => {
    test.step("Launch Application ", async () => {
      await page.goto(data.URL);
      await page.waitForLoadState("domcontentloaded");
    });
  });

  test("Test Scenario 1", async ({ page }) => {
    await page.getByRole("link", { name: "Simple Form Demo" }).click();
    const val: string = "Welcome to LambdaTest";
    await page.getByPlaceholder("Please enter your Message").fill(val);
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    await expect(page.locator("#message")).toHaveText(val);
  });

  test("Test Scenario 2", async ({ page }) => {
    await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();
    await page.waitForSelector("#slider3");
    let defaultValTxt = await page.locator("#rangeSuccess").innerText();
    expect(defaultValTxt).toBe('15');
    await page.locator('#slider3').getByRole('slider').fill('95');
    let afterValTxt = await page.locator("#rangeSuccess").innerText();
    expect(afterValTxt).toBe('95');
 
  });
  test("Test Scenario 3", async ({ page }) => {
    await page.getByRole("link", { name: "Input Form Submit" }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    expect(page.getByText("Please fill in this field.")).toBeVisible();
    await page
      .getByPlaceholder("Email", { exact: true })
      .fill("testmv@yopmail.com");
    await page.getByPlaceholder("Password").fill("Test@1234");
    await page.getByPlaceholder("Company").fill("testcompany");
    await page.getByPlaceholder("Website").fill("www.test.com");
    await page.getByRole("combobox").selectOption("United States");
    await page.getByPlaceholder("City").fill("Test");
    await page.getByPlaceholder("Address 1").fill("Address1");
    await page.getByPlaceholder("Address 2").fill("Address2");
    await page.getByPlaceholder("State").fill("Teststate");
    await page.getByPlaceholder("Zip code").fill("1010010");
  });
});
