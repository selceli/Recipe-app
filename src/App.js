import { SearchBar } from './modules/recipes/search-bar';
import { fetchRecipesById } from './modules/recipes/recipeService';
import { useState } from 'react';
import { RecipeList } from './modules/recipes/recipe-list';
import './App.css';

const App = () => {

 lesson36-comments
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeClick = async (recipeId) => {
    // TODO: add API call to fetch recipe data by recipe Id


  const [recipes, setRecipes] = useState([]); //bunu kaldırdığımda hata alıyorum.recipes undefined oluyor.  
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeClick = async (recipeId) => {
    const recipeDetails = await fetchRecipesByIngredient(recipeId);

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
  );
};

export default App;

