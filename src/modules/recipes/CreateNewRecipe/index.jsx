import { ProtectedRoute } from "../../../ProtectedRoute";
import { useForm } from "react-hook-form";
import { useRecipesDispatch } from "../RecipesProvider";
import "./styles.css";
import RecipeForm from "../RecipeForm";
import { useState } from "react";
import { RECIPE_ACTIONS } from "../RecipesProvider";

export const CreateNewRecipe = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useRecipesDispatch();

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
      strIngredient3: data.ingredient3,
      strIngredient4: data.ingredient4,
      strIngredient5: data.ingredient5,
      strIngredient6: data.ingredient6,
      strIngredient7: data.ingredient7,
      strIngredient8: data.ingredient8,
      strIngredient9: data.ingredient9,
      strIngredient10: data.ingredient10,
      strIngredient11: data.ingredient11,
      strIngredient12: data.ingredient12,
      strIngredient13: data.ingredient13,
      strIngredient14: data.ingredient14,
      strIngredient15: data.ingredient15,
      strIngredient16: data.ingredient16,
      strIngredient17: data.ingredient17,
      strIngredient18: data.ingredient18,
      strIngredient19: data.ingredient19,
      strIngredient20: data.ingredient20,

      strMeasure1: data.measure1,
      strMeasure2: data.measure2,
      strMeasure3: data.measure3,
      strMeasure4: data.measure4,
      strMeasure5: data.measure5,
      strMeasure6: data.measure6,
      strMeasure7: data.measure7,
      strMeasure8: data.measure8,
      strMeasure9: data.measure9,
      strMeasure10: data.measure10,
      strMeasure11: data.measure11,
      strMeasure12: data.measure12,
      strMeasure13: data.measure13,
      strMeasure14: data.measure14,
      strMeasure15: data.measure15,
      strMeasure16: data.measure16,
      strMeasure17: data.measure17,
      strMeasure18: data.measure18,
      strMeasure19: data.measure19,
      strMeasure20: data.measure20,

      strSource: data.strSource || null,
      strImageSource: data.strImageSource || null,
      strCreativeCommonsConfirmed: data.strCreativeCommonsConfirmed || null,
    };

    dispatch({ type: RECIPE_ACTIONS.update, payload: [recipeData] });
    setSuccessMessage("Recipe saved successfullly!");
  };
  return (
    <div className="form">
      <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Add New Recipe</h1>
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
          required
        />

        <label htmlFor="strTags">Select Tags</label>
        <select id="strTags" {...register("strTags")}>
          {tag.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
          required
        </select>

        <label htmlFor="customTags">Custom Tags</label>
        <input
          type="text"
          id="customTags"
          {...register("customTags")}
          placeholder="Tags (virgül ile ayirin)"
          required
        />

        <label htmlFor="strDrinkAlternate">Drink name</label>
        <input
          style={{ width: "100% " }}
          id="strDrinkAlternate"
          {...register("strDrinkAlternate", {
            minLength: {
              value: 3,
              message: "Drink name should be at least 3 characters.",
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
          required
        </select>

        <label htmlFor="strArea">Select Area</label>
        <select id="strArea" {...register("strArea")}>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
          required
        </select>

        <RecipeForm />

        <label htmlFor="strInstructions">Cooking Instructions</label>
        <textarea
          className="instructions"
          id="strInstructions"
          {...register("strInstructions")}
          required
        />
        <label htmlFor="strMealThumb">Meal Photo</label>
        <input
          type="file"
          style={{ width: "100% " }}
          id="strMealThumb"
          {...register("strMealThumb")}
          required
        />

        <label htmlFor="strYoutube">You Tube</label>
        <input
          type="text"
          style={{ width: "100% " }}
          id="strYoutube"
          {...register("strYoutube", {
            pattern: {
              value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
              message: "Geçerli bir YouTube bağlantisi girin.",
            },
          })}
        />

        <label htmlFor="strSource">Source</label>
        <input
          type="text"
          style={{ width: "100% " }}
          id="strSource"
          {...register("strSource", {
            value: "#",
          })}
        />

        <label htmlFor="strImageSource">Image Source</label>
        <input
          type="text"
          style={{ width: "100% " }}
          id="strImageSource"
          {...register("strSource", {
            value: "#",
          })}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <label
            htmlFor="strCreativeCommonsConfirmed"
            style={{ marginRight: "5px" }}
          >
            Has A Creative Common:
            <input
              type="checkbox"
              style={{ width: "30px", marginLeft: "10px" }}
              id="strCreativeCommonsConfirmed"
              {...register("strCreativeCommonsConfirmed")}
            />
          </label>
        </div>
        <button type="submit">Save Recipe</button>
        {successMessage && (
          <p style={{ color: "green", fontWeight: "bold", fontSize: "1.2em" }}>
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

const tag = [
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Low-Carb",
  "High-Protein",
  "Quick",
  "Easy",
];

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
