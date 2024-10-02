import { fetchData } from '../shared-components/utils';

export const BD_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export async function fetchRecipesByIngredient(query) {
  const data = await fetchData(`${BD_BASE_URL}/filter.php?i=`, query);
  return data.meals;
};

export async function searchRecipesById(query) {
  const data = await fetchData(`${BD_BASE_URL}/lookup.php?s=`, query);
  return data.meals[0];
};


export async function searchRecipesByName(query) {
  const data = await fetchData(`${BD_BASE_URL}/search.php?s=`, query);
  return data.meals;
};

