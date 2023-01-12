import { test, expect } from '@playwright/test';

// VD 1
test('has title', async ({ page }) => {
  await page.goto('https://www.shopbase.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ShopBase/);
});

// VD 2
test('add to cart 02', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/products/lee-straight-jean');
  await page.waitForTimeout(5 * 1000);

  // Click add to cart.
  await page.click("//button[@id='add-to-cart']");
  console.log('add to cart success');

  // Get cart number
  const cartNumber = await page.locator('//span[@class="cart-number"]').textContent();
  console.log(cartNumber);

  // expect cart number is 01
  expect(cartNumber).toEqual("01");

  //  pause for 10s
  // await page.waitForTimeout(10 * 60 * 1000)
});

// VD 3
test('add to cart and cost', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/collections/jeans/products/lee-straight-jean');
  await page.waitForTimeout(5 * 1000);

  // Click add to cart.
  await page.click("//button[@id='add-to-cart']");
  console.log('add to cart success');

  // Toi gio hang
  await page.goto('https://hiendo2.sbprod.tk/cart ');  
  await page.waitForTimeout(5 * 1000);

  // Get cart number
  const cartNumber02 = await page.inputValue('//input[@class="quantity__num"]');
  console.log(cartNumber02);

  // get price
  const price = await page.locator('//p[@class="h5 product-cart__price"]').textContent();
  console.log(price);

  // expect cart number is 01
  expect(cartNumber02).toEqual('1');
  expect(price?.trim()).toEqual('$188.00')
});