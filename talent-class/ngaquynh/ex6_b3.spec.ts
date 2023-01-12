import { test, expect } from '@playwright/test';



test('addDiscount', async ({ page }) => {
  //admin login
  await page.goto('https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2F16-clothing.onshopbase.com%2Fadmin%2F');
  await page.waitForTimeout(2 * 1000);
  // await page.pause()
  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');
  await page.click("//button[@type='submit']")
  await page.waitForTimeout(5 * 1000)

  //add discount
  await page.goto('https://16-clothing.onshopbase.com/admin/discounts');
  await page.waitForTimeout(1 * 1000);


  await page.click("//span[normalize-space()='Create discount']");
  await page.waitForTimeout(1 * 1000);

  await page.locator("//input[@placeholder='e.g. SUMMERSALE']").fill('OCG_2023_TALENT');
  await page.waitForTimeout(1 * 1000);

  await page.locator("//input[@placeholder='0']").fill('10');
  await page.waitForTimeout(1 * 1000);

  await page.click("//label[3]//span[1]");
  await page.waitForTimeout(1 * 1000);

  await page.click("//div[@class='select-product-component s-mt16']//span[@class='s-flex s-flex--align-center'][normalize-space()='Browse']")
  await page.waitForTimeout(1 * 1000);

  await page.click("//html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[1]/form[1]/div[3]/div[2]/div[2]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/label[1]/span[1]");
  await page.waitForTimeout(1 * 1000);

  await page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
  await page.waitForTimeout(1 * 1000);

  await page.click("//span[normalize-space()='Save changes']")
  await page.waitForTimeout(2 * 1000);
  await page.goto('https://16-clothing.onshopbase.com/products/iphone-14-pro-max-128gb-nga-4');
  await page.waitForTimeout(5 * 1000);
  await page.click("//span[normalize-space()='Buy Now']");
  await page.waitForTimeout(5 * 1000);

  await page.locator("//input[@id='checkout_shipping_address_email']").fill('ngaquynh141001@gmail.com');
  await page.click("//label[@id='accept-marketing']//span[@class='s-check']");
  await page.locator("//input[@id='checkout_shipping_address_first_name']").fill('ABC');
  await page.locator("//input[@id='checkout_shipping_address_last_name']").fill('EFG');
  await page.locator("//input[@id='checkout_shipping_address_address_line1']").fill('Hồng Bàng, HP');
  await page.locator("//input[@id='checkout_shipping_address_zip']").fill('10001');
  await page.click("//span[@class='zip-option__city']");
  await page.waitForTimeout(2 * 1000);
  await page.click("//input[@id='checkout_shipping_address_country_name']");

  await page.click("//div[@class='pt4 absolute s-select-searchable__container']//div[@value='US']");
  await page.locator("//input[@id='checkout_shipping_address_phone']").fill('0924050925')

  await page.locator("//input[@placeholder='Enter your promotion code']").fill('OCG_2023_TALENT');
  await page.click("//button[@class='s-button field__input-btn']");
  await page.waitForTimeout(5 * 1000);

  await page.click("//button[@type='submit']");
  await page.waitForTimeout(5 * 1000);
  await page.click("//button[@class='s-button step__continue-button']");

  await page.locator('//div[@class="fieldset stripe-form test-gateway"]').frameLocator('//div[@id="stripe-card-number"]//iframe').locator('[placeholder="Card number"]').fill('4242424242424242');

  await page.locator("//input[@placeholder='Cardholder name']").fill('Nga Quynh');

  await page.locator('//div[@class="fieldset stripe-form test-gateway"]').frameLocator("//div[@id='stripe-card-expiry']//iframe").locator('[placeholder="MM/YY"]').fill('0326');

  // await page.locator("//div[@class='fieldset stripe-form test-gateway']").frameLocator("//div[@id='stripe-card-cvc']//iframe").locator('[placeholder="CVV"]').fill("424");
  await page.locator('//div[@class="fieldset stripe-form test-gateway"]').frameLocator("//div[@id='stripe-card-cvc']//iframe").locator('[placeholder="CVV"]').fill('111');

  await page.click("//button[@class='s-button step__continue-button']");


  // Update Discount
  await page.goto('https://16-clothing.onshopbase.com/admin/discounts');
  await page.click("//span[normalize-space()='OCG_2023_TALENT']");
  await page.click("//i[contains(@class,'mdi mdi-clock-outline mdi-18px')]");
  await page.click("//span[normalize-space()='19']");
  await page.click("//span[normalize-space()='Confirm']");
  await page.click("//span[normalize-space()='Save changes']");

  await page.goto('https://16-clothing.onshopbase.com/admin/discounts');

  const statusDiscount = await page.locator("//p[contains(@class,'text-capitialize')][normalize-space()='Scheduled']").textContent()
  //expects 

  expect(statusDiscount).toEqual('Scheduled');
});


