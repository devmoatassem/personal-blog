import { createContext, useState, useEffect} from 'react';

import { getFromSession } from '../session/session';

const AuthContext = createContext();

// import PropTypes from 'prop-types';

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

// AuthContextProvier.propTypes = {
//     children: PropTypes.node.isRequired
// };

export {AuthContextProvier, AuthContext};