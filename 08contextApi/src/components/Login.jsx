import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext/UserContext'

function Login()
{

    // this is how you access the variables from the context
    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

    return (

        <>
        
            <h2>Login</h2>

            <input
                type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                placeholder='Username'
            />

            <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder='Password'
            />

            <button
                onClick={submitHandler}
            >
                Submit
            </button>
        </>



    )


}

export default Login