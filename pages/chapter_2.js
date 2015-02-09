var Page = require('./page.js');

var Chapter2 = Object.create(Page);

Chapter2.url = "http://book.theautomatedtester.co.uk/chapter2";

Chapter2.verifyNamedElement = function (name) {
    this.bd.isElementPresent(by.name(name)).then(function (result) {
        expect(result).toBe(true);
    });
};

module.exports = Chapter2;