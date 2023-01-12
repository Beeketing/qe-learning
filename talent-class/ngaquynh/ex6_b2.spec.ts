import { test, expect } from '@playwright/test';



test('addCollection', async ({ page }) => {
  //admin login
  await page.goto('https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2F16-clothing.onshopbase.com%2Fadmin%2F');
  await page.waitForTimeout(2 * 1000);
  // await page.pause()
  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');
  await page.click("//button[@type='submit']")
  await page.waitForTimeout(5 * 1000)

  //add collection
  await page.click("//span[normalize-space()='Products']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='Collections']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='Create collection']");
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@placeholder='e.g Summer collection, Under $100, Staff picks']").fill('Mobile phone');
  await page.waitForTimeout(1 * 1000);
  await page.click("//div[contains(@class,'col-md-8 col-xs-12')]//div[1]//label[1]//span[1]");
  await page.waitForTimeout(5 * 1000);
  await page.click("//span[normalize-space()='Save']");
  await page.waitForTimeout(5 * 1000);
  await page.click("//button[normalize-space()='Add product']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//div[contains(@class,'item-list')]//div[1]//div[1]//label[1]//span[1]");
  await page.waitForTimeout(1 * 1000);
  await page.click("//div[contains(@class,'s-modal-footer')]//span[contains(@class,'s-flex s-flex--align-center')][normalize-space()='Save']");
  await page.waitForTimeout(2 * 1000);

  await page.goto('https://16-clothing.onshopbase.com/collections/mobile-phone');
  await page.waitForTimeout(10 * 1000);

  const productOfCollection = await page.locator("//span[@title='iPhone 14 Pro Max 128GB - Nga']").textContent();
  //expects 
  expect(productOfCollection).toEqual('iPhone 14 Pro Max 128GB - Nga')
});


