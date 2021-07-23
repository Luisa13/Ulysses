import React from 'react'
import { string } from 'yup/lib/locale';
import User from '../domain/entity/User';

export type AppContextType ={
    currentUser: User | null,
    setCurrentUser: (user: User| null) => void
}

export const AppContext = React.createContext<AppContextType>({
    currentUser: null,
    setCurrentUser: (user) => user
});

