const { firefox } = require("playwright");

( async () => {
    // function code
    const browser = await firefox.launch(
        {
            headless: false,
            slowMo: 1000
        });
    const page = await browser.newPage();
    await page.goto("https://www.w3schools.com/howto/howto_css_custom_checkbox.asp");

    // check the second checkbox
    let checks = await page.$$("#main div :nth-child(1) input[type='checkbox']");

    await checks[1].check(); // Check checkbox
    await checks[0].uncheck(); // Uncheck check box

    // select the second radio button
    let radios = await page.$$("#main div :nth-child(1) input[type='radio']");

    await radios[1].check(); // Select 2nd radio button

    // close browser
    await browser.close();
})();