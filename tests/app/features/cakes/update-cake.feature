Feature: Update a cake
  In order to have updated cakes in the platform
  As a user with permissions
  I want to update a cake

  Scenario: A valid existing cake
    Given I send a PUT request to "/cakes" with body:
      """
      {
        "id": 1,
        "name": "The cake",
        "img": "https://www.cocinacaserayfacil.net/tarta-de-queso-vina/"
      }
      """
    Then the response status code should be 204
    And the response should be empty
