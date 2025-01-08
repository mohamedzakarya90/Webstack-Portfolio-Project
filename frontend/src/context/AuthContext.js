import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    const login = (username, password) => {
       // implementing the login logic here
        setUser ({ username });
    };

    const register = (username, password) => {
        // implementing the registration logic here
        console.log('Registering user:', username);
        // After successful registration, you might want to log the user in
        setUser ({ username });
    };

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};

