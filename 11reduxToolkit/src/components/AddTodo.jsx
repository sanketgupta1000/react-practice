import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
// importing the reducers needed
import { addTodo } from '../slices/todoSlice/todoSlice'


function AddTodo()
{

    // getting dispatch to help in dispatching methods
    const dispatch = useDispatch()

    const [input, setInput] = useState("")

    return (

        <div>

            <input
                type="text"
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
            />

            <button
                onClick={()=>
                    {
                        // hover to get information on how to call
                        dispatch(addTodo({text:input}))
                    }
                }
            >
                Add
            </button>

        </div>

    )


}


export default AddTodo