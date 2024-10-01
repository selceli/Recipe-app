import { useState } from "react";
import "./styles.css";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        aria-label="recipe search"
        placeholder="Search for recipes..."
      />
    </form>
  );
};
