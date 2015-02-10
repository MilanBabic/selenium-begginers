var Page  = {
    bd : browser.driver,

    get : function () {
        this.bd.get(this.url);
    },

    /*\ Navigation link for home page is not consistent on all pages so it can't be located with the same linkText().
    |*| Since "isElementPresent(by.linkText('Home Page'))" doesn't return boolean but a 'promise', it must be handled with the "then()" function and in this case passed on as 'value'
    \*/
    goToHome: function () {
        this.bd.isElementPresent(by.linkText('Home Page')).then(function (value) {
            if (value) {
                browser.driver.findElement(by.linkText('Home Page')).click();
            } else {
                browser.driver.findElement(by.linkText('Index')).click();
            }
        });
    }
};
module.exports = Page;