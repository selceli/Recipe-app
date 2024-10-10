import { ProtectedRoute } from "../../../ProtectedRoute";

export const CreateNewRecipe = () => {
  return (
    <div>
      <ProtectedRoute>
        <h1>Create New Recipe</h1>
      </ProtectedRoute>
    </div>
  );
};
