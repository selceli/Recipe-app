import React, { useState } from "react";
import "./style.css";
import { useRecipeDispatch } from "../../../RecipeContext";
import { useForm } from "react-hook-form";

function RecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setingredients] = useState([
    { name: "", measurement: "" },
  ]);

  const dispatch = useRecipeDispatch();
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      strMeal: "",
      strCategory: "Beef",
      strArea: "",
      strInstructions: "",
      ingredient1: "",
      ingredient2: "",
    },
  });

  const handleAddIngredient = () => {
    if (ingredients.length <= 20) {
      setingredients([...ingredients, { name: "", measurement: "" }]);
    }
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setingredients(newIngredients);
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setingredients(newIngredients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

          <select
            id="strArea"
            {...register("strArea")}
            value={ingredient.measurement}
            onChange={(e) =>
              handleIngredientChange(index, "measurement", e.target.value)
            }
            placeholder="measurement"
          >
            <option value="" disabled>
              Select measurement
            </option>
            {measurements.map((measurement) => (
              <option key={measurement} value={measurement}>
                {measurement}
              </option>
            ))}
          </select>
          <div>
            <h2>Preview</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} - {ingredient.measurement}
                </li>
              ))}
            </ul>
          </div>

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
const measurements = [
  "1 pound",
  "1/4 cup",
  "3 cloves",
  "1 tin ",
  "1/2 teaspoon",
  "1/2 teaspoon",
  "6 leaves",
  "spinkling",
];

export default RecipeForm;
