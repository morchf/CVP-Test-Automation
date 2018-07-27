@cvp
Feature: Navigate cvp GUI interface
  As an fire chief user
  I want to be able to view the current configuration for cvp
  @cvp
  Scenario: change cvp device name and ID
    When I go to my lanner cvp advance url
    Then I click on device tab
    Then I click on home tab
    Then I click on app tab
    Then I click on asm tab
    Then I click on core tab
    Then I click on db tab
    Then I click on firehose tab
    Then I click on gps tab
    Then I click on gps-simulator tab
    Then I click on hw tab
    Then I click on hw-lanner-com-four tab
    Then I click on hw-lanner-io tab
    Then I click on hw-lanner-rs485 tab
    Then I click on hw-simulator tab
    Then I click on iot tab
    Then I click on portal tab
    Then I click on radio tab
    Then I click on radio-gps tab
    Then I click on radio-tsp tab
    Then I click on rs485 tab
    Then I click on rs485-simulator tab
    Then I click on serial-gps tab
    Then I click on software tab
    Then I click on trip-select tab
    Then I click on trip-select-simulator tab
    Then I click on trip-start tab
    Then I click on tsp tab
    Then I click on register button



  @cvp
  Scenario: change cvp device configuration to all new values
    When I go to my lanner cvp advance url
    Then I remove bus automationCVP
    Then I change the bus name to automationCVP
    Then I change the asm config to new configuration
    Then I change the core number of days to save output
    #  Then I change the gps configuration
    #  Then I change the gps-simulator configuration
    Then I verify the information in the webportal
