/**
 * Main entry point of application.
 *
 * @author Hao Chen <hc222ig@student.lnu.se>
 * @version 1.1.0
 */

import { getNameInput } from "./js/components/nameInput.js";
import { displayCookies } from "./js/components/selectCookie.js";

document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const nameForm = document.getElementById("name-form");
  const welcomeContainer = document.getElementById("welcome-container");
  const cookieContainer = document.getElementById("cookie-container");
  const resetButton = document.getElementById("reset-button");
  const quoteContainer = document.getElementById("quote-container");
  const cookieImgContainer = document.getElementById("cookie-img");

  // Hide cookie container and reset button
  cookieContainer.style.display = "none";
  resetButton.style.display = "none";

  // Submitting name form
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

      // Hide name form and show cookie container
      welcomeContainer.style.display = "none";
      cookieContainer.style.display = "flex";

      // Clear cookie images and call displayCookies
      cookieImgContainer.innerHTML = "";
      displayCookies();
    }
  });

  // Reset button
  resetButton.addEventListener("click", function () {
    // Show the welcome container and hide cookie/quote containers
    welcomeContainer.style.display = "block";

    // Clear cookie images
    cookieImgContainer.innerHTML = "";

    // Clear quote and remove animation
    quoteContainer.textContent = "";
    quoteContainer.classList.remove("show");

    // Hide reset button and cookie container
    resetButton.style.display = "none";
    cookieContainer.style.display = "none";
  });
});
