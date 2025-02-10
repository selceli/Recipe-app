import { useState } from "react";
import { searchRecipesByName } from "../recipeService";
import { useRecipesDispatch, RECIPE_ACTIONS } from "../RecipesProvider";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useRecipesDispatch();

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const recipes = await searchRecipesByName(query);
    dispatch({ type: RECIPE_ACTIONS.refresh, payload: recipes });
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        onChange={handleChange}
        aria-label="Recipe search"
        placeholder="Search for recipes..."
        className="search-input"
      />
    </form>
  );
};
