var Page  = {
    bd : browser.driver,

    get : function () {
        this.bd.get(this.url);
    },

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