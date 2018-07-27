'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');
var fetch = require('node-fetch');

defineSupportCode(function({When, Then}) {

  When('I go to my lanner cvp advance url', function (callback) {
    this.driver.get("http://34.208.252.1:4000/advanced");
    this.driver.manage().timeouts().implicitlyWait(6000);
    callback();
  });


  Then('I click on device tab', function (callback) {

    var device = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[6]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    device.click();

    console.log("device tab click.... ");



    callback();

  });


  Then('I click on app tab', function (callback) {

    var app = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[2]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    app.click();

    console.log("app tab click.... ");



    callback();

  });

  Then('I click on home tab', function (callback) {

    var home = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[2]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    home.click();

    console.log("app tab click.... ");



    callback();

  });


  Then('I click on asm tab', function (callback) {

    var asm = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[1]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    asm.click();

    var asm_toddle = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[2]/div/input'});
    //this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    asm_toddle.click();

    console.log("asm has been tun off");
    this.driver.sleep(6000);
    asm_toddle.click();
    console.log("asm has been tun On!!!");

    callback();

  });

  Then('I click on core tab', function (callback) {

    var core = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[4]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    core.click();

    console.log("core tab click.... ");



    callback();

  });

  Then('I click on db tab', function (callback) {

    var db = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[5]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    db.click();

    console.log("db tab click.... ");



    callback();

  });

  Then('I click on firehose tab', function (callback) {

    var firehose = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[7]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    firehose.click();

    console.log("firehose tab click.... ");



    callback();

  });

  Then('I click on gps tab', function (callback) {

    var gps = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[8]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    gps.click();

    console.log("gps tab click.... ");



    callback();

  });

  Then('I click on gps-simulator tab', function (callback) {

    var gps_simulator = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[9]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    gps_simulator.click();

    console.log("gps-simulator tab click.... ");



    callback();

  });

  Then('I click on hw tab', function (callback) {

    var hw = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[10]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    hw.click();

    console.log("hw tab click.... ");



    callback();

  });

  Then('I click on hw-lanner-com-four tab', function (callback) {

    var hw_lanner_com_four = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[11]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    hw_lanner_com_four.click();

    console.log("hw-lanner-com-four tab click.... ");



    callback();

  });

  Then('I click on hw-lanner-io tab', function (callback) {

    var hw_lanner_io = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[12]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    hw_lanner_io.click();

    console.log("hw-lanner-io tab click.... ");



    callback();

  });
  Then('I click on hw-lanner-rs485 tab', function (callback) {

    var hw_lanner_rs485 = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[13]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    hw_lanner_rs485.click();

    console.log("hw_lanner_rs485 tab click.... ");



    callback();

  });
  Then('I click on hw-simulator tab', function (callback) {

    var hw_simulator = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[14]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    hw_simulator.click();

    console.log("hw-simulator tab click.... ");



    callback();

  });

  Then('I click on iot tab', function (callback) {

    var iot = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[15]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    iot.click();

    console.log("iot tab click.... ");



    callback();

  });

  Then('I click on portal tab', function (callback) {

    var portal = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[16]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    portal.click();

    console.log("portal tab click.... ");



    callback();

  });

  Then('I click on radio tab', function (callback) {

    var radio = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[17]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    radio.click();

    console.log("radio tab click.... ");



    callback();

  });

  Then('I click on radio-gps tab', function (callback) {

    var radio_gps = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[18]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    radio_gps.click();

    console.log("radio-gps tab click.... ");



    callback();

  });


  Then('I click on radio-tsp tab', function (callback) {

    var radio_tsp = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[19]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    radio_tsp.click();

    console.log("radio_tsp tab click.... ");



    callback();

  });


  Then('I click on rs485 tab', function (callback) {

    var rs485 = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[20]/a'});
    this.driver.manage().timeouts().implicitlyWait(6000);
      this.driver.sleep(6000);
    rs485.click();

    console.log("rs485 tab click.... ");



    callback();

  });



    Then('I click on rs485-simulator tab', function (callback) {

      var rs485_simulator = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[21]/a'});
      this.driver.manage().timeouts().implicitlyWait(6000);
        this.driver.sleep(6000);
      rs485_simulator.click();

      console.log("rs485_simulator tab click.... ");



      callback();

    });


      Then('I click on serial-gps tab', function (callback) {

        var serial_gps = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[22]/a'});
        this.driver.manage().timeouts().implicitlyWait(6000);
          this.driver.sleep(6000);
        serial_gps.click();

        console.log("serial_gps tab click.... ");



        callback();

      });


        Then('I click on software tab', function (callback) {

          var software = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[23]/a'});
          this.driver.manage().timeouts().implicitlyWait(6000);
            this.driver.sleep(6000);
          software.click();

          console.log("software tab click.... ");



          callback();

        });


          Then('I click on trip-select tab', function (callback) {

            var trip_select = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[24]/a'});
            this.driver.manage().timeouts().implicitlyWait(6000);
              this.driver.sleep(6000);
            trip_select.click();

            console.log("trip_select tab click.... ");



            callback();

          });


            Then('I click on trip-select-simulator tab', function (callback) {

              var trip_select_simulator = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[25]/a'});
              this.driver.manage().timeouts().implicitlyWait(6000);
                this.driver.sleep(6000);
              trip_select_simulator.click();

              console.log("trip_select_simulator tab click.... ");



              callback();

            });


            Then('I click on trip-start tab', function (callback) {

              var trip_start = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[26]/a'});
              this.driver.manage().timeouts().implicitlyWait(6000);
                this.driver.sleep(6000);
              trip_start.click();

              console.log("trip_start tab click.... ");



              callback();

            });


            Then('I click on tsp tab', function (callback) {

              var tsp = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/aside[2]/ul/li[27]/a'});
              this.driver.manage().timeouts().implicitlyWait(6000);
                this.driver.sleep(6000);
              tsp.click();

              console.log("tsp tab click.... ");



              callback();

            });


            Then('I click on register button', function (callback) {
              var register = this.driver.findElement({xpath: '//*[@id="root"]/div/div[2]/div[1]/div/div/button[1]/div/span'});
              this.driver.manage().timeouts().implicitlyWait(6000);
                this.driver.sleep(6000);
              register.click();

              console.log("registering this cvp to the server.... ");

                   callback();
                 });



                 Then('I remove bus automationCVP', function (callback) {
                          fetch('http://test.gtt-web-portal.com/api/device?deviceID=DVS-4051', {

                            method: 'delete',
                          }
                        .then(res => console.log(res.ok)));


                          callback();
                        });



  Then('I change the bus name to automationCVP', function (callback) {

    var body =  fs.readFileSync('Bad_device.json', 'utf-8');
    fetch('http://34.208.252.1:4000/api/device/config', {
      method: 'PUT', body,
      //body:    JSON.stringify(body),
      headers: { 'Content-Type': 'device/json' },
    })
    .then(function(res){


      if (res.ok ){
        console.log("Device has been updated with new configuration!!");
      } else {
        console.log("Error!!!!!!! Fail!!  to update device configuration");
      }
    })

    callback();
  });

  Then('I change the asm config to new configuration', function (callback) {
    var body =  fs.readFileSync('asm_config.json', 'utf-8');
    fetch('http://34.208.252.1:4000/api/asm/config', {
      method: 'PUT', body,
      //body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      console.log("ASM", res.ok);
      console.log("ASM",res.status);
      console.log("ASM",res.statusText);
      console.log("ASM",res.headers.raw());
      console.log("ASM",res.headers.get('content-type'));
    });

    callback();
  });



  Then('I verify the information in the webportal', function (callback) {
    fetch('http://test.gtt-web-portal.com/api/device?deviceID=DVS-4051')
    .then(res => res.json())
    //  .then(json => console.log(json))
    .then(function(data){


      if (data !=""){
        console.log("TRUE");
      } else {
        console.log("FALSE");;
      }
    })

    callback();
  });



  Then('I change the core number of days to save output', function (callback) {
    var body =  fs.readFileSync('core_config.json', 'utf-8');
    fetch('http://34.208.252.1:4000/api/core/config', {
      method: 'PUT', body,
      //body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      console.log("CORE", res.ok);
      console.log("CORE",res.status);
      console.log("CORE",res.statusText);
      console.log("CORE",res.headers.raw());
      console.log("CORE",res.headers.get('content-type'));
    });
    callback();
  });

  Then('I change the gps configuration', function (callback) {
    var body =  fs.readFileSync('gps_config.json', 'utf-8');
    fetch('http://34.208.252.1:4000/api/gps/config', {
      method: 'PUT', body,
      //body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      console.log("GPS", res.ok);
      console.log("GPS",res.status);
      console.log("GPS",res.statusText);
      console.log("GPS",res.headers.raw());
      console.log("GPS",res.headers.get('content-type'));
    });
  });


  Then('I change the gps-simulator configuration', function (callback) {
    var body =  fs.readFileSync('gps_simulator_config.json', 'utf-8');
    fetch('http://34.208.252.1:4000/api/gps-simulator/config', {
      method: 'PUT', body,
      //body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      console.log("gps_simulator", res.ok);
      console.log("gps_simulator",res.status);
      console.log("gps_simulator",res.statusText);
      console.log("gps_simulator",res.headers.raw());
      console.log("gps_simulator",res.headers.get('content-type'));
    });
  });



  Then('I change the bus ID to {int}', function (int, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  Then('I change the customer name to automation', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  Then('I change the vehicle class to {int}', function (int, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  Then('I save the setting', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

});
