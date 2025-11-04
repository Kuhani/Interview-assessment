import { By } from "selenium-webdriver";

export const login = {
    LOGIN_URL: "https://the-internet.herokuapp.com/login",
    usernameInput: By.id("username"),
    passwordInput:  By.id("password"),
    submitButton: By.css("button[type='submit']"),
    successfulMessage: By.xpath("//div[@id='flash' and contains(., 'You logged into a secure area!')]"),
    errorMessage: By.xpath("//div[@id='flash' and contains(., ' Your username is invalid!')]"),
  };
  
  export const addRemove = {
    ADD_REMOVE_URL: "https://the-internet.herokuapp.com/add_remove_elements/",
    addButton: By.xpath("//button[contains(text(),'Add Element')]"),
    deleteButton: By.css("#elements button.added-manually"),
  };