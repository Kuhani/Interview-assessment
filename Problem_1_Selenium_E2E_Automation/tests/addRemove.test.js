import assert from "assert";
import { AddRemovePage } from "../pages/pages.js";

async function runAddRemoveTests() {
  
  const driver = await AddRemovePage.buildDriver();
  const addRemovePage = new AddRemovePage(driver);
  let passed = true;

  try {
    await addRemovePage.open();
    console.log("Adding two elements");
    
    await addRemovePage.addElements(2);
    let count = await addRemovePage.getElementCount();
    assert.strictEqual(count, 2, "Should have 2 elements after adding");
    console.log("STEP PASS: Two elements added successfully");

    await addRemovePage.removeElement();
    count = await addRemovePage.getElementCount();
    assert.strictEqual(count, 1, "Should have 1 element after removing one");
    console.log("STEP PASS: One element removed, count updated correctly");

  } catch (error) {
    passed = false;
    console.error("STEP FAIL:", error.message);
  } finally {
    await addRemovePage.quit();
    console.log(passed ? "Add/Remove Tests PASSED\n" : "Add/Remove Tests FAILED\n");
  }
}

runAddRemoveTests();