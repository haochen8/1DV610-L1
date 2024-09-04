/**
 * Main entry point of application.
 */

import { getNameInput } from "./js/components/nameInput.js"
import { displayCookies } from "./js/components/selectCookie.js";

document.addEventListener("DOMContentLoaded", () => {
  // Create a name form
  const nameForm = document.getElementById("name-form");

  // Get welcome container
  const welcomeContainer = document.getElementById('welcome-container')

  nameForm.addEventListener("submit", (event) => {
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

    //Hide name form
    welcomeContainer.style.display = 'none'
    //Call displayCookies
    displayCookies()

  });



});
