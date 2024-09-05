/**
 * Main entry point of application.
 *
 * @author Hao Chen <hc222ig@student.lnu.se>
 * @version 1.1.0
 */

import { getNameInput } from "./js/components/nameInput.js";
import { displayCookies } from "./js/components/selectCookie.js";

document.addEventListener("DOMContentLoaded", () => {
  // Create a name form
  const nameForm = document.getElementById("name-form");

  // Get welcome container
  const welcomeContainer = document.getElementById("welcome-container");

  // Get cookie container and hide
  const cookieContainer = document.getElementById("cookie-container");
  cookieContainer.style.display = "none";

  // Get quote container and hide
  const quoteContainer = document.getElementById("quote-container");
  quoteContainer.style.display = "none";

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
      //Hide name form
      welcomeContainer.style.display = "none";
      //Call displayCookies and show
      displayCookies();
      cookieContainer.style.display = "flex";
    }
  });
});
