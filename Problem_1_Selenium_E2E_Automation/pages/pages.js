import { login, addRemove } from "./locators.js";
import { BrowserUtils } from "../Utils/browserUtils.js";

export class LoginPage extends BrowserUtils {
  constructor(driver) {
    super(driver);
    this.url = login.LOGIN_URL;
    this.usernameInput = login.usernameInput;
    this.passwordInput = login.passwordInput;
    this.submitButton = login.submitButton;
    this.successfulMessage = login.successfulMessage;
    this.errorMessage = login.errorMessage;
  }

  async open() {
    await this.visit(this.url);
  }

  async login(username, password) {
    const userField = await this.find(this.usernameInput);
    const passField = await this.find(this.passwordInput);
    await userField.clear();
    await userField.sendKeys(username);
    await passField.clear();
    await passField.sendKeys(password);
    const submit = await this.find(this.submitButton);
    await submit.click();
  }

  async isSecureAreaDisplayed() {
    try {
      const element = await this.waitUntilVisible(this.successfulMessage);
      return await element.isDisplayed();
      
    } catch {
      return false;
    }
  }
}

export class AddRemovePage extends BrowserUtils {
  constructor(driver) {
    super(driver);
    this.url = addRemove.ADD_REMOVE_URL;
    this.addButton = addRemove.addButton;
    this.deleteButton = addRemove.deleteButton;
  }

  async open() {
    await this.visit(this.url);
  }

  async addElements(count) {
    const addButton = await this.find(this.addButton);
    for (let i = 0; i < count; i++) {
      await addButton.click();
    }
  }

  async getElementCount() {
    const elements = await this.findAll(this.deleteButton);
    return elements.length;
  }

  async removeElement() {
    const elements = await this.findAll(this.deleteButton);
    if (elements.length > 0) {
      await elements[0].click();
    }
  }
}
