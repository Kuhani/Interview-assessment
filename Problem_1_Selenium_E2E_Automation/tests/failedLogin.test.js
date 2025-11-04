import { LoginPage } from "../pages/pages.js";

const username = "wrongUser";
const password = "wrongPass";

async function runLoginTests() {

    const driver = await LoginPage.buildDriver();
    const loginPage = new LoginPage(driver);
  
    let passed = true;
  
    try {
      console.log("Login – Negative Flow");
      await loginPage.open();
      await loginPage.login(username, password);
      const errorElement = await loginPage.waitUntilVisible(loginPage.errorMessage);
      const isDisplayed = await errorElement.isDisplayed();
      if (isDisplayed) {
        console.log("STEP PASS: Error message displayed for invalid credentials");
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
