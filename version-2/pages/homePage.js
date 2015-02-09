// JavaScript source code
var Page = require('./page.js');

var HomePage = function () {
    Page.apply(this, arguments);

    var bd = browser.driver;
    this.url = "http://book.theautomatedtester.co.uk/";

    this.goToChapter1 = function () {
        bd.findElement(by.css('li:first-child a')).click();
    };
    this.goToChapter2 = function () {
        bd.findElement(by.css('li:nth-child(2) a')).click();
    };
    this.goToChapter3 = function () {
        bd.findElement(by.css('li:nth-child(3) a')).click();
    };
    this.goToChapter4 = function () {
        bd.findElement(by.css('li:nth-child(4) a')).click();
    };
    this.goToChapter8 = function () {
        bd.findElement(by.css('li:nth-child(5) a')).click();
    };

}

module.exports = HomePage;