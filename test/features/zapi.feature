@api
@all
Feature: Analyze api
  As an developer
  I want to be able to unit test all api


@testin
  Scenario: access api
  When I am on the software
  Then I get a json response of all software

  Scenario: access route api
  When I am on the route reporting page
  Then I get a json response of all route

  Scenario: access vehicle reporting api
  When I am on the vehicle reporting page
  Then I get a json response of all vehicle

  Scenario: access vehicle setting api
  When I am on the vehicle setting page
  Then I get a json response of all settings

  Scenario: access scheduling api
  When I am on the scheduling page
  Then I get a json response of all schedule

  Scenario: access user manager api
  When I am on the vehicle setting page
  Then I get a json response of all users
