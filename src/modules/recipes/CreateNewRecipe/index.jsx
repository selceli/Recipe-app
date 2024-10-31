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

    dispatch({ type: "ADD_RECIPE", payload: recipeData });
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

          <label htmlFor="strTags">Select Tags</label>
          <select id="strTags" {...register("strTags")}>
            {tag.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

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
          <input id="ingredient1" {...register("ingredient1")} />

          <label htmlFor="ingredient2">Ingredient 2</label>
          <input id="ingredient2" {...register("ingredient2")} />

          <label htmlFor="ingredient3">Malzeme 3</label>
          <input id="ingredient3" {...register("strIngredient3")} />

          <label htmlFor="ingredient4">Malzeme 4</label>
          <input id="ingredient4" {...register("strIngredient4")} />

          <label htmlFor="ingredient5">Malzeme 5</label>
          <input id="ingredient5" {...register("strIngredient5")} />

          <label htmlFor="ingredient6">Malzeme 6</label>
          <input id="ingredient6" {...register("strIngredient6")} />

          <label htmlFor="ingredient7">Malzeme 7</label>
          <input id="ingredient7" {...register("strIngredient7")} />

          <label htmlFor="ingredient8">Malzeme 8</label>
          <input id="ingredient8" {...register("strIngredient8")} />

          <label htmlFor="ingredient9">Malzeme 9</label>
          <input id="ingredient9" {...register("strIngredient9")} />

          <label htmlFor="ingredient10">Malzeme 10</label>
          <input id="ingredient10" {...register("strIngredient10")} />

          <label htmlFor="strMealThumb">Meal Photo</label>
          <input
            type="file"
            style={{ width: "100% " }}
            id="strMealThumb"
            {...register("strMealThumb")}
          />
          <label htmlFor="strYoutube">You Tube</label>
          <input
            type="text"
            style={{ width: "100% " }}
            id="strYoutube"
            {...register("strYoutube", {
              required: "You Tube bağlantisi gereklidir.",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
                message: "Geçerli bir YouTube bağlantisi girin.",
              },
            })}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </ProtectedRoute>
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
