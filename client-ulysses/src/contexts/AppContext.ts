import React from 'react'
import User from '../domain/entity/User';

export type AppContextType ={
    currentUser: User | null,
    setCurrentUser: (user: User| null) => void
}

export const AppContext = React.createContext<AppContextType>({
    currentUser: null,
    setCurrentUser: (user) => user
});

