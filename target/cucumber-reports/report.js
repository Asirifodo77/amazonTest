$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonTest.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Amazon website",
  "description": "",
  "id": "testing-amazon-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10538671301,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "As a Web user I want to search for iphone x 64 gb and click on 1st product and move to product page",
  "description": "      user want to capture product name and price and add 1 quantity to basket, \r\n      user want to Validate product is added into basket on product page  \r\n      user want to Vaidate product price and name on basket page. \r\n      user want to Logout and login again validate product in basket is present or not",
  "id": "testing-amazon-website;as-a-web-user-i-want-to-search-for-iphone-x-64-gb-and-click-on-1st-product-and-move-to-product-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I type valid user name \"asirifernando77@gmail.com\" and password \"rukshanASI77\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I search for \"iphone x 64 gb\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the first product visible",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "product page should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "product name is captured as \"productTitle\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "product price is captured as \"productPriceValue\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I add \"1\" qualitity to the basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Message should be \"Added to Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\"1\" should be in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the product price should be \"productPriceValue\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I logout from the system",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I type valid user name \"asirifernando77@gmail.com\" and password \"rukshanASI77\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on the cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the product price should be in the cart \"productPriceValue\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsBase.navigateURL()"
});
formatter.result({
  "duration": 8248384763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asirifernando77@gmail.com",
      "offset": 24
    },
    {
      "val": "rukshanASI77",
      "offset": 65
    }
  ],
  "location": "StepsBase.failedLoginWithIncorrectPassword(String,String)"
});
formatter.result({
  "duration": 10717666152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone x 64 gb",
      "offset": 14
    }
  ],
  "location": "StepsBase.searchItemName(String)"
});
formatter.result({
  "duration": 24106351933,
  "status": "passed"
});
formatter.match({
  "location": "StepsBase.clickOnFirstItem()"
});
formatter.result({
  "duration": 21517016264,
  "status": "passed"
});
formatter.match({
  "location": "StepsBase.validateTheProductPage()"
});
formatter.result({
  "duration": 60923167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "productTitle",
      "offset": 29
    }
  ],
  "location": "StepsBase.captureProductName(String)"
});
formatter.result({
  "duration": 57164582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "productPriceValue",
      "offset": 30
    }
  ],
  "location": "StepsBase.captureProdPrice(String)"
});
formatter.result({
  "duration": 53266774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "StepsBase.addProductToTheCart(String)"
});
formatter.result({
  "duration": 15428523300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 19
    }
  ],
  "location": "StepsBase.validateTheProductPageValidateMessage(String)"
});
formatter.result({
  "duration": 483441566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 1
    }
  ],
  "location": "StepsBase.validateItemCount(String)"
});
formatter.result({
  "duration": 150367312315,
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector //*[@id\u003d\"hlb-subcart\"]/div[1]/span/span[1]/text() is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: The result of the xpath expression \"//*[@id\u003d\"hlb-subcart\"]/div[1]/span/span[1]/text()\" is: [object Text]. It should be an element.\nCommand duration or timeout: 93 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Asiz-pc\u0027, ip: \u0027192.168.1.105\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3a987558-413d-4e5d-8b00-d6cc2436d9e3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"hlb-subcart\"]/div[1]/span/span[1]/text()}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getText(Unknown Source)\r\n\tat pages.AddToCartPage.getItemCountInTheCart(AddToCartPage.java:39)\r\n\tat stepDefinition.StepsBase.validateItemCount(StepsBase.java:116)\r\n\tat ✽.And \"1\" should be in the cart(AmazonTest.feature:21)\r\nCaused by: org.openqa.selenium.InvalidSelectorException: The given selector //*[@id\u003d\"hlb-subcart\"]/div[1]/span/span[1]/text() is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: The result of the xpath expression \"//*[@id\u003d\"hlb-subcart\"]/div[1]/span/span[1]/text()\" is: [object Text]. It should be an element.\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Asiz-pc\u0027, ip: \u0027192.168.1.105\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Asiz/AppData/Local/Temp/anonymous1496024209222006745webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10744)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Asiz/AppData/Local/Temp/anonymous1496024209222006745webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10775)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Asiz/AppData/Local/Temp/anonymous1496024209222006745webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Asiz/AppData/Local/Temp/anonymous1496024209222006745webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Asiz/AppData/Local/Temp/anonymous1496024209222006745webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Asiz/AppData/Local/Temp/anonymous1496024209222006745webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "productPriceValue",
      "offset": 29
    }
  ],
  "location": "StepsBase.validateProductPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsBase.logoutFromAmazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "asirifernando77@gmail.com",
      "offset": 24
    },
    {
      "val": "rukshanASI77",
      "offset": 65
    }
  ],
  "location": "StepsBase.failedLoginWithIncorrectPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsBase.clickTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "productPriceValue",
      "offset": 41
    }
  ],
  "location": "StepsBase.validateItemPriceInTheCart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30045475,
  "status": "passed"
});
});