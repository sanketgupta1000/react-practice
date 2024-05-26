// login component

import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../services'
import { login } from "../../slices"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { InputField, Button, Logo } from '../index'
import { setLoading } from '../../slices'

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    // state for error
    const [error, setError] = useState("")

    // login handler
    const handleLogin = async (data) => {
        // remove errors
        setError("")
        // set the loading state
        dispatch(setLoading({ loading: true, loadingMsg: "Logging in..." }))
        try {
            // login
            const session = await authService.login(data)
            if (session) {
                // if session created, get user
                const userData = await authService.getCurrentUser()
                if (userData) {
                    // if userData received, set in redux store
                    dispatch(login(userData))
                    // now navigate to home
                    navigate('/')
                }
            }
        }
        catch (error) {
            setError(error.message)
        }
        // remove loading state
        dispatch(setLoading({ loading: false, loadingMsg: "" }))
    }

    return (

        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {/* display error only if it exists */}
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


                <form onSubmit={handleSubmit(handleLogin)} className='mt-8'>
                    <div className='space-y-5'>
                        {/* field for email */}
                        {/* this is how you tell react hook form what to include in data when calling handleLogin */}
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="Enter your Email"
                            // this actually passes a ref too, hence the component/element should be configured to take a ref
                            {...register("email",
                                {
                                    required: true,
                                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                                }
                            )}
                        />

                        <InputField
                            label="Password"
                            type="password"
                            placeholder="Enter your Password"
                            {...register("password",
                                {
                                    required: true,
                                }
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>


    )


}


export default Login