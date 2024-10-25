import { createContext, useContext, useReducer } from 'react';
// import { Navigate } from 'react-router-dom';
// import { Register } from './modules/users/Register';


export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext)

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
                action.payload.email === "johndoe@gmail.com" &&
                action.payload.password === "12345"
            ) {
                return { isLoggedInUser: true, email: action.payload.email };
            } else return { isLoggedInUser: false };
        case UserActionTypes.Logout:
            return { isLoggedInUser: false };
        case UserActionTypes.Update:
            return { ...state, ...action.payload };
        case UserActionTypes.Register:

            if (

                action.payload.name === "johndoe" &&
                action.payload.email === "johndoe@gmail.com" &&
                action.payload.password === "12345"
            ) {
                return {
                    isLoggedInUser: true, email: action.payload.email,
                    name: action.payload.name
                };
            }
        default:
            throw Error;
    }
}
