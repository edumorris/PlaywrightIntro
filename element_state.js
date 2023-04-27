const { chromium } = require("playwright");

(async () => {
    // function code
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.goto("https://demoqa.com/automation-practice-form");

    // Print the element state
    let firstName = await page.$("#firstName");
    let sportsCheck = await page.$("#hobbies-checkbox-1");
    let submitBtn = await page.$("#submit");

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEditable());
    console.log(await firstName.isEnabled());

    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());

    console.log(await submitBtn.isVisible());
    console.log(await submitBtn.isHidden());

    // Close browser
    await browser.close();
})();