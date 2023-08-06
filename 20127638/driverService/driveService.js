import { Builder, Browser } from "selenium-webdriver";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import chrome from 'selenium-webdriver/chrome.js';
import firefox from 'selenium-webdriver/firefox.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const WEBDRIVER_PATH = join(__dirname, "../webdriver");

const FIREFOX_DRIVER_PATH = join(WEBDRIVER_PATH, "geckodriver");
const CHROME_DRIVER_PATH = join(WEBDRIVER_PATH, "chromedriver.exe");

let firefoxBuilder = new Builder()
    .setFirefoxService(new firefox.ServiceBuilder(FIREFOX_DRIVER_PATH))
    .forBrowser(Browser.FIREFOX)
let chromeBuilder = new Builder()
    .setChromeService(new chrome.ServiceBuilder(CHROME_DRIVER_PATH))
    .forBrowser(Browser.CHROME)

const browserMap = new Map();
  browserMap.set(Browser.CHROME, chromeBuilder);
  browserMap.set(Browser.FIREFOX, firefoxBuilder);  

const ChromeOptions = chrome.Options;
const FirefoxOptions = firefox.Options;

export { browserMap, ChromeOptions, FirefoxOptions };