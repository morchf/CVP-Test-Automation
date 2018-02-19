'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

  When('I type in username and password', function (callback) {


           callback();
    });



   Then('I click on the login button', function (callback) {
  //  var login = this.driver.findElement({xpath: './/div[2]/div/div/form/button'});
  //  login.click();
     callback();
   });


   Then('I go to the home page', function (callback) {
     this.driver.manage().timeouts().implicitlyWait(4000);
    this.driver.sleep(6000);
    var header = this.driver.findElement({id:'root'});
    expect(header);
    // var summaryPageDash = this.driver.findElement({xpath:'.//h2'});
  //  var header = this.driver.findElement({xpath:'.//div[3]/div/div[1]'});
    // expect(summaryPageDash.length).to.not.equal(0);
     //summaryPageDash.click();

      //    expect(header);
          callback();

   });


   Then('I go to the summary page', function (callback) {
        var sidebar_nav = this.driver.findElement({id: 'sidebar-nav'});
         var routesTab = this.driver.findElement({xpath: './/div/div/ol/li[2]'});
         var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});
         var inventoryTab = this.driver.findElement({xpath: './/div/div/ol/li[3]/a/div'});

             this.driver.sleep(6000);
             summaryViewPage.click();
             this.driver.sleep(6000);
             routesTab.click();
             //this.driver.sleep(200);
             this.driver.sleep(5000);
     callback();
   });


   Then('I go to the vehicle reporting page', function (callback) {
     var sidebar_nav = this.driver.findElement({id: 'sidebar-nav'});
       var vehicleReport = sidebar_nav.findElement({xpath: './/div/div/ol/li[3]'});

     //  var routesTab = this.driver.findElement({className: 'section-h1'});
       var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});
       //*[@id="sidebar-nav"]/div/div/ol/li[3]

             this.driver.sleep(1000);
             //summaryViewPage.click();
             this.driver.sleep(2000);
             this.driver.manage().timeouts().implicitlyWait(2000);
             //sidebar_nav.click();
             this.driver.sleep(2000);
             vehicleReport.click();
     callback();
   });


   Then('I close webportal', function (callback) {
     var logoutB = this.driver.findElement({xpath: './/ul/li[3]/a'});
     logoutB.click();

     callback();
   });

});
