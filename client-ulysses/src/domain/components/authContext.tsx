import React from 'react';
import User from '../entity/User';
import Trip from '../entity/Trip';

interface Context{
    userInfo: User;
    setUserInfo: (user: User) => void;
}

const defaultValue = new User(-1, "", "", "", "", "", []);

export const AuthContext = React.createContext<Context>({
    userInfo: defaultValue,
    setUserInfo: (user: User) => user,
} );

export const AuthProvider: React.FunctionComponent = (props) =>{
    const{ children } = props;
    const [userInfo, setUserInfo] = React.useState<User>(defaultValue);

    return(
        <AuthContext.Provider value={{userInfo, setUserInfo}} >
            {children}
        </AuthContext.Provider>);
};


