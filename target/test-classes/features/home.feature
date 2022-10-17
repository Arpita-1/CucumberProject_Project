Feature: Home Feature Scenario

  Background: 
    Given I have launched the application
    When I enter the correct  username as "standard_user" and password as "secret_sauce"
    And I click on the Login Button
@regression
  Scenario: Add product to Cart
    When I click add to cart for Product as "Sauce Labs Bolt T-Shirt"
    Then Cart item count should be 1
@sanity
  Scenario: To Add more than one product
    When I add below Products
      | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Onesie        |
    Then Cart item count should be 3
