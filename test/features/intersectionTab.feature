Feature: Analyze summary page
  As an fire chief user
  In order to find out more about runs
  I want to be able to analyze the intersection page

  @all
  Scenario: Filter by weekdays
    When I am on the home page
    Then I click the intersection tab
    Then I click on the calendar
  	Then I select weekdays

    Scenario: Filter by weekends
    When I am on the home page
    Then I click the intersection tab
  	Then I click on the calendar
  	Then I select weekends

  Scenario: Filter by all days
    When I am on the home page
    Then I click the intersection tab
    Then I click on the calendar
    Then I select all days


  Scenario: Filter by Vehicle ALL
    When I am on the home page
    Then I click the intersection tab
    When I click on the Vehicles
    Then I select all vehicles

  Scenario: Filter by Vehicle Fire Truck
    When I am on the home page
    Then I click the intersection tab
    When I click on the Vehicles
    Then I unselect police and Ambulance

  Scenario: Filter by LEGEND all Intersection
    When I am on the home page
    Then I click the intersection tab
    Then I click on the LEGEND
  	Then All intersections will display

  Scenario: Filter by LEGEND Opticom Intersection only
    When I am on the home page
    Then I click the intersection tab
    Then I click on the LEGEND
  	When I uncheck Other Intersection
  	Then I uncheck Stop Sign
  	Then only Opticom intersection will display
