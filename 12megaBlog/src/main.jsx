import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home, AllPostsPage, AddPostPage, EditPostPage, LoginPage, PostPage, SignupPage } from './pages/index.js'
import { AuthLayout } from './components/index.js'
import './index.css'

const router = createBrowserRouter([
    {
        // base url
        path: "/",
        // its template or layout
        element: <App />,
        children:[
            {
                path: "",
                element: (
                    <AuthLayout authentication={true}>
                        <Home />
                    </AuthLayout>
                )
            },
            {
                path: "login",
                element: (
                    <AuthLayout authentication={false}>
                        <LoginPage />
                    </AuthLayout>
                )
            },
            {
                path: "signup",
                element: (
                    <AuthLayout authentication={false}>
                        <SignupPage />
                    </AuthLayout>
                )
            },
            {
                path: "posts",
                element: (
                    <AuthLayout authentication={true}>
                        <AllPostsPage />
                    </AuthLayout>
                )
            },
            {
                path: "create",
                element: (
                    <AuthLayout authentication={true}>
                        <AddPostPage />
                    </AuthLayout>
                )
            },
            {
                path: "posts/:postId",
                element: (
                    <AuthLayout authentication={true}>
                        <PostPage />
                    </AuthLayout>
                )
            },
            {
                path: "posts/:postId/edit",
                element: (
                    <AuthLayout authentication={true}>
                        <EditPostPage />
                    </AuthLayout>
                )
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    // wrapping in provider
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </React.StrictMode>
)
