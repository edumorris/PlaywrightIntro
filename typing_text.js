const { chromium } = require("playwright");

( async () => {
    const browser = await chromium.launch(
        {
            headless: false,
            slowMo: 1000
        }
    );
    const page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/forgot_password");
    
    // Code to type in email textbox
    const email = await page.$("#email");
    await email.type("nopawbas@laljonum.tv", {
        delay: 50
    });

    // Close browser
    await browser.close();
})();