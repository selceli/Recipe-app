
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './modules/recipes/recipeList';
import { AppRouter } from './AppRouter';



export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [selectedRecipe, setSelectedRecipe] = useState(null);


	useEffect(() => {
		const fetchRecipes = async () => {

			const recipeId = await AppRouter();
			setRecipes([recipeId]);

		};
		fetchRecipes();
	}, []);

	const HandleRecipeClick = async () => {
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
