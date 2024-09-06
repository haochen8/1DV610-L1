/**
 * Displays 5 identical cookie image component.
 *
 * @author Hao Chen <hc222ig@student.lnu.se>
 * @version 1.1.0
 */

import { quotes } from "./displayQuote.js";

export function displayCookies() {
  let isCookieSelected = false;

  // Get cookie-container from DOM
  const cookieContainer = document.getElementById("cookie-img");

  // Get quote-container from DOM
  const quoteContainer = document.getElementById("quote-container");

  // Create, loop and append identical img elements
  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = "./img/fortune-cookie.jpg";
    img.alt = "fortune cookie";
    img.className = "cookie";

    // Attach click event listeners to images
    img.addEventListener("click", function () {
      if (isCookieSelected === true) {
        return;
      } else {
        // Deselect other cookies
        const cookies = document.querySelectorAll(".cookie");
        cookies.forEach((cookie) => {
          cookie.style.border = "2px solid transparent";
          cookie.style.opacity = "1";
          isCookieSelected = true;
        });
      }
      // Highlight the selected cookie
      img.style.opacity = "0";

      // Display and generate random quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteContainer.textContent = `"${randomQuote}"`
      quoteContainer.classList.add('show')


    });
    cookieContainer.appendChild(img);
  }
}
