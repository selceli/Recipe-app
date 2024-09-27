import { useState, useEffect } from "react";
import { fetchRecipesByIngredient } from "../recipeService";
import { AppRouter } from "../../../AppRouter";
import "./styles.css";

export const RecipeList = ({ onRecipeClick }) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeClick = async (idMeal) => {
    const recipeDetails = AppRouter(idMeal);

    if (!recipeDetails) {
      console.error("No recipes found!");
      selectedRecipe();
    } else {
      setSelectedRecipe(recipeDetails);
      onRecipeClick(recipeDetails);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeId = AppRouter();
      setRecipes([recipeId]);
    };
    fetchRecipes();
  }, []);

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
              key={recipe.idMeal}
              className="recipe-item"
              onClick={() => handleRecipeClick(recipe.idMeal)}
            ></li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">No recipes found</p>
      )}
    </>
  );
};
