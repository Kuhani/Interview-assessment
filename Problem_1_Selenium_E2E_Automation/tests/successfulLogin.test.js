import { LoginPage } from "../pages/pages.js";

const username = "tomsmith";
const password = "SuperSecretPassword!"

async function runLoginTests() {

    const driver = await LoginPage.buildDriver();
    const loginPage = new LoginPage(driver);
  
    let passed = true;
  
    try {
      console.log("Login – Positive Flow");
      await loginPage.open();
      await loginPage.login(username, password);
      const successfulBanner = await loginPage.waitUntilVisible(loginPage.successfulMessage);
      const isDisplayed = await successfulBanner.isDisplayed();
      if (isDisplayed) {
        console.log("STEP PASS: Login successful");
      }
    } catch (error) {
      passed = false;
      console.error("STEP FAIL:", error.message);
    } finally {  
      await loginPage.quit();
      console.log(passed ? "Login Test PASSED\n" : "Login Tests FAILED\n");
    }
  }
  
runLoginTests();
