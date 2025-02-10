import { useEffect } from "react";
import { RecipeList } from "../RecipeList";
import {
  RECIPE_ACTIONS,
  useRecipes,
  useRecipesDispatch,
} from "../RecipesProvider";
import { fetchRecipesByIngredient } from "../recipeService";

export const FeaturedRecipes = ({ onRecipeClick }) => {
  const recipes = useRecipes();
  const dispatch = useRecipesDispatch();

  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) =>
      dispatch({ type: RECIPE_ACTIONS.update, payload: recipes })
    );
  }, []);

  return <RecipeList />;
};
