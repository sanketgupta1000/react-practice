import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"
import postReducer from "../slices/postSlice"


const store = configureStore({
    reducer:{
        userReducer,
        postReducer
    }
})

export default store