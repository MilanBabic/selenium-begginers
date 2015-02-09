// JavaScript source code
var Page = function () {
    this.bd = browser.driver;

    this.getUrl = function () {
        return this.url;
    };

    this.get = function () {
        this.bd.get(this.url);
    };

    this.goToHome = function () {
        this.bd.findElement(by.linkText('Home Page')).click();

        this.bd.findElement(by.linkText('Index')).click();

    };
     this.verifyHome= function(){
        console.log(this.bd.findElement(by.linkText('Home Page')));
        this.bd.sleep(30000);
    };
    
}
module.exports = Page;