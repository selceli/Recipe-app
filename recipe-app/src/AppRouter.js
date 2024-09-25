export const AppRouter = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`,);
  if (!response.ok) {
    throw Error("Error");
  }
  const data = await response.json();
  return data.idMeal;
};
