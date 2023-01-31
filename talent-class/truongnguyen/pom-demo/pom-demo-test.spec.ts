import { test, expect } from "@playwright/test";
import { LoginPage } from "./shopbase-login.page";
import { AdminPortalPage } from "./shopbase-admin-portal-page.page";
import { StoreFrontPage } from "./product-store-front-page.page";
test.beforeAll(async () => {
    
    console.log("start test");
  });
test('add product 2', async ({ page, context }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillAccount();
    await loginPage.login();
    await page.waitForTimeout(3*1000);
    const adminPortalPage = new AdminPortalPage(page);
    await adminPortalPage.gotoCreateProduct();
    await page.waitForTimeout(4*1000);
    await adminPortalPage.fillProduct();
    await page.waitForTimeout(2*1000);
    await adminPortalPage.createProduct();
    await page.waitForTimeout(3*1000);
    const [productStorefrontPage] = await Promise.all([
        context.waitForEvent("page"),
        await page.click('//i[@class="mdi mdi-eye mdi-18px d-flex"]'),
      ]);

      await productStorefrontPage.waitForTimeout(5 * 1000);
  //verify name
  const result = await productStorefrontPage
    .locator(
      "//h1[@class='h4 d-block product__name mt0 mb12 product__name-product']"
    )
    .textContent();
  console.log(result);
  expect(result?.trim()).toEqual("iPhone 14 Pro Max 128GB - TruongNX");
  const createOptions = ["Space black", "Silver", "Gold", "Deep Purple"];
  // const variants = await page.locator("//button[contains(@class, 'product__option')]").count();
  const optionLocator = await productStorefrontPage
    .locator("//button[contains(@class, 'product__option')]")
    .all();
  for (let i = 0; i < optionLocator.length; i++) {
    const optionText = await optionLocator[i].textContent();
    expect(optionText).toEqual(createOptions[i]);
    console.log(optionText);
  }
  const price = await productStorefrontPage
    .locator("//div[@class='product__price h4']")
    .textContent();
  console.log(price);
  expect(price?.trim()).toEqual("$100.00");
  });
