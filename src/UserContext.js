import { createContext, useReducer } from 'react';


export const UserContext = createContext();
export const UserDispatchContext = createContext()
    ;

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
    logout: "logout",
    update: "update",
};

function userReducer(state, action) {
    switch (action.type) {
        case UserActionTypes.Login:
            if (
                action.payload.email === "johndoe@gmail.com" &&
                action.payload.password === "12345"
            ) {
                return { isLoggedInUser: true, email: action.payload.email };
            } else return { isLoggedInUser: false };
        case UserActionTypes.logout:
            return { isLoggedInUser: false };
        case UserActionTypes.update:
            return { ...state, ...action.payload };
        default:
            throw Error;
    }
}
