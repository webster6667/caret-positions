import { chromium, firefox, webkit } from '@playwright/test'

const browsers = [chromium
        // , firefox, webkit
    ],
      url = `file://${__dirname}/index.html`;

(async () => {

    browsers.map(async (singleBrowser) => {

        const browser = await singleBrowser.launch({ headless: false }),
              page = await browser.newPage()

        await page.goto(url);

        await page.fill('input', 'caret');

        const inputValue = await page.$eval('input', (input: HTMLInputElement) => {
            return input.value
        });



        /**
         * tests
         */
        
        // await browser.close()
    })




})();
