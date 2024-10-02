import { Routes, Route } from "react-router-dom";
import { RecipeList } from "./modules/recipes/recipe-list";
import { SearchBar } from "./modules/recipes/search-bar";

export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/user" element={<h1>User</h1>} />

            <Route path="/Settings" element={<h1>Settings</h1>} />
            <Route path="/" element={
                <>
                    <SearchBar />
                    <RecipeList />
                </>} />
        </Routes>
    );
};