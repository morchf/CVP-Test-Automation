Feature: Analyze summary page
  As an fire chief user
  In order to find out more about runs
  I want to be able to analyze the Vehicle report page
  @login
  @_all
  @report1
  Scenario: Click on the Vehicle report page

    When I am on the home page
    Then I click on the vehicle report link
    Then the vehicle report overflow display
    Then I select the first Vehicle
