const { chromium } = require("playwright");

(async () => {
    // function code
    const browser = await chromium.launch(
        {
            headless: false,
            slowMo: 1000
        });
    const page = await browser.newPage();
    await page.goto("https://apronus.com/music/lessons/unit01.htm");

    // Click on keynotes
    await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
    await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button")


    // Close browser
    await browser.close();
})();