import { createContext, useContext, useReducer } from "react";

export const RECIPE_ACTIONS = {
  update: "update",
  deleteAll: "delete_all",
};

export const RecipesContext = createContext();
export const RecipesDispatchContext = createContext();

export const RecipesProvider = ({ children, initialState }) => {
  const [recipes, dispatch] = useReducer(userReducer, initialState ?? []);

  return (
    <RecipesContext.Provider value={recipes}>
      <RecipesDispatchContext.Provider value={dispatch}>
        {children}
      </RecipesDispatchContext.Provider>
    </RecipesContext.Provider>
  );
};

function userReducer(state, action) {
  switch (action.type) {
    case RECIPE_ACTIONS.update: {
      const newRecipes = action.payload.filter(
        (payloadItem) =>
          !state.some((recipe) => recipe.idMeal === payloadItem.idMeal)
      );
      return [...newRecipes, ...state];
    }
    case RECIPE_ACTIONS.deleteAll: {
      return [];
    }
    default:
      throw new Error("Action type is not supported");
  }
}

export const useRecipes = () => useContext(RecipesContext);
export const useRecipesDispatch = () => useContext(RecipesDispatchContext);
