Feature: Sort summary page
  As an fire chief user
  I want to be able to  analyze the summary page
  @all

  Scenario: Sort through the summary page

    When I am on the home page


    Scenario: Sort through the summary page2

      When I am on the home page
      Then I click on the summary table
      Then I click Monthly
      Then I click Weekly
      Then I click daily
