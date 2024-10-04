import { useParams } from "react-router-dom";

export const RecipeDetails = () => {
  const { recipeId } = useParams();

  return <h1>Recipe details:{recipeId}</h1>;
};
