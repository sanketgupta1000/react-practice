import React from 'react'
import {useDispatch} from "react-redux"

// importing for logout functionality
import {authService} from "./../../services"
import {logout} from "./../../slices"

import {setLoading} from "./../../slices"

function LogoutBtn()
{

    // getting dispatch
    const dispatch = useDispatch()
    
    function logoutClickHandler()
    {
        // set the loading state
        dispatch(setLoading({loading: true, loadingMsg: "Logging out..."}))
        // logout
        authService.logout()
        .then(()=>{
            // dispatch logout action
            dispatch(logout())
        })
        .finally(()=>{
            // remove loading state
            dispatch(setLoading({loading: false, loadingMsg: ""}))
        })
    }

    return (

        <button
            type='button'
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-blue-700 rounded-full'
            onClick={logoutClickHandler}
        >
            Logout
        </button>

    )

}

export default LogoutBtn