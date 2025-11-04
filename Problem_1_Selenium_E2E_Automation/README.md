# Selenium UI Tests

## Automated browser tests built with Selenium

# ⚠️ Scroll to bottom 

---

## Requirements

- Node.js v18+
- Google Chrome (latest recommended)

---

## Project Structure

```
<root>/
│
├── package.json               
├── pages/
│   ├── locators.js             # All selectors and URLs for pages
│   └── pages.js                # Page object classes
│
├── Utils/
│   └── browserUtils.js         # Selenium helper functions
│
├── tests/
│   ├── addRemove.test.js       # Add/Remove Elements flow
│   ├── failedLogin.test.js     # Login negative test (invalid credentials)
│   └── successfulLogin.test.js # Login positive flow test
│
└── README.md                   # Project documentation
```

---

## Install Dependencies

```bash
npm install
```

---

## Running the Tests

### Option 1: Using NPM Scripts (Recommended)

```bash
npm test               # Run login and add/remove tests together
```

### Option 2: Running Tests Directly with Node

You can also run each test file individually with Node:

```bash
node tests/successfulLogin.test.js  # Login (success) test
node tests/failedLogin.test.js      # Login (fail) test
node tests/addRemove.test.js        # Add/Remove Elements test
```



## ⚠️ Issues:

* I have an issue, since I don't know why npm test doesn't work. Use Option 2 in order to run the tests. 
* I used xpath/css in some cases, because that was mentioned. Normally I wouldn't use those locators, unless I would have to. ID would be my initial choice.
* Normally I would put constants and locators in different files, but in this case I didn't have that many constants so decided to put them in tests. 
* I would also have different file specifically for navigation and a pageManager to keep everything tidy. Setup and teardown would be the last things I would add to the above list.