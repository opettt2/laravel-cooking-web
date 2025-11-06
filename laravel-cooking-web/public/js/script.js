// Assuming you have these elements in your HTML
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const mealList = document.getElementById('mealList');
const modalContainer = document.querySelector('.modal-container');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipeCloseBtn');

// Improved Function to fetch meals by ingredient
async function searchMealsByIngredient(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching data:', error);
        mealList.innerHTML = '<p class="error-message">Failed to fetch meals. Please try again later.</p>';
    }
}

// Event listener for the search button click
searchButton.addEventListener('click', performSearch);

// Event listener for pressing 'Enter' key in the search input field
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default form submit behavior
        performSearch();
    }
});

// Fetch and display categories
async function fetchAndDisplayCategories() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example function to display meals for a category
function displayCategoryMeals(meals) {
    const categoryMealsContainer = document.getElementById('category-meals');
    categoryMealsContainer.innerHTML = ''; // Clear previous meals

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.setAttribute('data-mealid', meal.idMeal); // Set the meal ID
        mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h4>${meal.strMeal}</h4>
        `;
        categoryMealsContainer.appendChild(mealDiv);
    });

    attachMealClickListeners(); // Attach click listeners to new meal items
}

function displayCategories(categories) {
    const categoriesContainer = document.querySelector('.categories-container');
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.setAttribute('data-category', category.strCategory);
        categoryDiv.innerHTML = `
            <p>${category.strCategory}</p>
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}" />
            <h3>${category.strCategory}</h3>
        `;
        categoriesContainer.appendChild(categoryDiv);
        categoryDiv.addEventListener('click', () => fetchAndDisplayMealsByCategory(category.strCategory));
    });
}

async function fetchAndDisplayMealsByCategory(categoryName) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data = await response.json();
        displayMeals(data.meals, 'category-meals');
    } catch (error) {
        console.error('Error:', error);
    }
}
// Call the function to fetch and display categories
fetchAndDisplayCategories();

function displayMeals(meals) {
    const mealContainer = document.querySelector('.meal-container');
    mealContainer.innerHTML = ''; // Clear previous meals

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal-item';
        mealDiv.dataset.id = meal.idMeal;
        mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <h3>${meal.strMeal}</h3>
        `;
        mealContainer.appendChild(mealDiv);
        mealDiv.addEventListener('click', () => fetchAndDisplayMealDetails(meal.idMeal));
    });
}

// Function to perform a search and display results
async function performSearch() {
    const ingredient = searchInput.value.trim();
    if (ingredient) {
        const meals = await searchMealsByIngredient(ingredient);
        if (meals) {
            displayMeals(meals, 'mealList');
        } else {
            mealList.innerHTML = '<p>No meals found. Try another ingredient.</p>';
        }
    }
}


async function fetchAndDisplayMealDetails(mealId) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        showMealDetailsPopup(data.meals[0]);
    } catch (error) {
        console.error('Error fetching meal details:', error);
    }
}

// Function to create and display meal details on popup
function showMealDetailsPopup(meal) {
    mealDetailsContent.innerHTML = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-ingredient>
            <h3>List Ingredients:</h3>
            <li>${meal.strIngredient}</li>
        </div>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-img">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="recipe-video">
            <a href="${meal.strYoutube}" target="_blank">Video Tutorial</a>
        </div>
        <button id="shareButton">Share</button>
    `;
    modalContainer.style.display = 'block';
}

// Event listener for popup close button
recipeCloseBtn.addEventListener('click', closeRecipeModal);

function closeRecipeModal() {
    modalContainer.style.display = 'none';
}

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

  // Function to generate and display the shareable link
function generateShareLink() {
    // Replace this with the content you want to share
    const contentToShare = "This is the content to share.";

    // Generate the shareable link (you can customize this as needed)
    const shareableLink = `https://example.com/share?content=${encodeURIComponent(contentToShare)}`;

    // Display the link in an alert or any other way you prefer
    alert(`Share this link: ${shareableLink}`);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const addRecipeButton = document.getElementById('addRecipeButton');
    addRecipeButton.addEventListener('click', createRecipeForm);
});

function createRecipeForm() {
    const form = document.createElement('form');
    form.id = 'recipeForm';
    form.style.display = 'block';

    // Title Input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.htmlFor = 'recipeTitle';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'recipeTitle';
    titleInput.name = 'recipeTitle';
    titleInput.required = true;

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    // Other form fields can be added here in a similar way

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Recipe';
    form.appendChild(submitButton);

    // Append the form to a container in your HTML
    const container = document.querySelector('.admin-controls'); // Change the selector as needed
    container.appendChild(form);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle the form data here
        // You can use FormData API or manually collect data from each input
    });
}

  // Add a click event listener to the button
document.getElementById("shareButton").addEventListener("click", generateShareLink);

searchButton.addEventListener('click', performSearch);

document.querySelector('.profile-pic').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.dropdown-content').classList.toggle('show');
  });
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function() {
    if (document.querySelector('.dropdown-content').classList.contains('show')) {
      document.querySelector('.dropdown-content').classList.remove('show');
    }
  });
  
//login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login form submitted');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign Up form submitted');
});

