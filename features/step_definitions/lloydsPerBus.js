'use strict';
var assert=require('assert');


module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^Open browser and Start Application$/, function () {
        this.driver.get("https://www.lloydsbank.com/");
        this.driver.manage().window().maximize();
        this.driver.sleep(3000);

    });

    this.Given(/^I click the Lloyds Personal Banking option from Lloyds Home page$/, function () {
        this.driver.findElement({ linkText: 'Personal' }).then(function(ele){
            var click = ele.click();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I click the Lloyds Business Banking option from Lloyds Home page$/, function () {
        this.driver.findElement({ linkText: 'Business' }).then(function(ele){
            var click = ele.click();
        });
        this.driver.sleep(2000);
    });

};
