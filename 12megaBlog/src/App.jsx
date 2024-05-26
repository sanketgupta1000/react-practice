import {useSelector} from "react-redux"
import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { authService } from "./services"
import { useDispatch } from "react-redux"
import {login, setLoading} from "./slices"

function App() {

    // getting access of loading state from store
    // this is how you access in case of multiple reducers
    const loading = useSelector(state=>state.loadingReducer.loading)
    const loadingMsg = useSelector(state=>state.loadingReducer.loadingMsg)

    const dispatch = useDispatch()

    // getting userData if logged in on component mount
    useEffect(()=>{
        // set loading state
        dispatch(setLoading({loading: true, loadingMsg: "Checking user..."}))

        // getting userData
        authService.getCurrentUser()
        .then((user)=>{
            // if user is logged in, set user data in store
            if(user)
            {
                dispatch(login(user))
                // set loading state
            }
        })
        .catch((error)=>{
            // empty handler for now
        })
        .finally(()=>{
            // remove loading state
            dispatch(setLoading({loading: false, loadingMsg: ""}))
        })
    }, [])
    
    return (

        <>
            <Header />
            {!loading?
                <Outlet />
                :
                <div className="flex h-screen items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="flex items-center justify-center space-x-2 text-white">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM12 20c3.042 0 5.824-1.135 7.938-3l-1.647-3A7.962 7.962 0 0112 16v4zm5.938-11H20c0-3.042-1.135-5.824-3-7.938l-3 1.647A7.962 7.962 0 0112 8V4zm-5.291 2A7.962 7.962 0 0112 4v4c2.458 0 4.667.89 6.375 2.355l1.647-3.001C17.824 1.135 15.042 0 12 0H8zm-2.355 6.375L4.001 9.022C1.135 6.958 0 9.042 0 12h4c0-2.458.89-4.667 2.355-6.375z" />
                        </svg>
                        <span>{loadingMsg}</span>
                    </div>
                </div>
            }
            <Footer />
        </>


    )


}

export default App
