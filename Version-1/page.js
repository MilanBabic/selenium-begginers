// JavaScript source code
var HomePage = function () {
    var bd = browser.driver;

    this.get = function () {
        bd.get("http://book.theautomatedtester.co.uk/");
    };

    this.chapter1 = function () {
        bd.findElement(by.css('li:first-child a')).click();
    };
    this.chapter2 = function () {
        bd.findElement(by.css('li:nth-child(2) a')).click();
    };
    this.chapter3 = function () {
        bd.findElement(by.css('li:nth-child(3) a')).click();
    };
    this.chapter4 = function () {
        bd.findElement(by.css('li:nth-child(4) a')).click();
    };
    this.chapter8 = function () {
        bd.findElement(by.css('li:nth-child(5) a')).click();
    };
    this.home = function () {
     //   if (bd.findElement(by.linkText('Home Page'))) {
            bd.findElement(by.linkText('Home Page')).click();
       // }
      /*  else if (bd.findElement(by.linkText('Index'))) {
            bd.findElement(by.linkText('Index')).click();
        } 
      */
    };
    this.index = function () {
        bd.findElement(by.linkText('Index')).click();
    };
}
module.exports = HomePage;