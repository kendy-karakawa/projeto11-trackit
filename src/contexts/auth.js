import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [dadosUsuario, setDadosUsuario] = useState({})
    
    return (
        <AuthContext.Provider value={{dadosUsuario, setDadosUsuario}}>

            {children}
        </AuthContext.Provider>
    )
}