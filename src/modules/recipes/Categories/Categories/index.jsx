import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../recipeService";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(`Error: ${err.message || "Unknown error"}`);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <p>Uploaded...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Categories</h1>
      {categories && categories.length > 0 ? (
        <ul className="recipe-list">
          {categories.map((category) => (
            <li key={category.idCategory} className="recipe-item">
              <Link to={`${category.strCategory}`}>{category.strCategory}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">no-recipes</p>
      )}
    </div>
  );
};
