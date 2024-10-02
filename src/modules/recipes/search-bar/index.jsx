import { useState } from "react";
import { searchRecipesByName } from "../recipeService";
import { useRecipesDispatch, RECIPE_ACTIONS } from "../RecipesProvider";

import "./styles.css";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useRecipesDispatch();

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const recipes = await searchRecipesByName(query);
    console.log(recipes);
    dispatch({
      type: RECIPE_ACTIONS.update,
      payload: recipes,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        onChange={handleChange}
        aria-label="recipe search"
        placeholder="Search for recipes..."
        className="search-input"
      />
    </form>
  );
};
