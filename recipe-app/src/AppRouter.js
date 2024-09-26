// Function for fetching a meal by id should be placed in recipeSerivce.js file.
// This is what a AppRouter should look like: https://reactrouter.com/en/main/components/routes#routes
// However, we will add it in the following lessons, no need to add for this assignment.
export const AppRouter = async () => {
  // ID of the meal should not be hardcoded in the URL. The function to fetch data should take it as a parameter, then you can use string interpolation to pass it to the API call.
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`,);
  if (!response.ok) {
    throw Error("Error");
  }
  const data = await response.json();
  console.log(data);
  return data.idMeal;
};
