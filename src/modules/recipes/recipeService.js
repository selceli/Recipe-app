export async function fetchRecipesByIngredient(query) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
  );

  if (!response.ok) {
    throw Error;
  }
  const data = await response.json();
  return data.meals;
};

};



export async function fetchRecipesById(query) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`
  );

  if (!response.ok) {
    throw Error;
  }
  const data = await response.json();

  return data.meals;
};

=======
  return data.meals[0];
};

