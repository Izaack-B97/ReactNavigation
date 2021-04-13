import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce la informacion que tendre aqui
export interface AuthState {
    isLoggedIn       : boolean,
    username        ?: string,
    favoriteIcon    ?: string,
};


// Estado inicial
export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
};

// Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState,
    singIn: () => void,
    changeFavoriteIcon: ( iconName: string ) => void,
    logOut: () => void,
    changeName: ( username: string ) => void
};

// Crear el contexto 
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer( authReducer , authInitialState);

    const singIn = () => {
        dispatch({ type: 'singIn' });
    };

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const logOut = () => {
        dispatch({ type: 'logout' })
    };

    const changeName = ( username: string ) => {
        dispatch({ type: 'changeName', payload: username });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            singIn,
            changeFavoriteIcon           ,
            logOut,
            changeName
        }}>
            { children }
        </AuthContext.Provider>
    );   
}