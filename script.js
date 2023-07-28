// Store the checked state of the checkbox in localStorage.
function saveCheckboxState(checkbox) {
  localStorage.setItem(checkbox.id, checkbox.checked);
}

// Check the localStorage value and set the checkbox accordingly.
function loadCheckboxState(checkbox) {
  const checked = localStorage.getItem(checkbox.id);
  checkbox.checked = checked === "true";
}

// Initialize the checkbox.
const checkbox = document.getElementById("myCheckbox");
saveCheckboxState(checkbox);

// When the page loads, check the localStorage value and set the checkbox accordingly.
window.addEventListener("load", function() {
  loadCheckboxState(checkbox);
});