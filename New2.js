import {Builder, Browser, By, Key} from "selenium-webdriver";
import {expect} from "chai";
let driver = new Builder().forBrowser(Browser.CHROME).build();
const searchText = "Nike air";
const expectedProduct = 'Nike air zoom pegasus 35';

async function testRunner(){
await driver.manage().window().maximize();
await driver.get("https://demo.evershop.io/");
const siteTitle = await driver.getTitle();
const expectedTitle = "An Amazing EverShop Store";
expect(expectedTitle).to.eql(siteTitle);

await driver.findElement(By.className("search-icon")).click();
await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchText, Key.ENTER);

const searchedResult = await driver.findElements(By.xpath("//span[contains(text(),'Nike air')]"));

var searchedCount = 0;
for(let i = 0; i<searchedResult.length; i++){
let currentProduct = await searchedResult[i].getText();
try{
    expect(expectedProduct).to.eql(currentProduct);
    console.log(currentProduct);
    searchedCount++;
}

catch(error){
    console.log("Searched product is not found yet");
}

}

if(searchedCount==0){
    throw new Error("Searched result is not found");
}
await driver.sleep(2000);
await driver.quit();
}
testRunner();