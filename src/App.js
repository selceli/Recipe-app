import { SearchBar } from './modules/recipes/search-bar';
import { fetchRecipesByIngredient } from './modules/recipes/recipeService';
import { useEffect, useState } from 'react';
import { RecipeList } from './modules/recipes/recipe-list';
import './App.css';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeClick = async (recipeId) => {
    // TODO: add API call to fetch recipe data by recipe Id
    setSelectedRecipe(recipeDetails);
  };

  return (
    <div className="container">
      <header>Recipe Search App</header>
      <SearchBar />
      < RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.strMeal}</h2>
          <img src={selectedRecipe.strMeal} alt={selectedRecipe.strMeal} />
          <p>{selectedRecipe.strInstruction}</p>
        </div>
      )}
    </div>
  );
};

export default App;

