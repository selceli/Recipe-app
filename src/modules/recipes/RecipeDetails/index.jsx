import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchRecipesById } from "../recipeService";
import {useRecipes} from "../RecipesProvider";

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipes = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(true);
        const recipeData = await searchRecipesById(recipeId);
        setRecipe(recipeData);
      } catch (err) {
        setError("Tarif yüklenirken bir hata oluştu.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };


    if (recipeId) {
      const recipe = recipes.find((recipe) => recipe.idMeal === recipeId);
      if (recipe) {
        setRecipe(recipe);
        setLoading(false);
        return;
      } else {
        fetchRecipeDetails();
      }
    }
  }, [recipeId, recipes]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>Tarif bulunamadi.</div>;

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "300px" }}
      />
      <h2>Malzemeler:</h2>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
          return (
            ingredient && (
              <li key={i}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>
      <h2>Hazirlanişi:</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};
