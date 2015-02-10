var homePage = Object.create(require("./pages/homePage.js"));
var chapter1 = Object.create(require("./pages/chapter_1.js"));
var chapter2 = Object.create(require("./pages/chapter_2.js"));
var chapter3 = Object.create(require("./pages/chapter_3.js"));
var chapter4 = Object.create(require("./pages/chapter_4.js"));
var chapter8 = Object.create(require("./pages/chapter_8.js"));

describe('Selenium: Begginers Guide', function () {
   
    beforeEach(function () {
        browser.driver.get(homePage.url);
    });

    it('should test navigation ', function () {
        homePage.goToChapter1();       
        expect(browser.driver.getCurrentUrl()).toEqual(chapter1.url);
        chapter1.goToHome();
        homePage.goToChapter2();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter2.url);
        chapter2.goToHome();
        homePage.goToChapter3();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter3.url);
        chapter3.goToHome();
        homePage.goToChapter4();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter4.url);
        chapter4.goToHome();
        homePage.goToChapter8();
        expect(browser.driver.getCurrentUrl()).toEqual(chapter8.url);
    });

    it('should verify chapter 1 elements', function () {
        homePage.goToChapter1();
        chapter1.assertText();
        chapter1.verifyButton();
        chapter1.verifyAjaxText();
        chapter1.verifyPopupWindow();
    });

    it('should verify chapter 2 elements', function () {
        homePage.goToChapter2();
        chapter2.verifyElementByName('but2');
        chapter2.verifyButtonByValue();
    });
});