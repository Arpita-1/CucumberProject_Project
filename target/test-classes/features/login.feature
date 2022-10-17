Feature: Login Feature Scenario

  Background: 
    Given I have launched the application

  @regression
  Scenario: Positive Login to define Happy Path
    When I enter the correct  username as "standard_user" and password as "secret_sauce"
    And I click on the Login Button
    Then I should land on the home page

  @sanity
  Scenario Outline: Negative Login to define failure path
    When I enter the username as "<UserName>" and password as "<Password>"
    And I click on the Login Button
    Then I should get the error message  as "<Error>"

    Examples: 
      | UserName                | Password      | Error                                                                     |
      | locked_out_user         | secret_sauce  | Epic sadface: Sorry, this user has been locked out.                       |
      | problem_user            | secret_sauce1 | Epic sadface: Username and password do not match any user in this service |
      | performance_glitch_user | secret_sauce1 | Epic sadface: Username and password do not match any user in this service |
