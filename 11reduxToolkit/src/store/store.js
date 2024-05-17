import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './../slices/todoSlice/todoSlice'

// will create the store here
// store represents the centralized global data store
export const store=configureStore({
    reducer: todoReducer
})