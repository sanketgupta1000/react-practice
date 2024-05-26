import {configureStore} from "@reduxjs/toolkit"
import {userReducer, postReducer, loadingReducer} from "./../slices"


const store = configureStore({
    reducer:{
        userReducer,
        postReducer,
        loadingReducer
    }
})

export default store