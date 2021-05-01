import { createContext, useState } from 'react';


export const AuthenticationContext = createContext();

const AuthContext = props => {

    const[authenticated , setAuthenticated] = useState(false);
    const[userName , setUserName] = useState('');

    const authenticatedHandler = (userName) => 
    {
        setAuthenticated(true);
        setUserName(userName);
    }

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated: authenticated,
            signin: authenticatedHandler,
            signoutHandler: () => setAuthenticated(false),
            authenticatedUserName:userName
            }}>
                {props.children}
        </AuthenticationContext.Provider>
    )
};

export default AuthContext;