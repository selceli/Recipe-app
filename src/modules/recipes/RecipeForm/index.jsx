import React, { useState } from "react";
import "./style.css";

function RecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setingredients] = useState([
    { name: "", measurement: "" },
  ]);

  const handleAddIngredient = () => {
    if (ingredients.length <= 20) {
      setingredients([...ingredients, { name: "", measurement: "" }]);
    }
  };

  const handleRemoveIngredient = (index) => {
    const newInngredients = ingredients.filter((_, i) => i !== index);
    setingredients(newInngredients);
  };

  const handleIngredientChange = (index, fielld, value) => {
    const newInngredients = [...ingredients];
    newInngredients[index][fielld] = value;
    setingredients(newInngredients);
  };

  const handleSubmit = (e) => {
    e.prevenntDefault();
    console.log({ recipeName, ingredients });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Recipe Name"
      />

      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={ingredient.name}
            onChange={(e) =>
              handleIngredientChange(index, "name", e.target.value)
            }
            placeholder="Ingredient"
          />
          <input
            type="text"
            value={ingredient.measurement}
            onChange={(e) =>
              handleIngredientChange(index, "measurement", e.target.value)
            }
            placeholder="Measurement"
          />
          <button type="button" onClick={() => handleRemoveIngredient(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>
    </form>
  );
}

export default RecipeForm;
