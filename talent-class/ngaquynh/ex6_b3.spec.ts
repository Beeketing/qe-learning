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

  await page.locator("//input[@placeholder='Search for product']").type('iPhone 14 Pro Max 128GB - Nga',{
    delay: 50,
  });

  await page.click("//body/div[@id='app']/div[@class='unite-ui-frame vertical-screen']/main[@class='s-mb96 unite-ui-dashboard__main menu-expand']/div[@class='m-t-ex container padding-for-select-plan-bar']/div/div[@class='discount-detail-page']/div[@class='row']/div[@class='col-xs-12 col-sm-8']/form[@class='s-form']/div[@class='section s-mt24']/div[@class='section-body s-flex s-flex--vertical s-mt4']/div[@class='select-product-component s-mt16']/div[@class='s-modal is-active modal-select-product modal-select-item']/div[@class='s-modal-wrapper']/div[@class='s-animation-content s-modal-content']/div[@class='s-modal-body']/div[@class='item-list']/div[2]/div[1]/label[1]/span[1]");
  await page.waitForTimeout(1 * 1000);

  await page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
  await page.waitForTimeout(5 * 1000);

  await page.click("//span[normalize-space()='Save changes']")
  await page.waitForTimeout(3 * 1000);


  await page.goto('https://16-clothing.onshopbase.com/collections/mobile-phone/products/iphone-14-pro-max-128gb-nga-4');
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

  //thêm frameLocator để thêm html đẻ lấy locator 
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
  await page.waitForTimeout(2 * 1000);
  //expects 

  expect(statusDiscount).toEqual('Scheduled');
});


