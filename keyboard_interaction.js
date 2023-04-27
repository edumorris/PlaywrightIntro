const { chromium } = require("playwright");

(async () => {
    // function code
    let browser = await chromium.launch(
        {
            headless: false,
            slowMo: 1000
        });
    let page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/key_presses");

    // Typing
    await page.click("input");
    await page.keyboard.type("One does not simply exit vim");

    // Deleting text
    await page.keyboard.down("Shift"); // Pressing shift
    // Selecting text to delete
    for (let i = 0; i < " exit vim".length; i++) {
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift"); // Releasing the shift key
    await page.keyboard.press("Backspace"); // Clicking the Backspace
    await page.keyboard.type(" walk into mordor"); // Typing new text


    // Close browser
    await browser.close();
})();