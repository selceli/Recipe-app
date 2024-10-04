import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useContext } from 'react';

export const ProtectedRoute = ({ children }) => {
    // TODO: replace with actual value from User context when it is available
    const user = useContext(UserContext);
    return user ? children : <Navigate to='/login' replace={true} />;
};
