import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'

// specifying paths and their elements to be used in layout

// const router = createBrowserRouter([
//     {
//         // base url
//         path: "/",
//         // its template or layout
//         element: <Layout/>,
//         // specific urls or its children
//         children: [
//             {
//                 path: "",
//                 element: <Home />
//             },
//             {
//                 path: "about",
//                 element: <About />
//             }
//         ]
//     }
// ])

// another way
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            {/* path variable possible in routing too */}
            <Route path='user/:userid' element={<User/>}></Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* actually, no need of App.jsx here, since using router */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
