import { SearchBar } from "../search-bar";
import { useState } from "react";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  return [
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.idMeal}>{recipe.strMeal}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
  ];
};
