import { SearchBar } from "../search-bar";
import { useState } from "react";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  return [
    <div className="container">
      <header>Recipe Search App</header>
      <SearchBar />
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.idMeal}>{recipe.strMeal}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>,
  ];
};
