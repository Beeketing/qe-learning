import { expect, Locator, Page } from '@playwright/test';

export class AdminPortalPage {
  readonly page: Page;
  //Product
  readonly productDropdown: Locator;
  readonly allProduct: Locator;
  readonly createProductButton: Locator;
  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly addVariants: Locator;
  readonly variantsOptionName: Locator;
  readonly variantsOptionValue: Locator;
  readonly saveProductButton: Locator;
  readonly collections: Locator;

  //Discount
  readonly discountDopdown: Locator;
  readonly createDiscountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productDropdown = page.locator("//span[normalize-space()='Products']");
    this.allProduct = page.locator("//span[normalize-space()='All products']");
    this.createProductButton = page.locator("//button[@class='s-button pull-right s-button is-primary m-l-sm is-default']");

    this.productTitle = page.locator("//input[@placeholder='Short Sleeve T-Shirt']");
    this.productPrice = page.locator("//input[@id='price']");
    this.addVariants = page.locator("//a[@class='pull-right']");
    this.variantsOptionName = page.locator("//input[@id='option-name']");
    this.variantsOptionValue = page.locator("//input[@placeholder='Separate options with comma']");
    this.saveProductButton = page.locator("//span[normalize-space()='Save product']");
    
    
    this.collections = page.locator("//input[@id='email']");
    this.discountDopdown = page.locator("//input[@id='password']");
    this.createDiscountButton = page.locator("//button[@type='submit']");
  }

  async gotoCreateProduct() {
    await this.productDropdown.click();
    await this.page.waitForTimeout(2*1000);
    await this.allProduct.click();
    await this.page.waitForTimeout(2*1000);
    await this.createProductButton.click();
    await this.page.waitForTimeout(2*1000);
  }

  async fillProduct() {
    await this.page.waitForLoadState("networkidle");
    await this.productTitle.fill("iPhone 14 Pro Max 128GB - TruongNX");
    await this.productPrice.fill("100");
    await this.addVariants.click();
    await this.variantsOptionName.fill("Color");
    await this.variantsOptionValue.fill("Space black, Silver, Gold, Deep Purple");
    await this.page.keyboard.press('Enter');
  }

 

  async createProduct() {
    await this.saveProductButton.click();
    await this.page.waitForTimeout(3*1000);
  }
}