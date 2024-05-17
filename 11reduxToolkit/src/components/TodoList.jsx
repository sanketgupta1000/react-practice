import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../slices/todoSlice/todoSlice'

function TodoList() {

    // useSelector to access the state
    const todos = useSelector(state=>state.todos)

    const dispatch = useDispatch()

    return (


        <ul>

            {todos.map((todo)=>(
                <li key={todo.id}>

                    {todo.text}

                    <button
                        onClick={()=>{
                            console.log("onClick callback called", todo.id)
                            dispatch(removeTodo({id:todo.id}))}

                        }
                    >
                        Delete
                    </button>

                </li>
            ))}

        </ul>


    )


}


export default TodoList