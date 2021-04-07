import { createContext, useState } from 'react';

const AuthenticationContext = createContext({
    authenticated: Boolean,
    changeAuthStatus: () : void => {}
});

const AuthContext = () => {

    const[authenticated,setAuthenticated] = useState(false);

    return (<AuthenticationContext.Provider value={{
        authenticated: Boolean,
        changeAuthStatus:  (): void => setAuthenticated(!authenticated) 
        }}>
    </AuthenticationContext.Provider>
    )
};

export default AuthContext;