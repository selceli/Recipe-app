
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './modules/recipes/recipeList';
import { AppRouter } from './AppRouter';



export const App = () => {
	const [recipes, setRecipes] = useState([]);


	useEffect(() => {
		const fetchRecipes = async () => {

			const recipeId = await AppRouter();
			setRecipes([recipeId]);

		};
		fetchRecipes();
	}, []);

	return (
		<div className="container">
			<header>Recipe Search App</header>
			< RecipeList recipes={recipes} />
		</div>

	);
};
