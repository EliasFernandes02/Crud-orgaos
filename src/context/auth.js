import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider(props) {

    const[usuarioLogado, setUsuarioLogado] = useState(false);

    return (
        <AuthContext.Provider value={{ 
            usuarioLogado,
            setUsuarioLogado,
         }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
