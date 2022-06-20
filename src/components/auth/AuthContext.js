import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import AuthService  from '../../api-service/auth-service/AuthService';

import StorageManager from '../../storage/StorageManager';

const returnType = {};

export const AuthContext = createContext({
    user: null,
    isLoading: false,
    login: (email, password) => returnType,
    logout: () => returnType,
});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(false);

    const login = (email, password) => {
        console.log("error")
        setLoading(true);
        AuthService.Login({user: { email: email, password: password }})
        .then((res) => {
           
            StorageManager.setAuthData(res.data);
            setUser(res.data.user);
        }).catch(err =>{
            console.warn(err)
        });
        setLoading(false);
    };
    const isLoggedIn = async () => {
        try{
            setLoading(true);
            const storedUser = await AsyncStorage.getItem("user");

            
            setUser(storedUser);
        }
        catch(e){
            console.warn("no user")
        }
        finally{
            setLoading(false);
        }
    }
    const logout = () => {
        setLoading(true);
        StorageManager.deleteAuthData();
        setUser(null);
        setLoading(false);
    }
    
    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                isLoading: isLoading,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};