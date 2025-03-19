document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the selected dish's data from localStorage
  const selectedDish = JSON.parse(localStorage.getItem("selectedDish"));

  // Debug: Log the retrieved dish
  console.log("Retrieved Dish:", selectedDish);

  if (selectedDish) {
    // Display the dish's name and image
    document.getElementById("dish-name").textContent = selectedDish.name;
    document.getElementById("dish-image").src = selectedDish.imgPath;

    // Debug: Log ingredients and procedure
    console.log("Ingredients:", selectedDish.ingredients);
    console.log("Procedure:", selectedDish.procedure);

    // Display ingredients
    const ingredientsList = document.getElementById("dish-ingredients");
    if (ingredientsList) {
      ingredientsList.innerHTML = selectedDish.ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("");
    } else {
      console.error("Ingredients list element not found!");
    }

    // Display procedure
    const procedureList = document.getElementById("dish-procedure");
    if (procedureList) {
      procedureList.innerHTML = selectedDish.procedure
        .map((step) => `<li>${step}</li>`)
        .join("");
    } else {
      console.error("Procedure list element not found!");
    }
  } else {
    // Redirect back to categories.html if no dish data is found
    window.location.href = "categories.html";
  }
});