// JavaScript source code
var Page = require('./page.js');

var Chapter2 = function () {
    Page.apply(this, arguments);

    var bd = browser.driver;
    this.url = "http://book.theautomatedtester.co.uk/chapter2";

/*    this.getUrl = function () {
        return url;
    };

    this.get = function () {
        bd.get(url);
    };

    this.goToHome = function () {
        bd.findElement(by.linkText('Index')).click();
    };
*/
}
module.exports = Chapter2;