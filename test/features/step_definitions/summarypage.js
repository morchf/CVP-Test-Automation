'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {



    When('I am on the home page', function (callback) {

      var header = this.driver.findElement({xpath:'.//div[3]/div/div[1]'});


  

      console.log("At home page again.");
      //expect(header).to.be.visible;

           callback();
         });



         Then('I click on the summary link', function (callback) {
          var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});
          this.driver.manage().timeouts().implicitlyWait(6100);
          this.driver.sleep(6000);
          summaryViewPage.click();
           callback();
         });


         Then('the summary page display', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback();
         });







});
