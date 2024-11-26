import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from './modules/users/UserContext';



export const ProtectedRoute = ({ children }) => {
    const state = useContext(UserContext);
    // const userLoggedIn = useContext(RecipeContext);
    const userLoggedIn = state.userLoggedIn;
    return userLoggedIn ? children : <Navigate to='/login' replace={true} />;
};
