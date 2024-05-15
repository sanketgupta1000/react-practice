// another component to use UserContext

import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext/UserContext'

function Profile()
{

    // getting access of user object
    const {user} = useContext(UserContext)

    if (!user)
    {
        return(
            <div>Please Login</div>
        )
    }

    return(
        <div>Welcome {user.username}</div>
    )
}

export default Profile