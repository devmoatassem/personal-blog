import { createContext, useState, useEffect} from 'react';

import { getFromSession } from '../session/session';

const AuthContext = createContext();

const AuthContextProvier = ({ children }) => {
    const [authUser, setAuthUser] = useState({});
    
    useEffect(()=>{
        const token = getFromSession("userToken");
        token? setAuthUser(JSON.parse(token)): setAuthUser({acessToken: null});
    },[])
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
    }

export {AuthContextProvier, AuthContext};