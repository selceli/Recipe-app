import { ProtectedRoute } from "../../../ProtectedRoute";
import { useForm } from "react-hook-form";
import { useRecipeDispatch } from "../../../RecipeContext";
import "./styles.css";

export const CreateNewRecipe = () => {
  console.log("CreateNewRecipe rendered");

  const dispatch = useRecipeDispatch();
  const {
    register,
    handleSubmit,
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

  const onSubmit = (data) => {
    const recipeData = {
      idMeal: null,
      strMeal: data.strMeal,
      strDrinkAlternate: null,
      strCategory: data.strCategory,
      strArea: data.strArea,
      strInstructions: data.strInstructions,
      strMealThumb: null,
      strTags: null,
      strYoutube: null,
      strIngredient1: data.ingredient1,
      strIngredient2: data.ingredient2,
    };
    console.log("Form submitted:", recipeData);

    dispatch({ type: "ADD_RECİPE", payload: recipeData });
  };
  return (
    <ProtectedRoute>
      <div className="form">
        <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="strMeal">Meal name</label>
          <input
            style={{ width: "100% " }}
            id="strMeal"
            {...register("strMeal", {
              minLength: {
                value: 3,
                message: "Meal name should be at least 3 characters.",
              },
            })}
          />
          {errors.strMeal && <p>{errors.strMeal.message}</p>}

          <label htmlFor="strCategory">Select Category</label>
          <select id="strCategory" {...register("strCategory")}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="strArea">Select Area</label>
          <select id="strArea" {...register("strArea")}>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          <label htmlFor="strInstructions">Cooking Instructions</label>
          <textarea
            className="instructions"
            id="strInstructions"
            {...register("strInstructions")}
          />

          <label htmlFor="ingredient1">Ingredient 1</label>
          <textarea id="ingredient1" {...register("ingredient1")} />

          <label htmlFor="ingredient2">Ingredient 2</label>
          <textarea id="ingredient2" {...register("ingredient2")} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </ProtectedRoute>
  );
};
const areas = [
  "American",
  "Chinese",
  "Italian",
  "Mexican",
  "Indian",
  "French",
  "Japanese",
  "Mediterranean",
  "Thai",
  "Spanish",
  "Greek",
  "Korean",
  "Vietnamese",
  "Turkish",
  "Brazilian",
  "Caribbean",
];
const categories = [
  "Beef",
  "Chicken",
  "Dessert",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
  "Breakfast",
  "Goat",
];
