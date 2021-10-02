const pupperteer = require('puppeteer');

(async () => {
    // Our code
    console.log('We launched Browser!');
    const browser = await pupperteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    var title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML)
        return h1.innerHTML;
    })
    console.log(h1);
    console.log('Closing browser...')
    // browser.close();
    console.log('Browser closed')
})();