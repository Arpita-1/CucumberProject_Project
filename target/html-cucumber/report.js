$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/home.feature");
formatter.feature({
  "name": "Home Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the correct  username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_correct_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to Cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I click add to cart for Product as \"Sauce Labs Bolt T-Shirt\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.HomeStepdef.i_click_add_to_cart_for_Product_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cart item count should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepdef.cart_item_count_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the correct  username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_correct_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Add more than one product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I add below Products",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.HomeStepdef.i_add_below_Products(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cart item count should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepdef.cart_item_count_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login to define Happy Path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the correct  username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_correct_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login to define failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"\u003cUserName\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message  as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce1",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce1",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login to define failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"locked_out_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message  as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login to define failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"problem_user\" and password as \"secret_sauce1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message  as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login to define failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"performance_glitch_user\" and password as \"secret_sauce1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message  as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});