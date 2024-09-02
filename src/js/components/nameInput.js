/**
 * Handles the name input component.
 */
export function getNameInput() {
  const nameInput = document.getElementById('name-input')
  return nameInput.value.trim()
}