'use strict';
var assert=require('assert');


module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^Open browser and Start Application$/, function () {
        this.driver.get("https://www.lloydsbank.com/");
        this.driver.manage().window().maximize();
        this.driver.sleep(3000);

    });

    this.Given(/^I click the Lloyds Contact Us link in Lloyds Home page$/, function () {
        this.driver.findElement({ linkText: 'Contact Us' }).then(function(ele){
            var click = ele.click();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I Verify the I want to call Lloyds Bank option is displayed in Contact Us page$/, function () {
        this.driver.findElement({ linkText: 'I want to call Lloyds Bank' }).then(function(ele){
            var call = ele.isDisplayed();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I Verify the My card is lost or stolen option is displayed in Contact Us page$/, function () {
        this.driver.findElement({ linkText: 'My card is lost or stolen' }).then(function(ele){
            var lost = ele.isDisplayed();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I Verify the I noticed suspicious activity option is displayed in Contact Us page$/, function () {
        this.driver.findElement({ linkText: 'Do you think someone has accessed your Lloyds Bank account?' }).then(function(ele){
            var suspicious= ele.isDisplayed();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I Verify the Ask a question option is displayed in Contact Us page$/, function () {
        this.driver.findElement({ linkText: 'Ask a question' }).then(function(ele){
            var question = ele.isDisplayed();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I Verify the Self Service option is displayed in Contact Us page$/, function () {
        this.driver.findElement({ linkText: 'Self Service' }).then(function(ele){
            var Service = ele.isDisplayed();
        });
        this.driver.sleep(2000);
    });
    this.Given(/^I Verify the Make a complaint option is displayed in Contact Us page$/, function () {
        this.driver.findElement({ linkText: 'Make a complaint' }).then(function(ele){
            var complaint = ele.isDisplayed();
        });
        this.driver.sleep(2000);
    });

};
