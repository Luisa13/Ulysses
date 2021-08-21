import React from 'react';
import User from '../entity/User';

interface Context{
    userInfo: User | null;
    userLoged: boolean;
    setUserInfo: (user: User) => void;
}


export const AuthContext = React.createContext<Context>({
    userInfo: null,
    userLoged: false,
    setUserInfo: (user: User) => user,
} );

export const AuthProvider: React.FunctionComponent = (props) =>{
    const{ children } = props;
    const [userInfo, setUserInfo] = React.useState<User| null>(null);
    const userLoged = userInfo? true : false;

    return(
        <AuthContext.Provider value={{userInfo, userLoged, setUserInfo}} >
            {children}
        </AuthContext.Provider>);
};


