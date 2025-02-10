import { Routes, Route } from "react-router-dom";
import { RecipeList } from "./modules/recipes/RecipeList";
import { SearchBar } from "./modules/recipes/SearchBar";
import { FeaturedRecipes } from "./modules/recipes/FeaturedRecipes";
import { RecipeDetails } from "./modules/recipes/RecipeDetails";
import { ProtectedRoute } from "./ProtectedRoute";
import { CreateNewRecipe } from "./modules/recipes/CreateNewRecipe";
import { Categories } from "./modules/recipes/Categories/Categories";
import { Login } from "./modules/users/Login";
import { CategoryMeals } from "./modules/recipes/Categories/CategoryMeals";
import { Register } from "./modules/users/Register";
import { Logout } from "./modules/users/Logout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/recipes">
        <Route
          path="search"
          element={
            <>
              <SearchBar />
              <RecipeList />
            </>
          }
        />
        <Route path=":recipeId" element={<RecipeDetails />} />
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <CreateNewRecipe />
            </ProtectedRoute>
          }
        />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:categoryId" element={<CategoryMeals />} />
      </Route>

     
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <h1>User page</h1>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <h1>Settings page</h1>
          </ProtectedRoute>
        }
      />

      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <h1>Account Page</h1>
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<FeaturedRecipes />} />
      <Route path="*" element={<h1>404 - Sayfa Bulunamadi</h1>} />
    </Routes>
  );
};
