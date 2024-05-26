// to handle loading state

// it can be seen that this loading state will be used by multiple components
// hence decided to go with a slice of its own

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const {setLoading} = loadingSlice.actions

export default loadingSlice.reducer