import React, { useEffect, useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo })
{

    // getting access from context
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    // states for inputs
    const [msg, setMsg] = useState(todo.msg)
    const [isEditable, setEditable] = useState(false)

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >

            {/* checkbox for completed */}
            <input
                type="checkbox"
                className="cursor-pointer"
                // this feels like we are not using a state where we should use
                // but it is not so
                // since todos is a state, when we do toggleComplete, we are changing that state only
                // and since todo.completed is from that state, we are already using a state
                checked={todo.completed===true}
                onChange={()=>{toggleComplete(todo.id)}}
            />

            {/* input for showing msg and updating */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!isEditable}
            />

            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isEditable) {
                        updateTodo(todo.id, msg)
                        setEditable(false)
                    } else setEditable(true);
                }}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
