import { Routes, Route } from 'react-router-dom';
import { RecipeList } from './modules/recipes/RecipeList';
import { SearchBar } from './modules/recipes/SearchBar';
import { FeaturedRecipes } from './modules/recipes/FeaturedRecipes';
import { RecipeDetails } from './modules/recipes/RecipeDetails';
import { ProtectedRoute } from './ProtectedRoute';
import { CreateNewRecipe } from './modules/recipes/CreateNewRecipe';
import { Categories } from './modules/recipes/Categories/Category';
import { Login } from './modules/users/Login';
import { CategoryMeals } from './modules/recipes/Categories/CategoryMeals';

/*
Lesson 38 TODOs:
1. Add recipes pages routes:
  - One the main app page, only display featured information
  + Add a Search dedicated page
  - Add Categories page
    - Create Recipe List page
  + Add Recipe details page
  - Add Create new recipe page
2.  Implement Protected Routes:
  - Create new recipe page
  + Settings page
  + User page
3. Implement 404 Page (catch-all route for undefined paths):

*/

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<FeaturedRecipes />}
            />
            <Route path='/login' element={<Login />} />
            <Route
                path='/user'
                element={
                    <ProtectedRoute>
                        <h1>User page</h1>
                    </ProtectedRoute>
                }
            />

            <Route
                path='/settings'
                element={

                    <h1>Settings page</h1>

                }
            />

            <Route path='/recipes'>
                <Route
                    path='search'
                    element={
                        <>
                            <SearchBar />
                            <RecipeList />
                        </>
                    }
                />
                <Route path=':recipeId' element={<RecipeDetails />} />
                <Route path='create' element={<CreateNewRecipe />} />
                <Route path='categories'>
                    <Route path=':category' element={<CategoryMeals />}/>
                    <Route index element={<Categories />}/>
                </Route>
            </Route>
            <Route path='/account' element={<h1>Account Page</h1>} />
            <Route path="*" element={<h1>Logged out succesfully.</h1>} />
        </Routes>
    );
};
