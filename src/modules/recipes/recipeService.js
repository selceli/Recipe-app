import { fetchData } from '../../utils';

export const BD_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export async function fetchRecipesByIngredient(query) {
  const data = await fetchData(`${BD_BASE_URL}/filter.php?i=`, query);
  return data.meals;
}

export async function searchRecipesById(query) {
  const data = await fetchData(`${BD_BASE_URL}/lookup.php?i=`, query);
  return data.meals ? data.meals[0] : null;
}


export async function searchRecipesByName(query) {
  const data = await fetchData(`${BD_BASE_URL}/search.php?s=`, query);
  return data.meals;
}
export async function fetchCategories() {
  const data = await fetchData(`${BD_BASE_URL}/categories.php?i`);
  return data.categories;
}

export async function fetchRecipesByCategory(query) {
  if (!query) {
    throw new Error('Kategori belirtilmedi');
  }
  const data = await fetchData(`${BD_BASE_URL}/filter.php?c=`, query);
  if (!data.meals) {
    throw new Error(`"${query}" kategorisinde yemek bulunamadi`);
  }
  return data.meals;
}




