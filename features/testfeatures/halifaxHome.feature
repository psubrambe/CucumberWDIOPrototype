Feature: Halifax Home View

Scenario Outline: Navigate to Halifax Home page

  Given Open browser and Start Application
  And I enter in search "<searchValue>"
  And I select the halifax
  And I click the Halifax home page option from the google search

  Examples:
  |searchValue|
  |Halifax    |
