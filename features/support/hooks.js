'use strict';

var driver = require('./world.js').getDriver();
var fs = require('fs');
var path = require('path');
var sanitize = require("sanitize-filename");
var reporter = require('cucumber-html-reporter');

var myHooks = function () {

  this.After(function(scenario) {
    if(scenario.isFailed()) {
      this.driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
          if(err) console.log(err);
        });
      });
    }
    return this.driver.manage().deleteAllCookies();
  });

  this.registerHandler('AfterFeatures', function () {

  //   var options = {
  //     theme: 'simple',
  //     jsonFile: '/home/prdxn52/selelnium-phase-2/PRDXN-ITTT/report/test.json',
  //     output: '/home/prdxn52/selelnium-phase-2/PRDXN-ITTT/report/test.html',
  //     reportSuiteAsScenarios: true,
  //     launchReport: true,
  //   };
  //   reporter.generate(options);

  return driver.quit();
});

};

module.exports = myHooks;
