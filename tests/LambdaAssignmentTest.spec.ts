import { expect } from "@playwright/test";
import test from "../lambdatest-setup";
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
    await page.goto(data.URL);
    await page.getByRole("link", { name: "Simple Form Demo" }).click();
    const val: string = "Welcome to LambdaTest";
    await page.getByPlaceholder("Please enter your Message").fill(val);
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    await expect(page.locator("#message")).toHaveText(val);
  });

  test("Test Scenario 2", async ({ page }) => {
    await page.goto(data.URL);
    await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();
    await page.waitForSelector("#slider3");
    let slider = await page.locator("#slider3").getByRole("slider");
    let text = await page.locator("#rangeSuccess").innerText();
    console.log("Initial value:" + text);
    let target = "95";
    let isCompleted = false;
    if (slider) {
      while (!isCompleted) {
        let srcBound = await slider.boundingBox();
        if (srcBound) {
          await page.mouse.move(
            srcBound.x + srcBound.width / 2,
            srcBound.y + srcBound.height / 2
          );
          await page.mouse.down();
          await page.mouse.move(
            srcBound.x + 15,
            srcBound.y + srcBound.height / 2
          );
          await page.mouse.up();
          let text = await page.locator("#rangeSuccess").innerText();
          if (text == target) {
            isCompleted = true;
          }
        }
      }
    }
  });
  test("Test Scenario 3", async ({ page }) => {
    await page.getByRole("link", { name: "Input Form Submit" }).click();
    // expect(page).toHaveURL("/input-form-demo");
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
