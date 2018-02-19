@login
Feature: Login to Analytics
  As an fire chief user
  In order to find out more about runs
  I want to be able to access Analytics for my city
  @login
  Scenario: Login to Analytics
    When I type in username and password
    Then I click on the login button
    Then I go to the home page
