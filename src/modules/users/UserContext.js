import { createContext, useContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { Register } from './Register';


export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext)

let registerUsers = [{ email: "johndoe@getDefaultNormalizer.com", password: "12345", userName: "johndoe" }];

export const UserProvider = ({ children, initialState }) => {
    const [user, dispatch] = useReducer(userReducer, initialState ?? {});
    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
};

export const UserActionTypes = {
    Login: "login",
    Logout: "logout",
    Update: "update",
    Register: "register",
};

function userReducer(state, action) {
    switch (action.type) {
        case UserActionTypes.Register:
            if (
                action.payload.email &&
                action.payload.password &&
                action.payload.name
            ) {
                registerUsers.push({
                    email: action.payload.email,
                    password: action.payload.password,
                    name: action.payload.name,
                });
                return {
                    isLoggedInUser: true,
                    email: action.payload.email,
                    name: action.payload.name,
                };
            } else {
                throw Error;
            }

        case UserActionTypes.Login:
            if (
                registerUsers.find((user) =>
                    user.email === action.payload.email &&
                    user.password === action.payload.password)

            ) {
                return { isLoggedInUser: true, email: action.payload.email };
            } else return { isLoggedInUser: false };
        case UserActionTypes.Logout:
            return { isLoggedInUser: false };
        case UserActionTypes.Update:
            return { ...state, ...action.payload };

        default:
            throw Error;
    }
}
