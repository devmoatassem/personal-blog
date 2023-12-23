import { createContext} from 'react';

const AuthContext = createContext();



const AuthContextProvier = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
    }

export default AuthContextProvier;