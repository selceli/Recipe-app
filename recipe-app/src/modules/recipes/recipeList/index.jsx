import { useState, useEffect } from "react";
import { fetchRecipesByIngredient } from "../recipeService";
import "./styles.css";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) =>
      setRecipes(recipes.length > 0 ? recipes : []),
    );
  }, []);
  return (
    <>
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li
              key={recipes.idMeal}
              link
              to="www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
              className="recipe-item"
            >
              {recipe.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">No recipes found</p>
      )}
    </>
  );
};
