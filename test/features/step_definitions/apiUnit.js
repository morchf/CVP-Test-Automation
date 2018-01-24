'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');
var request = require("request");
var http = require('http');
var FormData = require('form-data');
var fs = require('fs');

defineSupportCode(function({When, Then}) {

  When('I am on the software', function (callback) {
    var softwarePage = this.driver.get("http://test.gtt-web-portal.com/api/software");
    this.driver.manage().timeouts().implicitlyWait(6000);


var form = new FormData();
http.request('http://nodejs.org/images/logo.png', function(response) {

  form.append('my_logo', response);
});
    expect(softwarePage.length).to.not.equal(0);
    callback();
  });


  Then('I get a json response of all software', function (callback) {
    var softwareList = this.driver.findElement({xpath:'./html/body/pre'});
      expect(softwareList.length).to.not.equal(0);
       callback();
     });
     var url =  'http://test.gtt-web-portal.com/api/software';

     http.get(url, function(res){
         var body = '';
        // console.log("This is the output: ", res);

         res.on('data', function(chunk){
             body += chunk;
         });

         res.on('end', function(){
             var fbResponse = JSON.parse(body);
             //console.log("Got a response: ", fbResponse.picture);
         });
     }).on('error', function(e){
           console.log("Got an error: ", e);


    callback();
  });
  When('I am on the route reporting page', function (callback) {
    var routeReportPage = this.driver.get("http://test.gtt-web-portal.com/api/routenames");
    this.driver.manage().timeouts().implicitlyWait(6000);
    expect(routeReportPage.length).to.not.equal(0);
    callback();
         });

         When('I am on the vehicle reporting page', function (callback) {
           var vehicleReportPage = this.driver.get("http://test.gtt-web-portal.com/api/device");
           this.driver.manage().timeouts().implicitlyWait(6000);
           expect(vehicleReportPage.length).to.not.equal(0);

           callback();
         });




         When('I am on the vehicle setting page', function (callback) {
           var vehicleSettingsPage = this.driver.get("http://test.gtt-web-portal.com/api/settings_update");
           this.driver.manage().timeouts().implicitlyWait(6000);
           expect(vehicleSettingsPage.length).to.not.equal(0);
           callback();
         });



         When('I am on the scheduling page', function (callback) {
           var schedulingPage = this.driver.get("http://test.gtt-web-portal.com/api/schedule");
           this.driver.manage().timeouts().implicitlyWait(6000);
           expect(schedulingPage.length).to.not.equal(0);
           callback();
         });

         Then('I get a json response of all route', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       Then('I get a json response of all vehicle', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       Then('I get a json response of all settings', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       Then('I get a json response of all schedule', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


       Then('I get a json response of all users', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });







});
