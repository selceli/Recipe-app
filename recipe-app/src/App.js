
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './modules/recipes/recipeList';
import { AppRouter } from './AppRouter';



export const App = () => {
	// Remvoe, keep the state in the RecipeList component
	const [recipes, setRecipes] = useState([]);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

// Remove, keep the function in the RecipeList component
	useEffect(() => {
		const fetchRecipes = async () => {

			const recipeId = await AppRouter();
			setRecipes([recipeId]);

		};
		fetchRecipes();
	}, []);

	// Change name to handleRecipeClick, in JS it's common to use camelCase to name functions.
	const HandleRecipeClick = async () => {
		// This line makes no sence. AppRouter is to create routes (different URLs) in your app, not to fetch data.
		// In your code, AppRouter function is fetching data from an API, so you should name it something like fetchRecipeDetails. Take a look at what we did in the lesson and try to use similar approach.
		const recipeDetails = await AppRouter();
		setSelectedRecipe(recipeDetails);
	};
	return (
		<div className="container">
			<header>Recipe Search App</header>
			< RecipeList recipes={recipes} onRecipeClick={HandleRecipeClick} />
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
