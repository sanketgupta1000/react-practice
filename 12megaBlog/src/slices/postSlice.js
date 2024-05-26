import {createSlice} from '@reduxjs/toolkit'

// initial state for post slice state
const initialState = {
    posts: []
}

// slice for post
const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        
        // functionality to set posts
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
                

    }
})

export const {setPosts} = postSlice.actions

export default postSlice.reducer