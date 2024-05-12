import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// basic layout file, like a template

function Layout() {
    return(
        <>
            <Header />
            {/* router will replace this outlet with respective components based on url */}
            {/* we will specify urls and element for each url in the main.jsx file */}
            <Outlet />
            <Footer />
        </>

    )
}


export default Layout