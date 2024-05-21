import {createSlice} from '@reduxjs/toolkit'

// initial state for user state
const initialState = {
    isLoggedIn: false,
    userData: null
}

// creating slice for user
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {

        // functionalities go here

        // login functionality
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
        },

        // logout functionality
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        }

    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer