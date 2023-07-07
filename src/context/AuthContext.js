import { View, Text } from 'react-native'
import React, { useState, createContext} from 'react'
import UserData from './../components/auth/UserData';

export const AuthContext = createContext({
    auth: undefined
})

export function AuthProvider(props) {

    const { children } = props;
    const [auth, setAuth] = useState(undefined);

    const login = (UserData) => {
        setAuth(UserData);
    }

    const logout = () => {
        setAuth(undefined);
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext}>
            { children }
        </AuthContext.Provider>
    )




}