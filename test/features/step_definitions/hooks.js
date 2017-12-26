'use strict';

var {defineSupportCode} = require('cucumber');
var reports = require('cucumber-html-report');
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
    this.driver.get("http://test.gtt-web-portal.com");
    this.driver.manage().timeouts().implicitlyWait(6000);
    var userEmail = this.driver.findElement({xpath: './/div[2]/div/div/form/div[1]/input'});
    userEmail.sendKeys("userAdmin@gtt.com");
    var userPassword = this.driver.findElement({xpath: './/div[2]/div/div/form/div[2]/input'});
    userPassword.sendKeys("Webportal1");
    //driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    var login = this.driver.findElement({xpath: './/div[2]/div/div/form/button'});
    login.click();

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
