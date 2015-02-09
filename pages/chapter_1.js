var Page = require('./page.js');

var Chapter1 = Object.create(Page);

Chapter1.url = "http://book.theautomatedtester.co.uk/chapter1";

Chapter1.goToHome = function () {
    this.bd.findElement(by.linkText('Home Page')).click();
};

Chapter1.assertText = function () {
    var textPresent = this.bd.findElement(by.id('divontheleft')).getText();
    expect(textPresent).toEqual('Assert that this text is on the page');
};

Chapter1.verifyButton = function () {
    var buttonPresent = this.bd.isElementPresent(by.id('verifybutton'));
    expect(buttonPresent).toBe(true);
};

Chapter1.verifyAjaxText = function () {
    this.bd.findElement(by.id('loadajax')).click();
    this.bd.sleep(1000);
    var ajaxtext = this.bd.findElement(by.css('#ajaxdiv p:nth-child(1)')).getText();
    expect(ajaxtext).toEqual('The following text has been loaded from another page on this site. It has been loaded in an asynchronous fashion so that we can work through the AJAX section of this chapter');
};

Chapter1.verifyPopupWindow = function () {
    this.bd.findElement(by.id('multiplewindow')).click();
    this.bd.sleep(1000);
    browser.getAllWindowHandles().then(function (handles) {
        var secondWindowHandle = handles[1];
        var firstWindowHandle = handles[0];
        browser.switchTo().window(secondWindowHandle).then(function () {
            var popupUrl = browser.driver.getCurrentUrl();
            expect(popupUrl).toEqual('http://book.theautomatedtester.co.uk/windowpopup.html');
            browser.driver.findElement(by.id('closepopup')).click();                                //closes popup and switches to the main window
            browser.switchTo().window(firstWindowHandle).then(function () {                         
                var mainUrl = browser.driver.getCurrentUrl();
                expect(mainUrl).toEqual('http://book.theautomatedtester.co.uk/chapter1');
            });                                                                                     
        });
    });
/*\    var handles = browser.getAllWindowHandles();   //¿porque no trabaja? - must be sent as a promise (.then())
|*|    var secondWindowHandle = handles[1];
|*|    var firstWindowHandle = handles[0];
|*|    browser.switchTo().window(secondWindowHandle);
|*|    var popupUrl = browser.driver.getCurrentUrl();
|*|    expect(popupUrl).toEqual('http://book.theautomatedtester.co.uk/windowpopup.html');
\*/
};

module.exports = Chapter1;