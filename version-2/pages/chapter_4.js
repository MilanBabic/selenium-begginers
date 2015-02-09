// JavaScript source code
var Chapter4 = function () {
    var bd = browser.driver;
    var url = "http://book.theautomatedtester.co.uk/chapter4";

    this.getUrl = function () {
        return url;
    };

    this.get = function () {
        bd.get(url);
    };

    this.goToHome = function () {
        bd.findElement(by.linkText('Index')).click();
    };
}
module.exports = Chapter4;