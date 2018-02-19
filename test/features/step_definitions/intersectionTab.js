'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {



    When('I am on the home page', function (callback) {

      var header = this.driver.findElement({id:'root'});
      expect(header);




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


         Then('I click the intersection tab', function (callback) {
           var intersection_tab = this.driver.findElement({id: 'intersection-tab'});
           this.driver.manage().timeouts().implicitlyWait(6100);
           this.driver.sleep(6000);
           intersection_tab.click();
            callback();
       });

       Then('I click on the calendar', function (callback) {
         this.driver.manage().timeouts().implicitlyWait(6100);
         var calendarWD = this.driver.findElement({className: 'TimeFilter'});
          this.driver.sleep(6100);
        calendarWD.click();
         callback();
       });

       Then('I select weekdays', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       Then('I select weekends', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


       Then('I select all days', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


        When('I click on the Vehicles', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });


        Then('I select all vehicles', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

        Then('I unselect police and Ambulance', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

        Then('I click on the LEGEND', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });


        Then('All intersections will display', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });


        When('I uncheck Other Intersection', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

        Then('I uncheck Stop Sign', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

        Then('only Opticom intersection will display', function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });









});
