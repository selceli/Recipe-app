// export const AppRouter = async (mealId) => {
//   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,);
//   if (!response.ok) {
//     throw Error("Error");
//   }
//   const data = await response.json();
//   if (!data.meals || data.meals.length === 0) {
//     return null;
//   }
//   return data.meals;
// };
import { Routes, Route } from 'react-router-dom';
import { RecipeList } from './modules/recipes/recipeList';
import { SearchBar } from "../src/modules/recipes/search-bar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/user" element={<h1>User page</h1>} />
      <Route path="/settings" element={<h1>Settings page</h1>} />
      <Route path="/" element={
        <>
          <SearchBar />
          <RecipeList />
        </>
      } />
    </Routes>
  );
};
