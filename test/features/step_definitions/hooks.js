'use strict';

var {defineSupportCode} = require('cucumber');
var reports = require('cucumber-html-report');
var {By, until, Key} = require('selenium-webdriver');
var fs = require('fs');
var path = require('path');
var sanitize = require("sanitize-filename");



defineSupportCode(function({After, Before}) {
  // Synchronous
  Before(function () {
    this.count = 0;
  });

  // Asynchronous Callback
  Before(function (scenario, callback) {
    this.driver.get("http://34.208.252.1:4000");
    this.driver.manage().timeouts().implicitlyWait(6000);


    callback();


  });

  // Asynchronous Promise
  After(function (scenarioResult) {
    // Assuming this.driver is a selenium webdriver
    if(scenarioResult.isFailed()) {
      this.driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path.join('screenshots', sanitize(scenarioResult.scenario.name + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
          if(err) console.log(err);
        });
      });
    }
    return this.driver.quit();
  });

});
