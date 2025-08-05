const {Builder, Browser, By, Key} = require("selenium-webdriver");
let driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner(){
await driver.manage().window().maximize();
await driver.get("https://demo.evershop.io/");
console.log(`Site Title: ${await driver.getTitle()}`);

await driver.findElement(By.className("search-icon")).click();
await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike Air", Key.ENTER);

await driver.sleep(2000);
await driver.quit();
}
testRunner(); 