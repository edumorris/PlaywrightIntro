const { webkit } = require("playwright");

( async() => {
    // function code
    const browser = await webkit.launch(
        {
            headless: false,
            slowMo: 1000
        });
    const page = await browser.newPage();
    await page.goto("https://demoqa.com/frames");

    // Logic to handle iframes
    let frame1 = await page.frame({
        url: /\/sample/
    }); // This code switches to the iFrame using the url in regular expressions form

    /*
        After switching to the iFrame, you can interact with the elements as you would in a page.
    */

    let heading1 = await frame1.$("h1");
    console.log(await heading1.innerText());

    // Close browser
    await browser.close();
})();