'use strict';
var assert=require('assert');


module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Open browser and Start Application$/, function () {
		this.driver.get("https://www.google.co.in/");
        this.driver.manage().window().maximize();
        this.driver.sleep(2000);

	});

    this.Then(/^I enter in search "([^"]*)"$/, function (arg1) {
        this.driver.findElement({ id: 'lst-ib' }).then(function(ele){
            var enter = ele.sendKeys(arg1);
            });
        this.driver.sleep(1000);
        });
    this.Then(/^I select the halifax/, function () {
        this.driver.findElement({ name: 'f' }).then(function(ele){
            var click = ele.click();
        });
        this.driver.sleep(1000);
    });

    this.Given(/^I click the Halifax home page option from the google search$/, function () {
        this.driver.findElement({ linkText: 'Halifax UK | Bank Accounts, Savings, Loans & Mortgages' }).then(function(ele){
            var click = ele.click();
        });
        this.driver.sleep(2000);
    });
};
