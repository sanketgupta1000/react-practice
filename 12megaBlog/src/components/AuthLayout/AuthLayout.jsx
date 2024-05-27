import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../slices'

// authentication means is authentication required to acces the children component?
function AuthLayout({children, authentication=true})
{

    // getting dispatch
    const dispatch = useDispatch()

    // getting navigate
    const navigate = useNavigate()

    // getting authentication state from store
    const isLoggedIn = useSelector(state=>state.userReducer.isLoggedIn)

    // checking on mount
    useEffect(()=>
    {
        // set loading state
        dispatch(setLoading({loading: true, loadingMsg: "Checking Authentication..."}))
        // console.log("before checking")
        // if authentication is required and user is not logged in
        if(authentication && !isLoggedIn)
        {
            // redirect to login page
            navigate("/login")
        }
        
        // if authentication is not required and user is logged in
        if(!authentication && isLoggedIn)
        {
            // redirect to home page
            navigate("/")
        }

        // console.log("after checking")
        
        // set loading state
        dispatch(setLoading(false, ""))
        // console.log("after checking")

    }, [isLoggedIn, navigate])

    return (


        <>
            {children}
        </>


    )


}


export default AuthLayout