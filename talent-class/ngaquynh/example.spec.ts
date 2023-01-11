import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.shopbase.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ShopBase/); // //là bao gồm 
});

test('add-to-cart', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/collections/jeans/products/lee-straight-jean');
  // wait 5s 
  await page.waitForTimeout(5 * 1000);


  // click add to cartad
  await page.click("//button[@id='add-to-cart']")

  console.log('Add to cart success')

  //get cart number
  const quantityNum = await page.inputValue("//input[@class = 'quantity__num']")

  console.log(quantityNum);

  const cartPrice = await page.locator("//p[@class = 'h5 product-cart__price']]").textContent();

  console.log(cartPrice);

  //pause for 10s
  await page.waitForTimeout(10 * 1000);

  // Click the get started link.



  //Expects cart number is 01
  expect(quantityNum).toEqual("1");
  expect(cartPrice?.trim()).toEqual("$188.00");
});
