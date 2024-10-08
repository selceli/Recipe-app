import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useContext } from 'react';

export const ProtectedRoute = ({ children }) => {
    // TODO: replace with actual value from User context when it is available
    const userLoggedIn = useContext(UserContext);
    return userLoggedIn ? children : <Navigate to='/login' replace={true} />;
};
