// reducers

import loadingReducer from "./loadingSlice"
import postReducer from "./postSlice"
import userReducer from "./userSlice"

// functionalities

import { setLoading } from "./loadingSlice"
import { setPosts } from "./postSlice"
import { login, logout } from "./userSlice"

export {loadingReducer, postReducer, userReducer, setLoading, setPosts, login, logout}