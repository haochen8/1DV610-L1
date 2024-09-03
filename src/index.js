/**
 * Main entry point of application.
 */

import { getNameInput } from "./js/components/nameInput.js"

document.addEventListener("DOMContentLoaded", () => {
  // Create a name form
  const form = document.getElementById("name-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from refreshing page

    // Get name input
    const name = getNameInput();

    // Create an error message
    const errorMessage = document.getElementById("error-message");

    if (name === "") {
      errorMessage.textContent = "Please enter your name";
    } else {
      errorMessage.textContent = "";
    }
  });
});
