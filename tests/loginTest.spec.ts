import { beforeEach } from "node:test";
import test from "../lambdatest-setup";
import { expect } from "@playwright/test";

const data ={
    URL : "https://ecommerce-playground.lambdatest.io/",
    USERNAME: "Vemula.Mahesh@coforge.com",
    PASSWORD:"M@hi1712"
}

test.describe('E commerce ', async()=>{
    test.beforeEach(async( {page})=>{
        test.step('Launch Application ', async()=>{
            await page.goto(data.URL, {waitUntil:'networkidle'});
            await page.waitForLoadState('networkidle');
        })
       
    })

    test('Login to application', async({page})=>{
        await page.waitForTimeout(8000)
        await page.hover('//*[@data-toggle="dropdown"]//span[contains(text(),"My account")]');
        await page.getByRole('link', { name: 'Login' }).click();

        const userNameTxt = '#input-email';
        const passwordTxt='#input-password';
        await page.waitForLoadState('domcontentloaded')

        await page.fill(userNameTxt,data.USERNAME);
        await page.fill(passwordTxt,data.PASSWORD);
        await page.getByRole('button', { name: 'Login' }).click()
        await page.waitForTimeout(8000)  
    })


})
