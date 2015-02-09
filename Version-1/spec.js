// JavaScript source code
var HomePage = require("./page.js");
var page = new HomePage();

describe('Selenium: Begginers Guide', function () {
   
    beforeEach(function () {
        page.get();
    });

    it('should test navigation ', function () {
        page.chapter1();       
        expect(browser.driver.getCurrentUrl()).toEqual("http://book.theautomatedtester.co.uk/chapter1");
        page.home();
        page.chapter2();
        expect(browser.driver.getCurrentUrl()).toEqual("http://book.theautomatedtester.co.uk/chapter2");
        page.index();
        page.chapter3();
        expect(browser.driver.getCurrentUrl()).toEqual("http://book.theautomatedtester.co.uk/chapter3");
        page.index();
        page.chapter4();
        expect(browser.driver.getCurrentUrl()).toEqual("http://book.theautomatedtester.co.uk/chapter4");
        page.index();
        page.chapter8();
        expect(browser.driver.getCurrentUrl()).toEqual("http://book.theautomatedtester.co.uk/chapter8");
    });


});