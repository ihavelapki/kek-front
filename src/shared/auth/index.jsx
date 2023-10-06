import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {  
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const  login = (email, password) => {
        console.log('email:', email);
        console.log('password:', password)
        console.log('point 5', isAuthenticated)
        setIsAuthenticated(true);
        console.log('point 6', isAuthenticated)
    };

      const logout = () => {
        setIsAuthenticated(false);
    };
    
    
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>        
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

