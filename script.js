// Get the search input element
const searchInput = document.querySelector("#search");

// Get all the elements on the page
const elements = document.querySelectorAll("*");

// When the search input changes, filter the elements
searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredElements = elements.filter(function(element) {
    return element.textContent.toLowerCase().includes(searchTerm);
  });

  // Update the list of elements
  const listElement = document.querySelector(".list");
  listElement.innerHTML = "";
  filteredElements.forEach(function(element) {
    const listItemElement = document.createElement("li");
    listItemElement.textContent = element.textContent;
    listElement.appendChild(listItemElement);
  });
});
