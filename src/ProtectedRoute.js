import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

export const ProtectedRoute = ({ children }) => {
    // TODO: replace with actual value from User context when it is available
    const userLoggedIn = useContext(RecipeContext);
    return userLoggedIn ? children : <Navigate to='/login' replace={true} />;
};
