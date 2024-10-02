import { useEffect } from "react";
import { fetchRecipesByIngredient } from "../recipeService";
import { RECIPE_ACTIONS, useRecipes } from "../RecipesProvider";
import { useRecipesDispatch } from "../RecipesProvider";
import "./styles.css";

export const RecipeList = ({ onRecipeClick }) => {
  const recipes = useRecipes();
  const dispatch = useRecipesDispatch();

  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) =>
      dispatch({ type: RECIPE_ACTIONS.update, payload: recipes })
    );
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
