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

    const dispatch = useDispatch()

    // getting userData if logged in on component mount
    useEffect(()=>{
        // set loading state
        dispatch(setLoading(true))

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
        dispatch(setLoading(false))
    })
    
    return (

        <>
            <Header />
            {!loading?
                <Outlet />
                :
                <div className="loading">
                    Loading...
                </div>
            }
            <Footer />
        </>


    )


}

export default App
