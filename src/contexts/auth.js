import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [dadosUsuario, setDadosUsuario] = useState({})
    const [concluidos, setConcluidos] = useState([])
    const [porcentagem, setPorcentagem] = useState(0)
    
    return (
        <AuthContext.Provider value={{dadosUsuario, setDadosUsuario,concluidos,setConcluidos,porcentagem, setPorcentagem }}>

            {children}
        </AuthContext.Provider>
    )
}