const puppeteer = require('puppeteer');

// Función anónima autoejecutada, convertida en expresión
(async () => {
    // código
    console.log('Lanzamos navegador!');
    // const browser = await puppeteer.launch({headless: false});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    console.log('Cerramos navegador...');
    browser.close();
    console.log('Navegador cerrado.');
})();