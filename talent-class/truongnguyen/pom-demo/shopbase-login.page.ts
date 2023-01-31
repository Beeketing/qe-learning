import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator("//input[@id='email']");
    this.password = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//button[@type='submit']");
  }

  async goto() {
    await this.page.goto('https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F');
  }

  async fillAccount() {
    await this.page.waitForLoadState("networkidle");
    await this.email.fill("tuyetle+1@beeketing.net");
    await this.password.fill("123456");
  }

  async login() {
    await this.loginButton.click();
  }
}