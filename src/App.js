<<<<<<< HEAD
import { SearchBar } from './modules/recipes/search-bar';
import { fetchRecipesById } from './modules/recipes/recipeService';
import { useState } from 'react';
import { RecipeList } from './modules/recipes/recipe-list';
=======

import { AppRouter } from './AppRouter';
import { Navbar } from "./modules/shared-components/Navbar"
>>>>>>> lesson40-selcan
import './App.css';
import { RecipesProvider } from './modules/recipes/RecipesProvider';
import { UserProvider } from './modules/users/UserContext';

<<<<<<< HEAD
const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeClick = async (recipeId) => {
    const recipeDetails = await fetchRecipesById(recipeId);
    setSelectedRecipe(recipeDetails);
  };

  return (
    <div className="container">
      <header>Recipe Search App</header>
      <SearchBar />
      <RecipeList onRecipeClick={handleRecipeClick} />
      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.strMeal}</h2>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
          <p>{selectedRecipe.strInstructions}</p>
        </div>
      )}
    </div>
=======


export default function App() {

  return (
    <UserProvider>
      <RecipesProvider>
        <>
          <Navbar />
          <div className="container">
            <AppRouter />
          </div>
        </>
      </RecipesProvider>
    </UserProvider>
>>>>>>> lesson40-selcan
  );
};



