document.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    book.addEventListener("click", () => {
      const category = book.id; // Get the category (e.g., "pork", "chicken")
      showDishes(category);
    });
  });

  function showDishes(category) {
    fetch("dishes.json")
      .then((response) => response.json())
      .then((data) => {
        // Get dishes for the selected category
        const dishes = data[category];
        const catSection = document.querySelector(".cat-section");
  
        // Replace section content with a two-column grid of dish cards
        catSection.innerHTML = `
          <div class="new-cat-section">
            <div class="dish-type-buttons">
              <button data-category="pork">Pork</button>
              <button data-category="chicken">Chicken</button>
              <button data-category="fish">Fish</button>
              <button data-category="vegetable">Vegetable</button>
              <button data-category="noodle">Noodle</button>
              <button data-category="beef">Beef</button>
              <button data-category="seafood">Seafood</button>
              <button data-category="dessert">Dessert</button>
            </div>
            <div class="dish-per-category">
              <h2>${category.charAt(0).toUpperCase() + category.slice(1)} Dishes</h2>
              <ul class="dishes-grid">
                <li>
                  ${dishes
                  .map(
                    (dish) => `
                  <div class="book">
                    <div class="book__cover-img">
                      <img src="${dish.imgPath}" alt="${dish.name}" />
                    </div>
                    <div class="book__cover-title">${dish.name}</div>
                  </div>
                `
                  )
                  .join("")}
                </li>
              </ul>
            </div>
          </div>
        `;
  
        // Add event listeners to the buttons
        const buttons = document.querySelectorAll(".dish-type-buttons button");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
  
            // Remove the "selected" class from all buttons
            buttons.forEach((btn) => btn.classList.remove("selected"));
  
            // Add the "selected" class to the clicked button
            button.classList.add("selected");
  
            // Reload dishes for the selected category
            showDishes(selectedCategory);
          });
        });
  
        // Set the initial selected button based on the current category
        const initialButton = document.querySelector(
          `.dish-type-buttons button[data-category="${category}"]`
        );
        if (initialButton) {
          initialButton.classList.add("selected");
        }
      })
      .catch((error) => {
        console.error("Error fetching dishes.json:", error);
      });
  }});