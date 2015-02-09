var Page = require('./page.js');

var HomePage = Object.create(Page);

    HomePage.url = "http://book.theautomatedtester.co.uk/";

    HomePage.goToChapter1 = function () {
        this.bd.findElement(by.css('li:first-child a')).click();
    };
    HomePage.goToChapter2 = function () {
        this.bd.findElement(by.css('li:nth-child(2) a')).click();
    };
    HomePage.goToChapter3 = function () {
        this.bd.findElement(by.css('li:nth-child(3) a')).click();
    };
    HomePage.goToChapter4 = function () {
        this.bd.findElement(by.css('li:nth-child(4) a')).click();
    };
    HomePage.goToChapter8 = function () {
        this.bd.findElement(by.css('li:nth-child(5) a')).click();
    };

module.exports = HomePage;