import { createContext, useContext, useReducer } from 'react';


export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext)

const initialState = {
    userLoggedIn: false,

};


let registerUsers = [];

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState ?? {});
    return (
        <UserContext.Provider value={state}>
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
            if (!action.payload) {
                throw new Error("Payload is undefined");
            }
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
                    ...state,
                    userLoggedIn: true,

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
                return {
                    ...state,
                    userLoggedIn: true,
                };
            } else return {
                ...state,
                userLoggedIn: false
            };

        case UserActionTypes.Logout:
            return {
                ...state,
                userLoggedIn: false
            };
        case UserActionTypes.Update:
            return { ...state, ...action.payload };
        default:
            throw new Error(`Unknown action type: ${action.type}`);


    }

}
