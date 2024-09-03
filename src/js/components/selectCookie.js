/**
 * Displays 5 identical cookie images.
 */
export function displayCookies() {
  // Get cookie-container from DOM
  const cookieContainer = document.getElementById('cookie-container')

  // Clear existing content
  cookieContainer.innerHTML = ''

  // Create, loop and append identical img elements
  for (let i = 0; i < 5; i++) {
    const img = document.createElement('img')
    img.src = 'src/img/fortune-cookie.jpg'
    img.alt = 'fortune cookie'
    img.className = 'cookie'
    cookieContainer.appendChild(img)
  }
}