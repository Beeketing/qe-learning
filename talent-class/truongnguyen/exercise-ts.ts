test("add product", async ({ page, context }) => {
  await page.goto(
    "https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F"
  );
  await page.waitForTimeout(2 * 1000);

  await page.locator("//input[@id='email']").fill("tuyetle+1@beeketing.net");
  await page.locator("//input[@id='password']").fill("123456");

  await page.click("//button[@type='submit']");
  console.log("login success");
  await page.waitForTimeout(5 * 1000);

  await page.click("//span[normalize-space()='Products']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='All products']");
  await page.waitForTimeout(1 * 1000);
  await page.click(
    "//button[@class='s-button pull-right s-button is-primary m-l-sm is-default']"
  );
  await page.waitForTimeout(3 * 1000);
  await page
    .locator("//input[@placeholder='Short Sleeve T-Shirt']")
    .fill("iPhone 14 Pro Max 128GB - TruongNX");
  await page.locator("//input[@id='price']").fill("100");
  await page.click("//a[@class='pull-right']");
  await page.waitForTimeout(1 * 1000);
  await page.locator("//input[@id='option-name']").fill("Color");
  await page
    .locator("//input[@placeholder='Separate options with comma']")
    .fill("Space black, Silver, Gold, Deep Purple");
  await page.waitForTimeout(2 * 1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='Save product']");
  await page.waitForTimeout(5 * 1000);
  /* learn how to switch tab of browse */
  const [productStorefrontPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.click('//i[@class="mdi mdi-eye mdi-18px d-flex"]'),
  ]);
  await productStorefrontPage.waitForLoadState("networkidle");

  // await page.click("//span[normalize-space()='View']");
  await page.waitForTimeout(4 * 1000);
  await page.waitForTimeout(5 * 1000);
  //verify name
  const result = await productStorefrontPage
    .locator(
      "//h1[@class='h4 d-block product__name mt0 mb12 product__name-product']"
    )
    .textContent();
  console.log(result);
  expect(result?.trim()).toEqual("iPhone 14 Pro Max 128GB - TruongNX");
  //verify options
  //get options

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
test("add collection", async ({ page, context }) => {
  await page.goto(
    "https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F"
  );
  await page.waitForTimeout(2 * 1000);
  await page.locator("//input[@id='email']").fill("tuyetle+1@beeketing.net");
  await page.locator("//input[@id='password']").fill("123456");
  await page.click("//button[@type='submit']");
  console.log("login success");
  await page.waitForTimeout(5 * 1000);

  await page.click("//span[normalize-space()='Products']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='Collections']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//button[@class='s-button is-primary']");
  await page.waitForTimeout(3 * 1000);
  await page
    .locator(
      "//input[@placeholder='e.g Summer collection, Under $100, Staff picks']"
    )
    .fill("Manual phone");
  await page.click(
    "//div[@class='col-md-8 col-xs-12']//div[1]//label[1]//span[2]"
  );
  await page.waitForTimeout(1 * 1000);
  await page.click(
    "//div[@class='col-md-8 col-xs-12']//div[1]//label[1]//span[2]"
  );
  await page.waitForTimeout(1 * 1000);
  await page.click("//span[normalize-space()='Save']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//button[normalize-space()='Add product']");
  await page
    .locator("//input[@placeholder='Search for product']")
    .fill("iPhone 14 Pro Max 128GB - TruongNX");
  // Wait for disable
  const spinnerLocator = page.locator("//img[@class='sbase-spinner']");
  await expect(spinnerLocator).toHaveCount(0);

  // await page.waitForTimeout(4 * 1000);
  await page.click(
    "//div[@class='item-list']//div[1]//div[1]//label[1]//span[1]"
  );
  await page.click(
    "//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']"
  );
  await page.waitForTimeout(4 * 1000);
  await page.click("//span[normalize-space()='Refresh']");
  await page.waitForTimeout(3 * 1000);

  /*Redirect: cách 1 */
  const newUrl = await page
    .locator("//div[@class='google__url']")
    .textContent();
  var urlRedirect: string = `${newUrl}`;
  console.log(newUrl);
  await page.goto(urlRedirect);

  const result = await page
    .locator(
      "//div[@class='row mt16 product-grid']//div[1]//div[1]//a[1]//div[2]//span[@class='title d-block cl-black']"
    )
    .textContent();
  expect(result).toEqual("iPhone 14 Pro Max 128GB - TruongNX");

  /* when enable password*/
  // await page.goto(
  //   "https://shopbase-truongnx.onshopbase.com/collections/manual-phone"
  // );
  // await page.waitForTimeout(2 * 1000);
  // await page.locator("//input[@placeholder='Your password.']").fill("BIkeue");
  // await page.click("//span[normalize-space()='Enter']");
  // await page.waitForTimeout(2 * 1000);
  // await page.goto(
  //   "https://shopbase-truongnx.onshopbase.com/collections/manual-phone"
  // );
  // await page.waitForTimeout(2 * 1000);

  /* Redirect cách 2*/
  //   const [productStorefrontPage] = await Promise.all([
  //     context.waitForEvent("page"),
  //     await page.click("//i[@class='mdi mdi-eye mdi-18px']"),
  // ]);
  // await productStorefrontPage.waitForLoadState("networkidle");

  // const result = await productStorefrontPage
  //   .locator(
  //     "//div[@class='row mt16 product-grid']//div[1]//div[1]//a[1]//div[2]//span[@class='title d-block cl-black']"
  //   )
  //   .textContent();
  // expect(result).toEqual("iPhone 14 Pro Max 128GB - TruongNX");
});
test("add discount code", async ({ page }) => {
  await page.goto(
    "https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F"
  );
  await page.waitForTimeout(2 * 1000);
  await page.locator("//input[@id='email']").fill("tuyetle+1@beeketing.net");
  await page.locator("//input[@id='password']").fill("123456");
  await page.click("//button[@type='submit']");
  console.log("login success");
  await page.waitForTimeout(5 * 1000);

  await page.goto(
    " https://shopbase-truongnx.onshopbase.com/admin/discounts/new"
  );

  await page
    .locator("//input[@placeholder='e.g. SUMMERSALE']")
    .fill("OCG_2023_TALENT");
  await page
    .locator("//div[@class='s-select full-width']//select")
    .selectOption("Percentage");
  await page.waitForTimeout(3 * 1000);
  await page.locator("//input[@placeholder='0']").fill("10");
  await page.click(
    "//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[1]/form[1]/div[3]/div[2]/label[3]/span[1]"
  );
  await page.click("//input[@placeholder='Search products']");
  await page
    .locator("//input[@placeholder='Search products']")
    .fill("iPhone 14 Pro Max 128GB - TruongNX");
  await page.keyboard.press("Space");
  await page.keyboard.press("Backspace");
  // Wait for disable
  const spinnerLocator = page.locator("//img[@class='sbase-spinner']");
  await expect(spinnerLocator).toHaveCount(0);
  // await page.waitForTimeout(3 * 1000);
  await page.click(
    "//div[@class='item-list']//div[1]//div[1]//label[1]//span[1]"
  );
  await page.click(
    "//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']"
  );
  await page.waitForTimeout(4 * 1000);
  await page.click("//span[normalize-space()='Save']");

  await page.goto(
    "https://shopbase-truongnx.onshopbase.com/products/iphone-14-pro-max-128gb-truongnx"
  );
  await page.waitForTimeout(5 * 1000);

  await page.click("//span[normalize-space()='Add to cart']");
  await page.waitForTimeout(1 * 1000);
  await page.click("//button[@name='checkout']");
  await page.waitForTimeout(3 * 1000);
  await page
    .locator("//input[@id='checkout_shipping_address_email']")
    .fill("Truong@gmail.com");
  await page
    .locator(" //input[@placeholder='Enter your promotion code']")
    .fill("OCG_2023_TALENT");
  await page.click("//button[normalize-space()='Apply']");
  await page
    .locator("//input[@id='checkout_shipping_address_last_name']")
    .fill("US");
  await page
    .locator("//input[@id='checkout_shipping_address_address_line1']")
    .fill("US");
  await page
    .locator("//input[@id='checkout_shipping_address_city']")
    .fill("HANOI");
  await page
    .locator("//input[@id='checkout_shipping_address_zip']")
    .fill("10000");
  await page
    .locator("//input[@id='checkout_shipping_address_phone']")
    .fill("0123456789");
  await page.click("//button[normalize-space()='Continue to shipping method']");
  await page.waitForTimeout(3 * 1000);
  await page.click("//button[normalize-space()='Continue to payment method']");
  await page.waitForTimeout(5 * 1000);

  await page
    .locator("//div[@class='fieldset stripe-form test-gateway']")
    .frameLocator("//div[@id='stripe-card-number']//iframe")
    .locator('[placeholder="Card number"]')
    .fill("4242424242424242");

  await page.waitForTimeout(3 * 1000);

  await page.locator("//input[@placeholder='Cardholder name']").fill("Truong");
  await page
    .locator("//div[@class='fieldset stripe-form test-gateway']")
    .frameLocator("//div[@id='stripe-card-expiry']//iframe")
    .locator('[placeholder="MM/YY"]')
    .fill("0328");

  await page
    .locator("//div[@class='fieldset stripe-form test-gateway']")
    .frameLocator("//div[@id='stripe-card-cvc']//iframe")
    .locator('[placeholder="CVV"]')
    .fill("424");
  await page.waitForTimeout(3 * 1000);
  await page.click("//button[normalize-space()='Complete order']");
  await page.waitForTimeout(6 * 1000);

  const finalPrice = await page
    .locator("//span[@class='payment-due__price']")
    .textContent();
  console.log(finalPrice);

  //giá sản phẩm dynamic
  const optionLocator = await page
    .locator("//span[@class='order-summary__emphasis']")
    .all();

  const subtotal = await optionLocator[0].textContent();
  var subtotalString: string = `${subtotal}`.trim();
  const discount = await optionLocator[1].textContent();
  var discountValue: string = `${discount}`.trim();
  const shippingFeee = await optionLocator[2].textContent();
  var shipFee: string = `${shippingFeee}`.trim();

  console.log(subtotalString);
  function fimeType(filename): number {
    var pos = filename.indexOf("$", 0);
    console.log(pos);
    var ict = filename.substring(pos + 1, filename.length);
    return ict;
  }
  console.log(fimeType(subtotalString));
  console.log(fimeType(discountValue));
  console.log(fimeType(shipFee));
  var priceAfterMinusDiscount =
    fimeType(subtotalString) - fimeType(discountValue);
  var convertPrice: string = `${finalPrice}`.trim();
  var totalPrice = fimeType(convertPrice) - fimeType(shipFee);

  console.log(totalPrice);
  console.log(priceAfterMinusDiscount);
  expect(priceAfterMinusDiscount).toEqual(totalPrice);
  // console.log(fimeType(convertPrice));
  // console.log(subTt);
  // console.log("bằng nhau")
  // subtotalString.slice(subtotalString.indexOf("$", 0) + 1, subtotalString.length);
  // console.log(subtotalString);
  // expect(optionText).toEqual(createOptions[i]);

  // const subtotal = await page
  //     .locator("//span[@class='order-summary__emphasis']")
  //     .textContent();
  //     console.log(subtotal);

  // var stringSubtotal: string = `${subtotal}`;

  // khi biết trc giá của sản phẩm

  var stringPrice: string = `${finalPrice}`;
  expect(finalPrice).toEqual("$96.99");
});
test("edit discount code", async ({ page }) => {
  await page.goto(
    "https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F"
  );
  await page.waitForTimeout(2 * 1000);
  await page.locator("//input[@id='email']").fill("tuyetle+1@beeketing.net");
  await page.locator("//input[@id='password']").fill("123456");
  await page.click("//button[@type='submit']");
  console.log("login success");
  await page.waitForTimeout(5 * 1000);
  await page.goto("https://shopbase-truongnx.onshopbase.com/admin/discounts/");
  await page.waitForTimeout(4 * 1000);
  await page.click("//span[normalize-space()='OCG_2023_TALENT']");
  await page.waitForTimeout(3 * 1000);
  await page
    .locator(
      "//div[@class='s-date-editor s-input s-input--suffix s-date-editor--datetime']//input[@type='text']"
    )
    .click();
  await page.waitForTimeout(3 * 1000);
  await page.click("//span[normalize-space()='20']");
  await page.waitForTimeout(1 * 1000);

  // await page.locator("//span[@class='text']").click();

  await page.locator("//span[normalize-space()='Confirm']").click();
  await page.waitForTimeout(3 * 1000);
  await page.locator("//span[normalize-space()='Save']").click();
  await page.waitForTimeout(3 * 1000);
  const notActive = await page
    .locator("//p[@class='text-normal text-gray400 s-mt16']")
    .textContent();
  console.log(notActive);
  expect(notActive?.trim()).toEqual("Discount is not active yet.");
});
