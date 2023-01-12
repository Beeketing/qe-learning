test('has title shopbase', async ({ page }) => {
  await page.goto('https://www.shopbase.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ShopBase/);
});

test('add to cart', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/products/lee-straight-jean');
  await page.waitForTimeout(5 * 1000);

  await page.click("//button[@id ='add-to-cart']");


  console.log("add successfully");
  await page.waitForTimeout(5 * 1000);

  const cartNumber = await page.locator("//span[@class='cart-number']").textContent();
  console.log(cartNumber);
  await expect(cartNumber).toEqual("01");

});

test('check cart', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/products/lee-straight-jean');
  await page.waitForTimeout(3 * 1000);

  await page.click("//button[@id ='add-to-cart']");


  console.log("add successfully");
  // await page.waitForTimeout(5 *1000);

  // const cartNumber = await page.locator("//span[@class='cart-number']").textContent();
  // console.log(cartNumber);
  await page.goto('https://hiendo2.sbprod.tk/cart');
  await page.waitForTimeout(3 * 1000);
  const numberItems = await page.inputValue("//input[@type='number']");
  console.log(numberItems);
  const price = await page.locator("//p[@class='h5 product-cart__price']//span").textContent();
  console.log(price);
  expect(numberItems).toEqual("1");
  expect(price).toEqual("$188.00");

});