import { test, expect } from '@playwright/test';



test('addProduct', async ({ page }) => {
  //admin login
  await page.goto('https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2F16-clothing.onshopbase.com%2Fadmin%2F');
  await page.waitForTimeout(2 * 1000);
  // await page.pause()
  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');
  await page.click("//button[@type='submit']")
  await page.waitForTimeout(5 * 1000)

  //add product
  await page.click("//span[normalize-space()='Products']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='All products']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='Add product']");
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@placeholder='Short Sleeve T-Shirt']").fill('iPhone 14 Pro Max 128GB - Nga');
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@id='price']").fill('10000');
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@id='compare_price']").fill('12000');
  await page.waitForTimeout(1 * 1000);
  await page.click("//a[@class='pull-right']");
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@id='option-name']").fill('color');
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@placeholder='Separate options with comma']").fill('Space black,Silver,Gold,Deep Purple,');
  await page.waitForTimeout(1 * 1000);
  await page.click("//button[@class='btn btn-primary']");
  await page.waitForTimeout(5 * 1000);

  await page.goto('https://16-clothing.onshopbase.com/products/iphone-14-pro-max-128gb-nga-4');
  await page.waitForTimeout(5 * 1000);

  //Verify title
  const product = await page.locator("//h1[@class='h4 d-block product__name mt0 mb12 product__name-product']").textContent()
  //Verify options
  //Get options

  await page.goto("https://16-clothing.onshopbase.com/products/iphone-14-pro-max-128gb-nga-4")
  // const optionCount = await page.locator('//button[contains(@class, "product__option")]').count(); // trả về 4 phần tử

  // lấy mảng locator đó
  const optionLocators = await page.locator('//button[contains(@class, "product__option")]').all();

  const createdOptions = ['Space black', 'Silver', 'Gold', 'Deep Purple'];
  for (let i = 0; i < optionLocators.length; i++) {
    const optionText = await optionLocators[i].textContent();
    expect(optionText).toEqual(createdOptions[i]);
    console.log(optionText);
  }
  //expects 
  expect(product).toEqual('iPhone 14 Pro Max 128GB - Nga')
});



