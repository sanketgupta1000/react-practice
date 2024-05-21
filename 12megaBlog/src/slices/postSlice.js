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
        
        // functionality to add a new post
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },

        // functionality to delete a post
        // TODO: see actual structure of a post and change here
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },

        // functionality to update a post
        // TODO: see actual structure of a post and change here
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        }
                

    }
})

export const {addPost, deletePost, updatePost} = postSlice.actions

export default postSlice.reducer