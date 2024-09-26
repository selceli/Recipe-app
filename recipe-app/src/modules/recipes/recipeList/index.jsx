import { useState, useEffect } from "react";
import { fetchRecipesByIngredient } from "../recipeService";
import "./styles.css";

export const RecipeList = ({ onRecipeClick }) => {
  const [recipes, setRecipes] = useState([]);
  // YOu fetch recipes on the component load both in App component and in RecipeList component. You should fetch recipes only in one place. Better to remove the function from App component so it stays clean.
  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) =>
      setRecipes(recipes.length > 0 ? recipes : []),
    );
  }, []);
// Remove, this overrides the actuall onRecipeClick function
  onRecipeClick = () => {
    return "";
  };

  return (
    <>
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li
              key={recipes.idMeal}
              className="recipe-item"
              onClick={() => onRecipeClick(recipes.idMeal)}
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
