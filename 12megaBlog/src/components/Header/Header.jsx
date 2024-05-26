import React from 'react'
// importing useSelector to help in conditional rendering based on user logged in or not
import { useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import {LogoutBtn, Container, Logo} from "./../index"


function Header() {

    // getting access of isLoggedIn
    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn)

    //getting access of navigate
    const navigate = useNavigate()

    // creating an array of navItems
    const navItems = [

        {
            title: 'Home',
            path: '/',
            // active denotes if it should be rendered or not
            active: true
        },
        {
            title: 'All Posts',
            path: '/posts',
            active: isLoggedIn
        },
        {
            title: 'Create Post',
            path: '/create',
            active: isLoggedIn
        },
        {
            title: 'Login',
            path: '/login',
            active: !isLoggedIn
        },
        {
            title: 'Signup',
            path: '/signup',
            active: !isLoggedIn
        }
    ]

    return (


        <header className='py-3 shadow bg-gray-500'>

            <Container>

                <nav className='flex'>

                    <div className="mr-4">

                        <Link to='/'>
                            <Logo width='70px'/>
                        </Link>

                    </div>

                    <ul className='flex ml-auto'>

                        {/* conditionally rendering based on active */}
                        {navItems.map((item)=>
                        item.active ?
                        (
                            <li key={item.title}>
                                {/* alternative of Link is to use useNavigate, useful to navigate through programming */}
                                <button
                                    onClick={()=>{
                                        navigate(item.path)
                                    }}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >
                                    {item.title}
                                </button>
                            </li>
                        ):
                        null
                        )}

                        {/* displayging logout button only when logged in */}
                        {isLoggedIn?
                        
                            (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )
                            :
                            null
                        }


                    </ul>
                </nav>

            </Container>

        </header>


    )


}


export default Header