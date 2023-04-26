const { chromium } = require("playwright");

( async() => {
    // function code
    const browser = await chromium.launch(
        {
            headless: false,
            slowMo: 1000
        });
    const page = await browser.newPage();
    await page.goto("https://demoqa.com/alerts");

    /*
        Code to handle the alert
        Before clicking any button, we need a listener
     */

    // page listener
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click("#confirmButton");

    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept("This is my text");
    });
    await page.click("#promtButton");

    // Close browser
    await browser.close();
})();