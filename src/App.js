import { SearchBar } from './modüles/recipes/search-bar';
import { fetchRecipesByIngredient } from './modüles/recipes/recipeService';
import { useEffect, useState } from 'react';
import { RecipeList } from './modüles/recipes/recipe-list';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeClick = async (recipeId) => {
    const recipeDetails = recipes.find((recipe) => recipe.idMeal === recipeId);
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
      )};
    </div>
  );
};

export default App;

