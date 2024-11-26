import { createContext, useContext, useReducer } from 'react';



export const RecipeContext = createContext();
export const RecipeDispatchContext = createContext();

export const useRecipes = () => useContext(RecipeContext);
export const useRecipeDispatch = () => useContext(RecipeDispatchContext);

const initialState = {
    recipes: [],

};



export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, initialState);
    return (
        <RecipeContext.Provider value={state}>
            <RecipeDispatchContext.Provider value={dispatch}>
                {children}
            </RecipeDispatchContext.Provider>
        </RecipeContext.Provider>
    );
};

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.payload],
            };

        case "update":
            return {
                ...state,
                recipes: action.payload,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);

    }
};

export const UserActionTypes = {
    Login: "login",
    Logout: "logout",
    Update: "update",
    Register: "register",
};





