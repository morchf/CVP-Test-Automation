'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {






  Then('I sort by route', function (callback) {
    var sidebar_nav = this.driver.findElement({id: 'sidebar-nav'});
          var vehicleReport = sidebar_nav.findElement({xpath: './/div/div/ol/li[3]'});

          var routesSort = this.driver.findElement({xpath: './/div[3]/div/table[1]/thead/tr/th[2]'});
          var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});


                this.driver.manage().timeouts().implicitlyWait(6000);
                //sidebar_nav.click();
                this.driver.sleep(2000);
              //  vehicleReport.click();
                this.driver.sleep(2000);
                summaryViewPage.click();
                this.driver.manage().timeouts().implicitlyWait(6000);
                routesSort.click();
                console.log("by .....0");
    callback();
  });



  Then('I sort by direction', function (callback) {
    var directionSort = this.driver.findElement({xpath: './/div[3]/div/table[1]/thead/tr/th[3]'});


                this.driver.manage().timeouts().implicitlyWait(6000);
                //sidebar_nav.click();
                this.driver.sleep(2000);
              //  vehicleReport.click();
                this.driver.sleep(2000);
                this.driver.manage().timeouts().implicitlyWait(6000);
                directionSort.click();



          console.log("by .....1");
    callback();
  });



  Then('I click on the summary table', function (callback) {
    var summary_tab = this.driver.findElement({id: 'summary-tab'});
    summary_tab.click();
  callback();
});


Then('I click Monthly', function (callback) {

  var monthly = this.driver.findElement({xpath: '//*[@id="root"]/div/div/div[2]/div/div[2]/div[1]/div/div[1]'});
  monthly.click();
  //*[@id="root"]/div/div/div[2]/div/div[2]/div[1]/div/div[2]
  // Write code here that turns the phrase above into concrete actions
  callback();
});
Then('I click Weekly', function (callback) {
  var weekly = this.driver.findElement({xpath: '//*[@id="root"]/div/div/div[2]/div/div[2]/div[1]/div/div[2]'});
  weekly.click();
        callback();
      });



Then('I click daily', function (callback) {
  var daily = this.driver.findElement({xpath: '//*[@id="root"]/div/div/div[2]/div/div[2]/div[1]/div/div[3]'});
  daily.click();
        callback();
});



});
