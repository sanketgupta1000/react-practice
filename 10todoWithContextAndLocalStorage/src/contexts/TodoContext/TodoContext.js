import {createContext, useContext} from 'react'

// creating a context for todos
const TodoContext = createContext({
    
    // list of todos
    todos: [
        {
            id: 1,
            msg: "Shopping",
            completed: false
        }
    ],

    // functionalities for todo
    addTodo: (todoMsg) => {},
    updateTodo: (todoId, newMsg) => {},
    deleteTodo: (todoId) => {},
    toggleComplete: (todoId) => {}
})

// provider
export const TodoProvider = TodoContext.Provider

// custom hook
export function useTodo()
{
    return useContext(TodoContext)
}