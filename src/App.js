import { SearchBar } from './modules/recipes/search-bar';
import { searchRecipesById } from './modules/recipes/recipeService';
import { useState } from 'react';
import { RecipeList } from './modules/recipes/recipe-list';
import { useRecipesDispatch, useRecipes } from './modules/recipes/RecipesProvider';
import { AppRouter } from './AppRouter';


import './App.css';

const App = () => {

  return (
    <div className="container">
      <header>Recipe Search App</header>
      <AppRouter />
    </div>
  );
};

export default App;

