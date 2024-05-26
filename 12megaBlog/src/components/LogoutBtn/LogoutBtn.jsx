import React from 'react'
import {useDispatch} from "react-redux"

// importing for logout functionality
import {authService} from "./../../services"
import {logout} from "./../../slices"

function LogoutBtn()
{

    // getting dispatch
    const dispatch = useDispatch()
    
    function logoutClickHandler()
    {
        // logout
        authService.logout()
            .then(()=>{
                // dispatch logout action
                dispatch(logout())
            })
    }

    return (

        <button
            type='button'
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutClickHandler}
        >
            Logout
        </button>

    )

}

export default LogoutBtn