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
