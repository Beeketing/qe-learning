test('add product', async ({ page }) => {
  await page.goto('https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F');
  await page.waitForTimeout(2 *1000);

  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');

  await page.click("//button[@type='submit']");
  console.log("login success");
  await page.waitForTimeout(5 *1000);

  await page.click("//span[normalize-space()='Products']");
  await page.waitForTimeout(1 *1000);
  await page.click("//span[normalize-space()='All products']");
  await page.waitForTimeout(1 *1000);
  await page.click("//button[@class='s-button pull-right s-button is-primary m-l-sm is-default']");
  await page.waitForTimeout(3 *1000);
  await page.locator("//input[@placeholder='Short Sleeve T-Shirt']").fill("iPhone 14 Pro Max 128GB - TruongNX");
  await page.click("//a[@class='pull-right']");
  await page.waitForTimeout(1 *1000);
  await page.locator("//input[@id='option-name']").fill("Color");
  await page.locator("//input[@placeholder='Separate options with comma']").fill("Space black, Silver, Gold, Deep Purple");
  await page.waitForTimeout(2 *1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1 *1000);
  await page.click("//span[normalize-space()='Save product']");
  await page.waitForTimeout(2 * 1000);
  await page.goto('https://shopbase-truongnx.onshopbase.com/collections/all');
  await page.waitForTimeout(3 *1000);
  await page.locator("//input[@placeholder='Your password.']").fill("BIkeue");
  await page.click("//span[normalize-space()='Enter']");
  await page.waitForTimeout(2 * 1000);
  await page.goto('https://shopbase-truongnx.onshopbase.com/collections/all');
  await page.waitForTimeout(2 * 1000);
  const result = await page.locator("//div[@class='row mt16 product-grid']//div[1]//div[1]//a[1]//div[2]//span[1]").textContent();
  expect(result).toEqual("iPhone 14 Pro Max 128GB - TruongNX")
});

test('add collection', async ({ page }) => {
  await page.goto('https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F');
  await page.waitForTimeout(2 *1000);
  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');
  await page.click("//button[@type='submit']");
  console.log("login success");
  await page.waitForTimeout(5 *1000);

  await page.click("//span[normalize-space()='Products']");
  await page.waitForTimeout(1 *1000);
  await page.click("//span[normalize-space()='Collections']");
  await page.waitForTimeout(1 *1000);
  await page.click("//button[@class='s-button is-primary']");
  await page.waitForTimeout(3 *1000);
  await page.locator("//input[@placeholder='e.g Summer collection, Under $100, Staff picks']").fill("Manual phone");
  await page.click("//div[@class='col-md-8 col-xs-12']//div[1]//label[1]//span[2]");
  await page.waitForTimeout(1 *1000);
  await page.click("//div[@class='col-md-8 col-xs-12']//div[1]//label[1]//span[2]");
  await page.waitForTimeout(1 *1000);
  await page.click("//span[normalize-space()='Save']");
  await page.waitForTimeout(1 *1000);
  await page.click("//button[normalize-space()='Add product']");
  await page.locator("//input[@placeholder='Search for product']").fill("iPhone 14 Pro Max 128GB - TruongNX");
  await page.waitForTimeout(4 * 1000);
  await page.click("//div[@class='item-list']//div[1]//div[1]//label[1]//span[1]");
  await page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
  await page.waitForTimeout(4 * 1000);

  await page.goto('https://shopbase-truongnx.onshopbase.com/collections/manual-phone');
  await page.locator("//input[@placeholder='Your password.']").fill("BIkeue");
  await page.click("//span[normalize-space()='Enter']");
  await page.waitForTimeout(4 * 1000);
  await page.goto('https://shopbase-truongnx.onshopbase.com/collections/manual-phone');
  const result = await page.locator("//div[@class='row mt16 product-grid']//div[1]//div[1]//a[1]//div[2]//span[1]").textContent();
  expect(result).toEqual("iPhone 14 Pro Max 128GB - TruongNX")