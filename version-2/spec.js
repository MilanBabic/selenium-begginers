// JavaScript source code
var HomePage = require("./pages/homePage.js");
var Chapter1 = require("./pages/chapter_1.js");
var Chapter2 = require("./pages/chapter_2.js");
var Chapter3 = require("./pages/chapter_3.js");
var Chapter4 = require("./pages/chapter_4.js");
var Chapter8 = require("./pages/chapter_8.js");

var homePage = new HomePage();
var chapter1 = new Chapter1();
var chapter2 = new Chapter2();
var chapter3 = new Chapter3();
var chapter4 = new Chapter4();
var chapter8 = new Chapter8();


describe('Selenium: Begginers Guide', function () {
   
    beforeEach(function () {
        homePage.get();
    });

    it('should test navigation ', function () {
        homePage.goToChapter1();       
        expect(browser.driver.getCurrentUrl()).toEqual(chapter1.getUrl());
        chapter1.goToHome();
        homePage.goToChapter2();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter2.getUrl());
    //    chapter2.verifyHome();
        chapter2.goToHome();
        homePage.goToChapter3();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter3.getUrl());
        chapter3.goToHome();
        homePage.goToChapter4();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter4.getUrl());
        chapter4.goToHome();
        homePage.goToChapter8();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter8.getUrl());
    });

    it('should verify chapter 1 elements', function () {
        homePage.goToChapter1();
        chapter1.assertText();
        chapter1.verifyButton();
        chapter1.verifyAjaxText();
    });   
});