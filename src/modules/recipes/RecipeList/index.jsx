import { useRecipes } from "../RecipesProvider";
import { Link } from "react-router-dom";

export const RecipeList = () => {
  const recipes = useRecipes();

  return (
    <>
      {recipes?.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.idMeal} className="recipe-item">
              <Link to={`/recipes/${recipe.idMeal}`}>{recipe.strMeal}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">No recipes found</p>
      )}
    </>
  );
};
