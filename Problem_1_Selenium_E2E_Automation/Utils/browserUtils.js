import { Builder, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

export const DEFAULT_TIMEOUT = 10000;

export class BrowserUtils {
  constructor(driver) {
    this.driver = driver;
    this.timeout = DEFAULT_TIMEOUT;
  }

  async visit(url) {
    await this.driver.get(url);
  }

  async find(locator) {
    await this.driver.wait(until.elementLocated(locator), this.timeout);
    return await this.driver.findElement(locator);
  }

  async findAll(locator) {
    await this.driver.wait(until.elementsLocated(locator), this.timeout);
    return await this.driver.findElements(locator);
  }

  async waitUntilVisible(locator) {
    const element = await this.find(locator);
    await this.driver.wait(until.elementIsVisible(element), this.timeout);
    return element;
  }

  async quit() {
    await this.driver.quit();
  }

  static async buildDriver() {
    const options = new chrome.Options();
    options.addArguments("--start-maximized");
    options.addArguments("--disable-infobars");
    options.addArguments("--disable-extensions");
    options.setUserPreferences({
      'credentials_enable_service': false,
      'profile.password_manager_enabled': false,
      'profile.password_manager_leak_detection': false
    });
    return await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
  }
}
