
// import Firefox from "selenium-webdriver/firefox.js";
// const firefoxBuilder = new Builder()
//   .setFirefoxService(new Firefox.ServiceBuilder(FIREFOX_DRIVER_PATH))
//   .forBrowser(Browser.FIREFOX);
import { WebDriver, until, By, Key, Browser,ThenableWebDriver } from "selenium-webdriver";
import { browserMap } from "./driverService/driveService.js";

let builder = browserMap.get(Browser.FIREFOX);
var logininput = {
    username : "txtUsername",
    password : "txtPassword"
}
var url = "http://hausuper-s.me:41062/orangehrm-4.5/symfony/web/index.php/auth/login";
async function testViewRecuitment(builder){
    /** @type {ThenableWebDriver} */
    let driver =  builder.build()
    console.log(driver)
    try {
        await driver.get(url);
        await driver.findElement(By.name(logininput.username)).sendKeys('vmthong20');
        await driver.findElement(By.name(logininput.password)).sendKeys('Vmthong20!', Key.ENTER);
        // await driver.findElement(By.name("menu_recruitment_viewRecruitmentModule")).click();
        await driver.wait(until.titleIs('OrangeHRM='), 5000);    
    } finally {
        await driver.quit();    
    }
}


testViewRecuitment(builder)