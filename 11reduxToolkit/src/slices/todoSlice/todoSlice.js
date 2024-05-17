// will create todoSlice here
// a slice is like a piece of functionality/feature

import { createSlice, nanoid } from "@reduxjs/toolkit"

// initial state
const initialState = {
    todos: [
        {
            id: 1,
            text: "This is a test todo"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState: initialState,
    // reducers are like methods we will use to manipulate the state
    reducers: {

        // state refers to the current state
        // will not pass state explicitly
        // action refers to the data we pass
        // accessible through action.payload
        addTodo: (state, action) => {
            console.log("addTodo() called")
            const newTodo = {
                id: nanoid(),
                text: action.payload.text
            }

            // adding in todos
            state.todos.push(newTodo)

        },
        removeTodo: (state, action) => {
            console.log("removeTodo() called")
            state.todos = state.todos.filter(todo => todo.id!=action.payload.id)

        }

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer