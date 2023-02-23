Feature: Todo List
  As a user
  I want to be able to add, edit and delete tasks from my todo list
  So that I can keep track of my tasks and stay organized

  Scenario: Add a new task
    Given I am on the todo list page
    When I add a new task "Buy groceries"
    Then the task "Buy groceries" should be added to the list