Feature: Create a new cake
  In order to have cakes in the platform
  As a user with permissions
  I want to create a new cake

  Scenario: A valid non existing cake
    Given I send a POST request to "/cakes" with body:
      """
      {
        "name": "The best cake",
        "img": "https://www.cocinacaserayfacil.net/tarta-de-queso-vina/"
      }
      """
    Then the response status code should be 201
    And the response should be empty
