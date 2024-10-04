import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipesByCategory } from "../../recipeService";

export const CategoryMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { query } = useParams();

  useEffect(() => {
    const getMeals = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipesByCategory(query);
        setMeals(data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMeals();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{query} Meals</h1>
      {meals && meals.length > 0 ? (
        <ul className="meal-list">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="meal-item">
              <Link to={`/meal/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-meals">No meals in that category</p>
      )}
    </div>
  );
};
