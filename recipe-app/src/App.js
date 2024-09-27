
import { useState } from 'react';
import { RecipeList } from './modules/recipes/recipeList';
import { AppRouter } from './AppRouter';
import './App.css';

export const App = () => {

	const [selectedRecipe, setSelectedRecipe] = useState();

	const handleRecipeClick = async () => {
		const fetchRecipeDetails = AppRouter();
		console.log(fetchRecipeDetails);
		setSelectedRecipe(fetchRecipeDetails);
	};


	return (
		<div className="container">
			<header>Recipe Search App</header>
			< RecipeList onRecipeClick={handleRecipeClick} />
			{selectedRecipe ? (
				<div>
					<h2>{selectedRecipe.strMeal}</h2>
					<img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
					<p>{selectedRecipe.strInstruction}</p>
				</div>
			) : (
				null
			)}
		</div>
	);
};

