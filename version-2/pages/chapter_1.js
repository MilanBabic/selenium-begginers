// JavaScript source code
var Page = require('./page.js');

var Chapter1 = function () {
    Page.apply(this, arguments);

    var bd = browser.driver;
    this.url = "http://book.theautomatedtester.co.uk/chapter1";

 /*   this.getUrl = function () {
        return url;
    };

    this.get = function () {
        bd.get(url);
    };

    this.goToHome = function () {
        bd.findElement(by.linkText('Home Page')).click();
    };
*/
    this.assertText = function () {
        var textPresent = bd.findElement(by.id('divontheleft')).getText();
        expect(textPresent).toEqual('Assert that this text is on the page');
    };

    this.verifyButton = function () {
        var buttonPresent = bd.isElementPresent(by.id('verifybutton'));
        expect(buttonPresent).toBe(true);
    };

    this.verifyAjaxText = function () {
        bd.findElement(by.id('loadajax')).click();
        bd.sleep(1000);
        var ajaxtext = bd.findElement(by.css('#ajaxdiv p:nth-child(1)')).getText();
        expect(ajaxtext).toEqual('The following text has been loaded from another page on this site. It has been loaded in an asynchronous fashion so that we can work through the AJAX section of this chapter');
    };

}
module.exports = Chapter1;