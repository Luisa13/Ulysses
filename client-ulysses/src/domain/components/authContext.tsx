import React from 'react';
import User from '../entity/User';

interface Context{
    userInfo: User | null;
    setUserInfo: (user: User) => void;
}


export const AuthContext = React.createContext<Context>({
    userInfo: null,
    setUserInfo: (user: User) => user,
});

export const AuthProvider: React.FunctionComponent = (props) =>{
    const{ children } = props;
    const [userInfo, setUserInfo] = React.useState<User| null>(null);

    return(
        <AuthContext.Provider value={{userInfo, setUserInfo}} >
            {children}
        </AuthContext.Provider>);
};


