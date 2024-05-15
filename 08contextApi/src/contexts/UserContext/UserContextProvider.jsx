import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children})
{

    // user related variables go here
    const [user, setUser] = useState()

    return (

        // pass the states/functions as an object to value attribute
        <UserContext.Provider value={{user, setUser}}>

            {children}

        </UserContext.Provider>

    )
}

export default UserContextProvider