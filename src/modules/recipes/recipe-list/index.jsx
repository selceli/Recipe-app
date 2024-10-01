import { useState, useEffect } from "react";
import { fetchRecipesByIngredient } from "../recipeService";
import "./styles.css";

export const RecipeList = ({ onRecipeClick }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await fetchRecipesByIngredient("chicken");
      setRecipes(recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <>
      {recipes?.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li
              key={recipe.idMeal}
              className="recipe-item"
              onClick={() => onRecipeClick(recipe.idMeal)}
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
