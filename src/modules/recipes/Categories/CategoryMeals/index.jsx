import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchRecipesByCategory, searchRecipesById } from "../../recipeService";

export const CategoryMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const navigate = useNavigate;

  useEffect(() => {
    const getMeals = async () => {
      try {
        setLoading(true);
        const mealsData = await fetchRecipesByCategory(categoryId);
        const detailedMeals = await Promise.all(
          mealsData.map(async (meal) => {
            const details = await searchRecipesById(meal.idMeal);

            return { ...meal, ...details };
          })
        );

        if (
          detailedMeals &&
          Array.isArray(detailedMeals) &&
          detailedMeals.length > 0
        ) {
          setMeals(detailedMeals);
        } else {
          setError(
            `"${categoryId}" kategorisinde yemek bulunamadi. Lütfen başka bir kategori seçin.`
          );
        }
      } catch (err) {
        setError("error:", error);
      } finally {
        setLoading(false);
      }
    };

    getMeals();
  }, [categoryId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{categoryId} </h1>

      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <h2>{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "200px" }}
              />
              <p>
                Ingredient: {meal.strIngredient1},{meal.strIngredient2},
                {meal.strIngredient3},{meal.strIngredient4},
                {meal.strIngredient5},{meal.strIngredient6},
                {meal.strIngredient7}, {meal.strIngredient8},
                {meal.strIngredient9},{meal.strIngredient10},
                {meal.strIngredient11},{meal.strIngredient12},
                {meal.strIngredient13},{meal.strIngredient14},
                {meal.strIngredient15},{meal.strIngredient16}.
              </p>
              <p>Instructions: {meal.strInstructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-meals">No meals in that category</p>
      )}
    </div>
  );
};
