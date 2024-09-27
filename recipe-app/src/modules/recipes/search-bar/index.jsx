import { useState } from "react";
import { fetchRecipesByIngredient } from "../recipeService";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const recipes = await fetchRecipesByIngredient(query);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        aria-label="Recipe search"
        placeholder="Search for recipes..."
      />
    </form>
  );
};
