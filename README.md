# Todo James Tests 🧪📋

Welcome to the Cypress test suite for the Todo List application at `todolist.james.am`. This README will help you understand what's tested in this repo.

## Overview 📝

This project includes tests for the Todo List application, split into two main categories:

- **Tests with Session:** These tests simulate a user session where todos are added and interacted with.
- **Tests without Session:** These focus on verifying the initial state and basic functionalities of the app.

## Features Tested ✅

### With Session 🗒️

- **Adding Multiple Todos:** Checks if the list is correctly populated after adding several todos.
- **Deleting a Todo:** Ensures that an item can be removed from the list.
- **Editing a Todo:** Verifies the capability to edit existing todos.

### Without Session 🔄

- **Header Visibility:** Confirms that the header is displayed on the page.
- **Header Content:** Checks if the header includes the text "To Do List".
- **Creating and Editing Todos:** Tests the creation of a new todo and entering edit mode.
- **Informational Text:** Ensures that instructions for editing todos are visible.
- **Input Placeholder:** Verifies the placeholder text in the new todo input field.

## Setup & Execution 🛠️

### Prerequisites

- Node.js installed
- Cypress installed (will be included in `node_modules` after npm install)

### Steps:

.**Install Dependencies:**
- npm install cypress

## Configuration Details ⚙️

- **Cypress:** Utilized for all end-to-end testing.
- **Test Environment:** `https://todolist.james.am/#/`

## License 📄
-This project is open-source and available under the MIT License.

