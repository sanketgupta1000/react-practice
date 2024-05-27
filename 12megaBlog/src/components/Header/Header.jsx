import React from 'react'
// importing useSelector to help in conditional rendering based on user logged in or not
import { useSelector } from 'react-redux'
import {Link, NavLink} from "react-router-dom"
import {LogoutBtn, Container, Logo} from "./../index"


function Header() {

    // getting access of isLoggedIn
    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn)

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


        <header className='py-3 shadow bg-white'>

            <Container>

                <nav className='flex'>

                    <div className="mr-4">

                        <Link to='/'>
                            <Logo width='50px'/>
                        </Link>

                    </div>

                    <ul className='flex ml-auto items-center'>

                        {/* conditionally rendering based on active */}
                        {navItems.map((item)=>
                        item.active ?
                        (
                            <li
                                key={item.title}
                                className='mx-1'
                            >
                                <NavLink
                                    to={item.path}
                                    className={({isActive})=>`inline-bock px-6 py-2 duration-200 rounded-full ${isActive? "bg-blue-100 text-blue-700": " hover:bg-blue-100 hover:text-blue-700"}`}
                                >
                                    {item.title}
                                </NavLink>
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