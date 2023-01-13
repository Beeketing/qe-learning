import { test, expect } from '@playwright/test';



test('addCollection', async ({ page, context }) => {
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
  await page.locator("//input[@placeholder='e.g Summer collection, Under $100, Staff picks']").fill('Mobile phone1'); // hoặc .type('text', { delay : 100, })
  await page.waitForTimeout(1 * 1000);
  await page.click("//div[contains(@class,'col-md-8 col-xs-12')]//div[1]//label[1]//span[1]");
  await page.waitForTimeout(5 * 1000);
  await page.click("//span[normalize-space()='Save']");
  await page.waitForTimeout(5 * 1000);
  await page.click("//button[normalize-space()='Add product']");
  await page.waitForTimeout(1 * 1000);


  // Type vào textbox Search for product
  // input[@placeholder='Search for product'] tương đương với:
  // [placeholder='Search for product']
  // [placeholder^=Search]: bắt đầu bằng chữ Search 
  // [placeholder$=product]: kết thúc bằng product
  // [placeholder*=for]: chữ for ở giữa

  // await page.locator("//input[@placeholder='Search for product']").type('iPhone 14 Pro Max 128GB - Nga', {
  //   delay: 100,
  // })
  
  await page.locator("[placeholder^=Search]").fill('iPhone 14 Pro Max 128GB - Nga');

  await expect(page.locator('//div[@class="sbase-spinner"]')).toHaveCount(0);

  await page.click("//div[@class='item']//span[@class='s-check']");
  await page.waitForTimeout(3 * 1000);
  await page.click("//div[contains(@class,'s-modal-footer')]//span[contains(@class,'s-flex s-flex--align-center')][normalize-space()='Save']");
  await page.waitForTimeout(2 * 1000);


  // Click vao bieu tuong con mat de view collection

  const [collectionStorefrontPage] = await Promise.all([
    context.waitForEvent("page"), // chờ sự kiện để ra tab mới
    await page.click("//i[@class='mdi mdi-eye mdi-18px']"), //hành động gây ra sự kiện
  ]);
  await page.waitForTimeout(3*1000);
  await collectionStorefrontPage.waitForLoadState("networkidle"); //load ra page
  
  const product = await collectionStorefrontPage.locator("//span[@title='iPhone 14 Pro Max 128GB - Nga']").textContent();

  await collectionStorefrontPage.waitForTimeout(3 * 1000);

  expect(product).toEqual('iPhone 14 Pro Max 128GB - Nga');

});


