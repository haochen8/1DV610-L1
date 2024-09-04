/**
 * Displays 5 identical cookie images.
 */
export function displayCookies() {
  // Get cookie-container from DOM
  const cookieContainer = document.getElementById("cookie-container");

  // Clear existing content
  cookieContainer.innerHTML = "";

  // Create, loop and append identical img elements
  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = "src/img/fortune-cookie.jpg";
    img.alt = "fortune cookie";
    img.className = "cookie";

    console.log('Images:', img)
    
    // Attach click event listeners to images
    img.addEventListener("click", function () {
      // Deselect other cookies
      const cookies = document.querySelector(".cookies");
      cookies.forEach((cookie) => {
        cookie.style.border = "2px solid transparent";
        cookie.style.opacity = "1";
      });

      // Highlight the selected cookie
      img.style.opacity = "0.5";
    });

    cookieContainer.appendChild(img);
    console.log('Appended images:', img)
  }
}
