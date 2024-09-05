/**
 * Handles the name input component.
 * 
 * @author Hao Chen <hc222ig@student.lnu.se>
 * @version 1.1.0
 */
export function getNameInput() {
  const nameInput = document.getElementById('name-input')
  return nameInput.value.trim()
}