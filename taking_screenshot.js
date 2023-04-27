const { chromium } = require("playwright");

(async () => {
    // function code
    const browser = await chromium.launch(
        {
            headless: false,
            slowMo: 1000
        });
    const page = await browser.newPage();
    await page.goto("https://applitools.com/");

    // Taking screenshots
    await page.screenshot({
        path: await page.title() + "screenshot.png"
    });

    // Taking screenshot of element
    let logo = await page.$(".logo");
    await logo.screenshot({
        path: "logo.png"
    });

    // Taking screenshot of the whole page
    await page.screenshot({
        path: "fullpage.png",
        fullPage: true
    })

    // Close browser
    await browser.close();
})();