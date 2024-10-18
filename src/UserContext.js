import { createContext, useContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';


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
};

function userReducer(state, action) {
    switch (action.type) {
        case UserActionTypes.Login:
            if (
                action.payload.email === "johndoe@gmail.com" &&
                action.payload.password === "12345"
            ) {
                return { isLoggedInUser: true, email: action.payload.email };
                Navigate("/")
            } else return { isLoggedInUser: false };
        case UserActionTypes.Logout:
            return { isLoggedInUser: false };
        case UserActionTypes.Update:
            return { ...state, ...action.payload };
        default:
            throw Error;
    }
}
export const loginUser = (dispatch, email, password) => {
    if (email === "johndoe@gmail.com" && password === "12345") {
        dispatch({ type: UserActionTypes.Login, payload: { email } });
        return true;
    }
    return false;
};

export const logoutUser = (dispatch) => {
    dispatch({ type: UserActionTypes.Logout });
};
