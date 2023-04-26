const { chromium } = require("playwright");

(async () => {
    // function code
    const browser = await chromium.launch(
        {
            headless: false,
            slowMo: 1000
        });
    const page = await browser.newPage();
    await page.goto("http://the-internet.herokuapp.com/dropdown");

    // Dropdown
    let dropdown = await page.$("#dropdown");

    // value
    await dropdown.selectOption({
        value: '1'
    });

    // label
    await dropdown.selectOption({
        label: "Option 2"
    });

    // index
    await dropdown.selectOption({
        index: 1
    });

    // Available dropdown values
    const availableOptions = await dropdown.$$("option");

    for (let element of availableOptions) {
        console.log(await element.innerText());
    }

    // Close browser
    await browser.close();
})();